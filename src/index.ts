import { fetchReadme } from "./fetcher.js";
import { extractSections, saveReadmes } from "./converter.js";
import { repos } from "./repos.js";
import { generateHtml } from "./generateHtml.js";

async function updateReadmes() {
  let readmes = [] as any[];

  for (const repo of repos) {
    console.log(`🔍 Procesando ${repo.repoId}...`);
    const markdown = await fetchReadme(repo.url);
    if (!markdown) {
      console.warn(`⚠️ No se pudo obtener el README de ${repo.repoId}`);
      continue;
    }

    const { projectData, sections } = extractSections(markdown);
    
    readmes.push({ 
      id: repo.id,
      repoId: repo.repoId,
      ...projectData, // This will spread the YAML frontmatter data at the root level
      readmeContent: {
        title: projectData.title || repo.repoId,
        url: repo.url,
        sections
      }
    });
  }

  saveReadmes(readmes);
  generateHtml(readmes);
}

updateReadmes();