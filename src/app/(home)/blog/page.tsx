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
    <div className="not-prose">
      {contents.map(({ metadata, slug }) => (
        <div key={slug}>
          <CustomLink
            href={`/blog/${slug}`}
            key={slug}
          >
            {metadata.title}
          </CustomLink>

          <time className="block">{metadata.publishedAt}</time>
        </div>
      ))}
    </div>
  );
}
