import type { HowItWorksContent } from "@/lib/content-defaults";
import { defaultHowItWorks } from "@/lib/content-defaults";

// Icons are positional (step 0–3) and not editable via CMS
const stepIcons = [
  // Evaluación
  <svg key="eval" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
  </svg>,
  // Plan
  <svg key="plan" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
  </svg>,
  // Seguimiento
  <svg key="seg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  // Reevaluación
  <svg key="reeval" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>,
];

export default function HowItWorks({ content = defaultHowItWorks }: { content?: HowItWorksContent }) {
  return (
    <section id="como-funciona" className="bg-primary/5 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            {content.section_tag}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-2">
            {content.title}
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {content.steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="bg-surface rounded-2xl p-6 w-full shadow-sm border border-primary/10 flex flex-col items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {stepIcons[i] ?? stepIcons[0]}
                </div>
                <div className="text-xs font-bold text-primary/40 mb-1 tracking-widest">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-sm text-dark/60 leading-relaxed">{step.description}</p>
              </div>

              {i < content.steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/3 pointer-events-none"
                  style={{ left: `calc(${(i + 1) * 25}% - 12px)` }}
                >
                  <svg className="w-6 h-6 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
