import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { MdxLayout } from "@/app/_components/MdxLayout";
import { allFontVariable } from "@/font";
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

      <body className="flex min-h-dvh w-full max-w-5xl flex-col md:mx-auto md:p-18">
        <div className="mx-3 my-8 flex grow flex-col gap-10">
          <div className="flex grow flex-col gap-12 md:flex-row">
            <Header />

            <MdxLayout>{children}</MdxLayout>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
