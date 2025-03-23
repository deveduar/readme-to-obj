import { fetchReadme } from "./fetcher.js";
import { extractSections, saveReadmes } from "./converter.js";
import { repos } from "./repos.js";
import { generateHtml } from "./generateHtml.js";

async function updateReadmes() {
  let readmes: Record<string, any> = {};

  for (const repo of repos) {
    console.log(`🔍 Procesando ${repo.id}...`);
    const markdown = await fetchReadme(repo.url);
    if (!markdown) {
      console.warn(`⚠️ No se pudo obtener el README de ${repo.id}`);
      continue;
    }

    const titleMatch = markdown.match(/^#\s(.+)/);
    const title = titleMatch ? titleMatch[1] : repo.id;
    const sections = extractSections(markdown);

    readmes[repo.id] = { 
      title, 
      url: repo.url,
      sections 
    };
  }

  saveReadmes(readmes);
  generateHtml(readmes);
}

updateReadmes();