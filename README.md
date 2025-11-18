# AI Content Factory

Generate engaging content for multiple social media platforms instantly with the power of AI.

## Overview

AI Content Factory is a Next.js web application that leverages Claude AI to automatically generate tailored content for various social media platforms from a single topic input. Save time and maintain consistency across your social media presence.

## Features

- **Multi-Platform Content Generation**: Create content for 4 platforms simultaneously
  - Twitter/X threads (5-7 engaging tweets)
  - Instagram captions with hashtags
  - LinkedIn professional posts
  - Blog post outlines

- **Powered by Claude AI**: Uses Anthropic's Claude 3.5 Sonnet for high-quality, contextual content
- **Beautiful UI**: Clean, modern interface built with Tailwind CSS
- **One-Click Copy**: Easily copy generated content to clipboard
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Fast & Efficient**: Optimized for quick content generation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- An Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/AI-Content-Factory.git
cd AI-Content-Factory
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Anthropic API key to `.env`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter your content topic in the text area
2. Click "Generate Content"
3. Wait a few seconds while AI creates your content
4. Review the generated content for each platform
5. Click "Copy" to copy content to your clipboard
6. Paste directly into your social media platforms

### Example Topics

- "The benefits of meditation for mental health"
- "10 productivity hacks for remote workers"
- "Sustainable living tips for beginners"
- "How AI is transforming customer service"
- "The future of electric vehicles"

## Project Structure

```
AI-Content-Factory/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts       # API endpoint for content generation
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── ContentForm.tsx        # Input form component
│   └── ContentResults.tsx     # Results display component
├── public/                    # Static assets
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## API Routes

### POST /api/generate

Generates content for all platforms based on the provided topic.

**Request Body:**
```json
{
  "topic": "Your content topic here"
}
```

**Response:**
```json
{
  "twitter": "Twitter thread content...",
  "instagram": {
    "caption": "Instagram caption...",
    "hashtags": "#hashtag1 #hashtag2..."
  },
  "linkedin": "LinkedIn post content...",
  "blog": "Blog post outline..."
}
```

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your `ANTHROPIC_API_KEY` environment variable in Vercel project settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/AI-Content-Factory)

### Environment Variables in Production

Make sure to set the following environment variable in your production environment:

- `ANTHROPIC_API_KEY`: Your Anthropic API key

## Configuration

### Customizing Content Generation

You can customize the content generation by modifying the prompt in `app/api/generate/route.ts`. Adjust:

- Tone and style
- Content length
- Number of tweets in thread
- Hashtag count
- Blog post structure

### Styling

Tailwind CSS classes can be modified in:
- `tailwind.config.ts` - Theme configuration
- Component files - Individual component styling
- `app/globals.css` - Global styles

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Next.js best practices

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Anthropic](https://www.anthropic.com/) for Claude AI
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

## Support

If you encounter any issues or have questions:

1. Check existing [Issues](https://github.com/yourusername/AI-Content-Factory/issues)
2. Create a new issue with detailed information
3. Contact: forplanai@gmail.com

## Roadmap

Future enhancements planned:

- [ ] Additional platform support (Facebook, Medium, etc.)
- [ ] Content scheduling integration
- [ ] Save and manage generated content
- [ ] Custom AI model selection
- [ ] Batch content generation
- [ ] Content analytics
- [ ] Multi-language support
- [ ] Content templates

---
👤 About the Developer
ianalp - AI Automation & Full-Stack Developer
I specialize in creating intelligent automation solutions that save time and boost productivity.
🛠️ Tech Stack

Backend: Python, FastAPI, Node.js
Frontend: React, Next.js, TypeScript
AI/ML: OpenAI API, Claude API, LangChain
Automation: Playwright, Selenium, Web Scraping
Data: Pandas, SQL, Data Visualization

📫 Contact

📧 Email: forplanai@gmail.com
🔗 GitHub: github.com/ianalp
🐦 Twitter: @ianalp0914
💼 Kmong: Available for freelance projects

🌟 Services
Looking for automation solutions? I can help with:

🤖 Web Scraping & Data Collection
📊 Business Dashboards & Analytics
✍️ AI-Powered Content Generation
🔄 Workflow Automation
💻 Custom Software Development

Open for freelance projects! Feel free to reach out.

<div align="center">
Made with ❤️ by ianalp
⭐ Star this repo if you find it useful!
</div>

Made by ianalp 
