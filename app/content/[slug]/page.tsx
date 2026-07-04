import { Renderer } from "@/src/components/Renderer";
import { getPageBySlug, getPageSlugs } from "@/src/lib/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// 1. Gera os caminhos estáticos (substituto do getStaticPaths)
export async function generateStaticParams() {
  const slugs = getPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 2. Define metadados dinâmicos
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  return {
    title: page?.title || "Página não encontrada",
    description: page?.description,
  };
}

// 3. Componente principal (substituto do ContentPage)
export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound(); // Dispara o arquivo not-found.tsx do Next.js
  }

  return <Renderer blocks={page.blocks} />;
}