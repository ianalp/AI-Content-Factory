import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { topic } = await request.json();

    if (!topic || typeof topic !== 'string') {
      return NextResponse.json(
        { error: 'Topic is required and must be a string' },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const prompt = `You are a professional content creator. Generate engaging content for the following topic across multiple platforms:

Topic: ${topic}

Please provide content in the following format:

TWITTER:
[Create a Twitter/X thread with 5-7 tweets. Number each tweet (1/, 2/, etc.) and make them engaging, concise, and shareable. Include relevant emojis where appropriate.]

INSTAGRAM:
Caption: [Create an engaging Instagram caption (150-200 words) with a hook, value, and call-to-action]
Hashtags: [Provide 15-20 relevant hashtags]

LINKEDIN:
[Create a professional LinkedIn post (200-300 words) that provides value, includes personal insights or stories, and encourages professional discussion. Use line breaks for readability.]

BLOG:
[Create a comprehensive blog post outline with:
- Catchy title
- Introduction (2-3 sentences)
- 3-5 main sections with subheadings
- Brief bullet points for each section
- Conclusion
Total: 300-400 words]

Make all content engaging, valuable, and platform-appropriate. Use a conversational yet professional tone.`;

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

    // Parse the response
    const twitterMatch = responseText.match(/TWITTER:\s*([\s\S]*?)(?=INSTAGRAM:|$)/i);
    const instagramMatch = responseText.match(/INSTAGRAM:\s*([\s\S]*?)(?=LINKEDIN:|$)/i);
    const linkedinMatch = responseText.match(/LINKEDIN:\s*([\s\S]*?)(?=BLOG:|$)/i);
    const blogMatch = responseText.match(/BLOG:\s*([\s\S]*?)$/i);

    const instagramContent = instagramMatch ? instagramMatch[1].trim() : '';
    const captionMatch = instagramContent.match(/Caption:\s*([\s\S]*?)(?=Hashtags:|$)/i);
    const hashtagsMatch = instagramContent.match(/Hashtags:\s*([\s\S]*?)$/i);

    const generatedContent = {
      twitter: twitterMatch ? twitterMatch[1].trim() : 'Content generation failed for Twitter',
      instagram: {
        caption: captionMatch ? captionMatch[1].trim() : 'Content generation failed for Instagram caption',
        hashtags: hashtagsMatch ? hashtagsMatch[1].trim() : '#content',
      },
      linkedin: linkedinMatch ? linkedinMatch[1].trim() : 'Content generation failed for LinkedIn',
      blog: blogMatch ? blogMatch[1].trim() : 'Content generation failed for Blog',
    };

    return NextResponse.json(generatedContent);
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate content' },
      { status: 500 }
    );
  }
}
