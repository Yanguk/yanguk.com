import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
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
});

export default withMDX(nextConfig);
