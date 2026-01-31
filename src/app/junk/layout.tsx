import type { Metadata } from "next";
import "@/styles/globals.css";
import { allFontVariable } from "@/app/(home)/font";

export const metadata: Metadata = {
  title: "yanguk",
  description: "junk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${allFontVariable} dark:prose-invert prose prose-neutral md:prose-lg prose-code:text-highlight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
