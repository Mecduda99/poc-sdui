import fs from "fs";
import path from "path";
import { pageSchema, type PageData } from "@/src/schemas/page.schema";

const pagesDirectory = path.join(process.cwd(), "src", "data", "pages");

export function getPageByFilename(filename: string): PageData | null {
  const filePath = path.join(pagesDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawPage = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return pageSchema.parse(rawPage);
}


