export const slugToPath = (slug: string): string => {
  const chunks: string[] = slug.split("-");
  return (
    chunks.slice(0, 3).join("/") +
    "/" +
    chunks.slice(3, chunks.length).join("-")
  );
};
