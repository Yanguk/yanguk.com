"use client";

import mermaid from "mermaid";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MermaidInit() {
  const pathname = usePathname();

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      themeVariables: {
        fontFamily: "var(--font-mono)",
        primaryColor: "#58a6ff",
        background: "transparent",
        mainBkg: "transparent",
      },
    });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 페이지 변경시 실행
  useEffect(() => {
    mermaid.run({
      querySelector: ".mermaid",
    });
  }, [pathname]);

  return null;
}
