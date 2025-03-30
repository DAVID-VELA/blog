import type { MarkdownInstance } from "astro";

type PathData = {
  params: { tag: string };
  props: { posts: MarkdownInstance<Record<string, any>>[] };
};

export type { PathData };
