import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // output: "export",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-breaks",
      "remark-gfm",
      ["remark-toc", { heading: "목차" }],
    ],
    rehypePlugins: [
      ["rehype-slug"],
      [
        "rehype-autolink-headings",
        {
          behavior: "append",
        },
      ],
      ["rehype-katex", { strict: true, throwOnError: true }],
      "rehype-plugin-image-native-lazy-loading",
      ["rehype-prism-plus", { defaultLanguage: "js", ignoreMissing: true }],
    ],
  },
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
