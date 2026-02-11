"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import mermaid from "mermaid";

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

  useEffect(() => {
    mermaid.run({
      querySelector: ".mermaid",
    });
  }, [pathname]);

  return null;
}
