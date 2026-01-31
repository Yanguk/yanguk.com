import type { PropsWithChildren } from "react";

export function MdxLayout({ children }: PropsWithChildren) {
  return (
    <main className="prose prose-yanguk prose-sm md:prose-base grow">
      {children}
    </main>
  );
}
