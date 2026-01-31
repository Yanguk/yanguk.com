import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkGithubBlockquoteAlert from "remark-github-blockquote-alert";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";

export const mdProcessor = unified()
  // remark
  .use(remarkParse)
  .use(remarkBreaks)
  .use(remarkGfm)
  .use(remarkToc, { heading: "목차" })
  .use(remarkGithubBlockquoteAlert, { tagName: "blockquote" })

  // remark → rehype
  .use(remarkRehype, { allowDangerousHtml: true })

  // rehype
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: "append" })
  .use(rehypeKatex, { strict: true, throwOnError: true })
  .use(rehypePrism, {
    defaultLanguage: "js",
    ignoreMissing: true,
  })
  .use(rehypeStringify, { allowDangerousHtml: true });
