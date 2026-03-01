import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Eurymar Bustillo",
  description:
    "Artículos sobre integración neuro-motora, reflejos primitivos y desarrollo infantil.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Blog
          </span>
          <h1 className="font-serif text-4xl font-bold text-dark mt-2">
            Artículos y recursos
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Información práctica sobre integración neuro-motora, reflejos
            primitivos y desarrollo infantil.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted">Próximamente, nuevos artículos.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-surface rounded-2xl overflow-hidden border border-primary/10 hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-44 w-full"
                  style={{ backgroundColor: post.coverColor }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted">
                    <span>
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>{post.readingTime} lectura</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-dark/60 text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Leer artículo
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
