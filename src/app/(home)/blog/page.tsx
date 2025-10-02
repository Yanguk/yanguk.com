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
        <div key={slug}>
          <CustomLink
            href={`/blog/${slug}`}
            className="break-words font-semibold text-foreground text-lg hover:opacity-80 md:text-xl"
          >
            {metadata.title}
          </CustomLink>

          <time className="block">{metadata.publishedAt}</time>
        </div>
      ))}
    </div>
  );
}
