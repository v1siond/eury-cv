import Link from "next/link";
import type { PolicyContent } from "@/lib/content-defaults";
import { defaultPolicy } from "@/lib/content-defaults";

export default function Policy({ content = defaultPolicy }: { content?: PolicyContent }) {
  return (
    <section id="politica" className="bg-surface border-t border-primary/10 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl font-bold text-dark">{content.title}</h2>
          <p className="text-muted text-sm mt-2">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {content.policies.map((p) => (
            <div key={p.title} className="bg-bg rounded-xl p-6 border border-primary/10">
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-dark text-sm mb-2">{p.title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted flex items-center justify-center gap-4">
          <Link
            href="/politica-privacidad"
            className="hover:text-primary transition-colors underline underline-offset-2"
          >
            Política de privacidad
          </Link>
          <span className="text-muted/40">·</span>
          <Link
            href="/aviso-legal"
            className="hover:text-primary transition-colors underline underline-offset-2"
          >
            Aviso legal
          </Link>
        </div>
      </div>
    </section>
  );
}
