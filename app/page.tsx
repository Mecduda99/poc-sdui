import { Renderer } from "@/src/components/Renderer";
import { getPageByFilename } from "@/src/lib/content";
import { notFound } from "next/navigation";

export default async function Home() {
  const pageFilename = process.env.NEXT_PUBLIC_HOME_PAGE_DATA || "home.json";

  const page = getPageByFilename(pageFilename);

  if (!page) {
    notFound();
  }

  return <Renderer blocks={page.blocks} />;
}