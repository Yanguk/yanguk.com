import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-breaks",
      "remark-gfm",
      ["remark-toc", { heading: "The Table" }],
    ],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-katex", { strict: true, throwOnError: true }],
      ["rehype-prism-plus", { defaultLanguage: "js", ignoreMissing: true }],
      "rehype-autolink-headings",
      "rehype-plugin-image-native-lazy-loading",
      "rehype-preset-minify",
    ],
  },
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
