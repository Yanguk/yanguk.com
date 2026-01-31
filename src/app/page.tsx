import { MdxHtml } from "@/app/_components/MdxLayout";
import { importAboutContent } from "@/lib/blog";

export default async function Page() {
  const { htmlContent } = await importAboutContent();

  return <MdxHtml html={htmlContent} />
}
