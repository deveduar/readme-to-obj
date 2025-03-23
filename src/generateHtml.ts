import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Code, Link, LinkReference,PhrasingContent, Parent, Text } from "mdast";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface CodeData extends Code {
  type: 'code';
  lang: string | null;
  meta: string | null;
  value: string;
}

interface LinkData extends Link {
  type: 'link';
  url: string;
  title: string | null;
  children: PhrasingContent[];
}

interface Readme {
  title: string;
  sections: {
    [key: string]: {
      [key: string]: (string | CodeData | LinkData)[];
    } | (string | CodeData | LinkData)[];
  };
}



export function generateHtml(readmes: Record<string, Readme>) {
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
    <div class="container">`;

  for (const repoId in readmes) {
    const readme = readmes[repoId];
    htmlContent += `
      <article class="readme">
        <h2 class="readme-title">${readme.title}</h2>`;
    
    for (const section in readme.sections) {
      const sectionContent = readme.sections[section];
      htmlContent += `
        <section class="readme-section">
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
  </body>
  </html>`;

  const outputPath = path.join(__dirname, "../src/data/readmes.html");
  fs.writeFileSync(outputPath, htmlContent);
}