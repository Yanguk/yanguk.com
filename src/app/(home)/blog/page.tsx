import CustomLink from "@/app/(home)/_components/Link";
import { cn } from "@/lib/utils";
import { getBlogSlugs, importBlogContent } from "@/util";

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
    <>
      {contents.map(({ metadata, slug }, idx) => (
        <div key={slug}>
          <CustomLink href={`/blog/${slug}`} key={slug} className="no-underline">
            <h3 className={cn("mb-1", idx === 0 ? "mt-0" : "mt-6")}>{metadata.title}</h3>
          </CustomLink>
          <div>{metadata.publishedAt}</div>
        </div>
      ))}
    </>
  );
}
