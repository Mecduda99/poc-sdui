import fs from "fs";
import path from "path";
import { pageSchema, type PageData } from "@/src/schemas/page.schema";

const pagesDirectory = path.join(process.cwd(), "src", "data", "pages");

export function getPageSlugs() {
  return fs
    .readdirSync(pagesDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => fileName.replace(/\.json$/, ""));
}

export function getPageBySlug(slug: string): PageData | null {
  const filePath = path.join(pagesDirectory, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawPage = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return pageSchema.parse(rawPage);
}
