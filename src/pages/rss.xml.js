import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "David Vela | Blog",
    description: "Mi viaje de aprendizaje de Astro",
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob("@content/posts/**/*.md")
    ),
    customData: `<language>es-ec</language>`,
  });
}
