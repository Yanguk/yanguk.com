import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function MdxLayout({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "dark:prose-invert prose prose-neutral md:prose-lg prose-code:text-highlight",
        className,
      )}
    >
      {children}
    </div>
  );
}
