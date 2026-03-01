import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
  coverColor: string;
  readingTime: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"));

  const posts: Post[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: (data.title as string) || slug,
      date: data.date
        ? new Date(data.date as string).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      excerpt: (data.excerpt as string) || "",
      contentHtml: marked(content) as string,
      coverColor: (data.coverColor as string) || "#e8f0ee",
      readingTime: (data.readingTime as string) || "5 min",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
