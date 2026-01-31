import type { PropsWithChildren } from "react";

export function MdxLayout({ children }: PropsWithChildren) {
  return (
    <main className="prose prose-yanguk prose-sm md:prose-base grow">
      {children}
    </main>
  );
}

export function MdxHtml({ html }: { html: string }) {
  return (
    <main
      className="prose prose-yanguk prose-sm md:prose-base grow"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: 블로그글 입니다
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
