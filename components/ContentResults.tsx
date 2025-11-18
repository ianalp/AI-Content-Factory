'use client';

import { useState } from 'react';
import { GeneratedContent } from '@/app/page';

interface ContentResultsProps {
  content: GeneratedContent;
}

interface PlatformCardProps {
  title: string;
  content: string;
  icon: string;
  color: string;
}

function PlatformCard({ title, content, icon, color }: PlatformCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4" style={{ borderTopColor: color }}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-2xl mr-2">{icon}</span>
            {title}
          </h3>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-gray-700 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function ContentResults({ content }: ContentResultsProps) {
  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Your Generated Content
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlatformCard
          title="Twitter Thread"
          content={content.twitter}
          icon="𝕏"
          color="#1DA1F2"
        />

        <PlatformCard
          title="Instagram"
          content={`${content.instagram.caption}\n\n${content.instagram.hashtags}`}
          icon="📷"
          color="#E4405F"
        />

        <PlatformCard
          title="LinkedIn Post"
          content={content.linkedin}
          icon="💼"
          color="#0A66C2"
        />

        <PlatformCard
          title="Blog Draft"
          content={content.blog}
          icon="📝"
          color="#FF6B6B"
        />
      </div>
    </div>
  );
}
