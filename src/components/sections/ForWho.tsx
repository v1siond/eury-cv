import type { ForWhoContent } from "@/lib/content-defaults";
import { defaultForWho } from "@/lib/content-defaults";

function CheckIcon({ accent = false }: { accent?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${accent ? "text-accent" : "text-primary"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ForWho({ content = defaultForWho }: { content?: ForWhoContent }) {
  return (
    <section id="para-quien" className="bg-surface py-20">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Niños card */}
          <div className="bg-bg rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                🧒
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark">{content.ninos.title}</h3>
                <p className="text-sm text-muted">{content.ninos.age_range}</p>
              </div>
            </div>
            <p className="text-dark/60 text-sm mb-5 leading-relaxed">{content.ninos.intro}</p>
            <ul className="space-y-3">
              {content.ninos.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-dark/80">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Adultos card */}
          <div className="bg-bg rounded-2xl p-8 border border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark">{content.adultos.title}</h3>
                <p className="text-sm text-muted">{content.adultos.age_range}</p>
              </div>
            </div>
            <p className="text-dark/60 text-sm mb-5 leading-relaxed">{content.adultos.intro}</p>
            <ul className="space-y-3">
              {content.adultos.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-dark/80">
                  <CheckIcon accent />
                  {item}
                </li>
              ))}
            </ul>
            {content.adultos.note && (
              <div className="mt-6 p-4 bg-accent/10 rounded-xl">
                <p className="text-xs text-accent font-medium">{content.adultos.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
