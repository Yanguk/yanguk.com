import type { PropsWithChildren } from "react";

export function MdxLayout({ children }: PropsWithChildren) {
  return (
    <main className="prose prose-invert prose-neutral prose-sm md:prose-base grow prose-a:hover:opacity-80">
      {children}
    </main>
  );
}
