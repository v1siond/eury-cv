"use client";

import { useState } from "react";
import type { FAQContent } from "@/lib/content-defaults";
import { defaultFAQ } from "@/lib/content-defaults";

export default function FAQ({ content = defaultFAQ }: { content?: FAQContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-bg py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            {content.section_tag}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-2">
            {content.title}
          </h2>
          <p className="text-muted mt-3">{content.subtitle}</p>
        </div>

        <div className="space-y-3">
          {content.items.map((faq, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-primary/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-dark pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-dark/70 text-sm leading-relaxed border-t border-primary/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
