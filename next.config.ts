import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-breaks", "remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-prism-plus", { defaultLanguage: "js", ignoreMissing: true }],
    ],
  },
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
