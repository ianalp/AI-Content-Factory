'use client';

import { useState } from 'react';
import ContentForm from '@/components/ContentForm';
import ContentResults from '@/components/ContentResults';

export interface GeneratedContent {
  twitter: string;
  instagram: {
    caption: string;
    hashtags: string;
  };
  linkedin: string;
  blog: string;
}

export default function Home() {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (topic: string) => {
    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate content');
      }

      const data = await response.json();
      setGeneratedContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Content Factory
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate engaging content for multiple social media platforms instantly.
            Just enter your topic and let AI do the work!
          </p>
        </div>

        <ContentForm onGenerate={handleGenerate} isLoading={isLoading} />

        {error && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {generatedContent && <ContentResults content={generatedContent} />}
      </div>
    </main>
  );
}
