import CustomLink from "@/app/_components/Link";
import { getAllBlogContents } from "@/lib/blog";

export const dynamicParams = false;

export default async function Page() {
  const contents = await getAllBlogContents();

  return (
    <div className="not-prose flex flex-col gap-7">
      {contents.map(({ metadata, slug }) => (
        <CustomLink
          className="hover:opacity-85"
          key={slug}
          href={`/blog/${slug}`}
        >
          <p className="wrap-break-word font-semibold text-base text-heading-1 md:text-lg">
            {metadata.title}
          </p>

          <time className="block opacity-50">{metadata.publishedAt}</time>
        </CustomLink>
      ))}
    </div>
  );
}
