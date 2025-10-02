import CustomLink from "@/app/(home)/_components/Link";
import MdxLayout from "@/app/(home)/_components/MdxLayout";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/site-meta-data";
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
    <>
      {contents.map(({ metadata, slug }, idx) => (
        <MdxLayout key={slug}>
          <CustomLink href={`/blog/${slug}`} key={slug} className="no-underline">
            <h2 className={cn("mb-1", idx === 0 ? "mt-0!" : "", "md:mb-1")}>{metadata.title}</h2>
          </CustomLink>
          <div>{metadata.publishedAt}</div>
        </MdxLayout>
      ))}
    </>
  );
}
