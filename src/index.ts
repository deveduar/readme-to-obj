import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { extractSections, saveReadmes } from "./converter.js";
import { generateHtml } from "./generateHtml.js";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
const OBSIDIAN_PATH = process.env.READMES_OBSIDIAN_PATH;

async function updateReadmes() {
  if (!OBSIDIAN_PATH) {
    console.error("❌ Debes definir la variable READMES_OBSIDIAN_PATH en el archivo .env con tu ruta local de Obsidian.");
    console.error("Ejemplo Windows: READMES_OBSIDIAN_PATH=\"C:\\ruta\\a\\tu\\obsidian\\carpeta\"");
    process.exit(1);
  }

  if (!fs.existsSync(OBSIDIAN_PATH)) {
    console.error("❌ La carpeta de Obsidian indicada en READMES_OBSIDIAN_PATH no existe.");
    process.exit(1);
  }

  const fileNames = fs.readdirSync(OBSIDIAN_PATH)
    .filter((file: string) => file.toLowerCase().endsWith(".md"))
    .sort((a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  const readmes = [] as any[];

  for (let index = 0; index < fileNames.length; index++) {
    const fileName = fileNames[index];
    const filePath = path.join(OBSIDIAN_PATH, fileName);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ No se encontró el archivo local: ${fileName}`);
      continue;
    }

    const markdown = fs.readFileSync(filePath, "utf-8");
    const fileStats = fs.statSync(filePath);
    if (!markdown.trim()) {
      console.warn(`⚠️ El archivo está vacío: ${fileName}`);
      continue;
    }

    const { projectData, sections } = extractSections(markdown);
    const repoId = path.basename(fileName, ".md");
    const resolvedDate = projectData.date || fileStats.mtime.toISOString();

    readmes.push({
      id: index + 1,
      repoId,
      date: resolvedDate,
      ...projectData,
      readmeContent: {
        title: projectData.title || repoId,
        fileName,
        date: resolvedDate,
        sections
      }
    });
  }

  saveReadmes(readmes);
  generateHtml(readmes);
}

updateReadmes();
