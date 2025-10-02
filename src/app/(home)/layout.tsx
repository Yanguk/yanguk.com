import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/app/(home)/_components/Footer";
import Header from "@/app/(home)/_components/Header";
import MdxLayout from "@/app/(home)/_components/MdxLayout";
import { allFontVariable } from "@/app/font";
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
    <html lang="ko" className="dark">
      <body
        className={`${allFontVariable} antialiased flex min-h-dvh flex-col md:mx-auto max-w-5xl  md:p-18`}
      >
        <div className="flex-1 flex flex-col md:flex-row gap-12 m-3 my-8">
          <Header />

          <main className="flex-1">
            <MdxLayout>{children}</MdxLayout>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
