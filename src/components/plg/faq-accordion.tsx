'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({
  items,
  variant = 'light',
}: {
  items: FaqItem[];
  variant?: 'light' | 'dark';
}) {
  const [open, setOpen] = useState<number | null>(null);

  const tokens = variant === 'dark'
    ? {
        border: 'border-[rgba(245,240,232,0.12)]',
        question: 'text-text-inv',
        icon: 'text-[rgba(245,240,232,0.74)]',
        answer: 'text-[rgba(245,240,232,0.82)]',
      }
    : {
        border: 'border-border',
        question: 'text-text',
        icon: 'text-text-3',
        answer: 'text-text-2',
      };

  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className={cn('border-b', tokens.border)}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <h3 className={cn('text-[16px] font-medium pr-4', tokens.question)}>{item.q}</h3>
            <svg
              className={cn(
                'w-4 h-4 shrink-0 transition-transform duration-200',
                tokens.icon,
                open === i ? 'rotate-45' : ''
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-200 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <p className={cn('text-[14px] leading-[1.65] pb-6', tokens.answer)}>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
