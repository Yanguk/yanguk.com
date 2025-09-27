export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div className="prose font-mono max-w-none dark:prose-invert">
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
