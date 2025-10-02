import type { MetadataRoute } from "next";
import { siteMetadata } from "@/site-meta-data";
import { getBlogSlugs, importBlogContent } from "@/lib/blog";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = getBlogSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await importBlogContent(slug);

      return {
        slug,
        lastModified: metadata.publishedAt,
      };
    }),
  );

  const routes = [""].map((route) => ({
    url: `${siteMetadata.siteUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  const blogRoutes = posts.map((item) => {
    const date = new Date(item.lastModified);
    const hours = date.getHours();

    return {
      url: `${siteMetadata.siteUrl}/blog/${item.slug}`,
      lastModified: new Date(date.setHours(hours - 9)).toISOString(),
    };
  });

  return [...routes, ...blogRoutes];
}
