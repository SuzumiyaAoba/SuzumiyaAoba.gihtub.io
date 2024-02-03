import { getCollection } from "astro:content";

export const slugToPath = (slug: string): string => {
  const chunks: string[] = slug.split("-");
  return (
    chunks.slice(0, 3).join("/") +
    "/" +
    chunks.slice(3, chunks.length).join("-")
  );
};

export const getBlogEntries = async () => {
  const blogEntries = await getCollection("blog");
  return blogEntries
    .filter((entry) =>
      import.meta.env.PROD ? entry.data.draft !== true : true,
    )
    .map((entry) => {
      const slug = slugToPath(entry.slug);
      return {
        params: { slug },
        props: { slug, entry },
      };
    });
};
