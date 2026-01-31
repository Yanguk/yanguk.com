import { notFound } from "next/navigation";
import { GiscusWrapper } from "@/app/_components/Giscus";
import { getBlogSlugs, importBlogContent } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Content, metadata } = await importBlogContent(slug);

  if (metadata.draft) {
    return notFound(); // Render 404 page
  }

  return (
    <>
      <Content />
      <GiscusWrapper className="mt-20 border-border/60 border-t-4 border-double pt-10" />
    </>
  );
}
