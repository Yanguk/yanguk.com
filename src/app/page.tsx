import MdxLayout from "@/components/mdx-layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import About from "@/content/about.mdx";

export default function Home() {
  return (
    <MdxLayout>
      <div className="font-sans flex flex-col md:flex-row justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-5xl m-auto">
        <div>
          <Avatar>
            <AvatarFallback className="font-backyard">YU</AvatarFallback>
          </Avatar>
        </div>

        <main className="flex-1 grid">
          <About />

          <footer className="flex gap-[24px] flex-wrap items-center justify-center">
            Github:{" "}
          </footer>
        </main>
      </div>
    </MdxLayout>
  );
}
