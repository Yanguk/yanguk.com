import { getBlogSlugs, importBlogContent } from "@/app/blog/util";

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

  const { default: Content } = await importBlogContent(slug);

  return <Content />;
}
