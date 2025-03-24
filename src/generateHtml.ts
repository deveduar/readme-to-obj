import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Code, Link, LinkReference,PhrasingContent, Parent, Text } from "mdast";
import { Readme, CodeData, LinkData } from "./types.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function generateHtml(readmes: Readme[]) {
  let htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README Files</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <nav class="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>`;


   // Generate table of contents
   for (const repoId in readmes) {
    const readme = readmes[repoId];
    htmlContent += `
          <li>
            <a href="#${repoId}">${readme.readmeContent.title}</a>
            <ul>`;
    
    // Add section links
    for (const section in readme.readmeContent.sections) {
      const sectionId = `${repoId}-${section.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      htmlContent += `
              <li><a href="#${sectionId}">${section}</a></li>`;
    }
    
    htmlContent += `
            </ul>
          </li>`;
  }

  htmlContent += `
        </ul>
      </nav>
        <div class="readme-container">`;

    for (const repoId in readmes) {
      const readme = readmes[repoId];
      htmlContent += `
        <article id="${repoId}" class="readme">
          <h2 class="readme-title">${readme.readmeContent.title}</h2>`;
    
      for (const section in readme.readmeContent.sections) {
        const sectionId = `${repoId}-${section.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const sectionContent = readme.readmeContent.sections[section];
        htmlContent += `
          <section id="${sectionId}" class="readme-section">
            <h2 class="section-title">${section}</h2>`;
      
          if (Array.isArray(sectionContent)) {
            // Handle regular section content
            for (const item of sectionContent) {
              if (typeof item === 'string') {
                htmlContent += `<p class="section-text">${item}</p>`;
              } else if ('type' in item && item.type === 'code') {
                const codeItem = item as CodeData;
                htmlContent += `<pre><code class="language-${codeItem.lang || 'text'}">${codeItem.value}</code></pre>`;
              } else if ('type' in item && item.type === 'link') {
                const linkItem = item as LinkData;
                const linkText = linkItem.children
                  .map((child) => {
                    if ('type' in child && child.type === 'text') {
                      return (child as Text).value;
                    }
                    return '';
                  })
                  .join('');
                const title = linkItem.title ? ` title="${linkItem.title}"` : '';
                htmlContent += `<a href="${linkItem.url}"${title} target="_blank" class="readme-link">${linkText}</a>`;
              }
            }
          } else {
            // Handle subsections with the same logic
            for (const subSection in sectionContent) {
              htmlContent += `<h3 class="subsection-title">${subSection}</h3>`;
              const subSectionContent = sectionContent[subSection];
              
              for (const item of subSectionContent) {
                if (typeof item === 'string') {
                  htmlContent += `<p class="section-text">${item}</p>`;
                } else if (item.type === 'code') {
                  const codeItem = item as CodeData;
                  htmlContent += `<pre><code class="language-${codeItem.lang || 'text'}">${codeItem.value}</code></pre>`;
                } else if (item.type === 'link') {
                  const linkItem = item as LinkData;
                  const linkText = linkItem.children
                    .map(child => {
                      if ('value' in child) {
                        return child.value;
                      }
                      return '';
                    })
                    .join('');
                  const title = linkItem.title ? ` title="${linkItem.title}"` : '';
                  htmlContent += `<a href="${linkItem.url}"${title} target="_blank" class="readme-link">${linkText}</a>`;
                }
              }
            }
          }
      
      htmlContent += `</section>`;
    }
    
    htmlContent += `</article>`;
  }

  htmlContent += `
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
    <script src="app.js"></script>
  </body>
  </html>`;

  const outputPath = path.join(__dirname, "../src/data/readmes.html");
  fs.writeFileSync(outputPath, htmlContent);
}