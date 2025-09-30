import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/app/(home)/_components/Footer";
import Header from "@/app/(home)/_components/Header";
import MdxLayout from "@/app/(home)/_components/MdxLayout";
import { allFontVariable } from "@/app/font";

export const metadata: Metadata = {
  title: "yanguk",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${allFontVariable} antialiased`}>
        <div className="flex min-h-screen flex-col mx-auto max-w-5xl p-20">
          <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12">
            <Header />

            <main>
              <MdxLayout>{children}</MdxLayout>
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
