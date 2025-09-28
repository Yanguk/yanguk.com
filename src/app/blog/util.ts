import fs from "fs";
import { MDXContent } from "mdx/types";
import path from "path";
import { z } from "zod";

const MetadataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  publishedAt: z.string().min(1, "Published date is required"),
  summary: z.string().min(1, "Summary is required"),
});

type Metadata = z.infer<typeof MetadataSchema>;

type ContentModule = {
  default: MDXContent;
  metadata: Metadata;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export function getBlogSlugs() {
  const directory = path.join(process.cwd(), "src", "content");

  return getMDXFiles(directory).map((file) =>
    path.basename(file, path.extname(file)),
  );
}

export async function getBlogContentModule(
  slug: string,
): Promise<ContentModule> {
  const module = await import(`@/content/${slug}.mdx`);

  return {
    ...module,
    metadata: MetadataSchema.parse(module.metadata),
  };
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

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

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
