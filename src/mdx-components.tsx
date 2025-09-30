import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  code: ({ children, className }) => {
    // code block 내부의 code는 className이 있음
    const isCodeBlock = className?.startsWith("language-");

    if (isCodeBlock) {
      return <code className={className}>{children}</code>;
    }

    return <code className="text-blue-400 font-bold">{children}</code>;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
