import CustomLink from "@/app/(home)/_components/Link";
import { getBlogSlugs, importBlogContent } from "@/lib/blog";

export const dynamicParams = false;

export default async function Page() {
  const contents = await Promise.all(
    getBlogSlugs().map(async (slug) => {
      const { metadata } = await importBlogContent(slug);

      return {
        metadata,
        slug,
      };
    }),
  );

  return (
    <div className="not-prose flex flex-col gap-7">
      {contents.map(({ metadata, slug }) => (
        <CustomLink
          className="hover:opacity-85"
          key={slug}
          href={`/blog/${slug}`}
        >
          <p className="mb-2 break-words font-semibold text-foreground text-lg md:text-xl">
            {metadata.title}
          </p>

          <time className="block">{metadata.publishedAt}</time>
        </CustomLink>
      ))}
    </div>
  );
}
