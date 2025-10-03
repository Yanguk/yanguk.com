import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/app/(home)/_components/Footer";
import Header from "@/app/(home)/_components/Header";
import { allFontVariable } from "@/app/(home)/font";
import { siteMetadata } from "@/site-meta-data";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`dark ${allFontVariable} scroll-smooth antialiased`}
    >
      <meta name="apple-mobile-web-app-title" content="yanguk" />

      <body
        className={`flex h-dvh w-full max-w-5xl flex-col md:mx-auto md:p-18`}
      >
        <div className="m-3 my-8 flex flex-1 flex-col gap-10">
          <div className="flex flex-1 flex-col gap-12 md:flex-row">
            <Header />

            <main className="prose prose-invert prose-neutral prose-sm md:prose-base size-full prose-a:hover:opacity-80">
              {children}
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
