import type { PlansContent } from "@/lib/content-defaults";
import { defaultPlans } from "@/lib/content-defaults";

export default function Plans({ content = defaultPlans }: { content?: PlansContent }) {
  return (
    <section id="planes" className="bg-surface py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            {content.section_tag}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-2">
            {content.title}
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col border transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? "border-primary bg-primary text-white shadow-xl"
                  : "border-primary/15 bg-bg"
              }`}
            >
              {plan.badge && (
                <span
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                    plan.highlighted ? "text-white/60" : "text-accent"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <h3
                className={`font-serif text-xl font-bold mb-1 ${
                  plan.highlighted ? "text-white" : "text-dark"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-xs font-medium mb-3 ${
                  plan.highlighted ? "text-white/70" : "text-muted"
                }`}
              >
                {plan.tagline}
              </p>
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  plan.highlighted ? "text-white/80" : "text-dark/60"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white/70" : "text-primary"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.highlighted ? "text-white/80" : "text-dark/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${plan.whatsapp_number}`}
                className={`text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-accent text-white hover:bg-accent-dark"
                }`}
              >
                {plan.cta_text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
