import fs from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";
import { z } from "zod";

const MetadataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  publishedAt: z.string().min(1, "Published date is required"),
  draft: z.boolean().optional().default(false),
  fileName: z.string(),
});

type Metadata = z.infer<typeof MetadataSchema>;

type ContentModule = {
  default: MDXContent;
  metadata: Metadata;
};

export function getBlogSlugs() {
  const dir = path.join(process.cwd(), "src", "content", "blog");

  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => path.basename(file, path.extname(file)));
}

export async function importBlogContent(slug: string): Promise<ContentModule> {
  const module = await import(`@/content/blog/${slug}.mdx`);

  return {
    ...module,
    metadata: MetadataSchema.parse({
      ...module.metadata,
      fileName: slug,
    }),
  };
}

export async function getAllBlogContents() {
  const contents = await Promise.all(
    getBlogSlugs().map(async (slug) => {
      const { metadata } = await importBlogContent(slug);

      return {
        metadata,
        slug,
      };
    }),
  );

  contents.sort((a, b) =>
    b.metadata.publishedAt.localeCompare(a.metadata.fileName),
  );

  return contents.filter(({ metadata }) => !metadata.draft);
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
