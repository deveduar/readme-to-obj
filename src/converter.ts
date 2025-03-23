import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { remark } from "remark";
import remarkParse from "remark-parse";
import { Root, Heading, Paragraph, List, ListItem, Text, Code, Link, LinkReference, CodeData, LinkData, Emphasis } from "mdast";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function extractSections(markdown: string): Record<string, any> {
  const tree = remark().use(remarkParse).parse(markdown) as Root;
  const sections: Record<string, any> = {};
  let currentSection = "";
  let currentItems: (string | Code | Link | LinkReference | CodeData | LinkData)[] = [];
  let currentSubSection = "";

  for (const node of tree.children) {
    if (node.type === "heading") {
      const heading = node as Heading;
      const textNode = heading.children.find((child) => child.type === "text") as Text | undefined;
      
      if (textNode) {
        if (heading.depth === 2) {
          // Save current section before starting new one
          if (currentSection) {
            if (currentSubSection) {
              sections[currentSection][currentSubSection] = currentItems;
              currentSubSection = "";
            } else {
              sections[currentSection] = currentItems;
            }
          }
          currentSection = textNode.value;
          currentItems = [];
          sections[currentSection] = {};
        } else if (heading.depth === 3) {
          // Save current subsection before starting new one
          if (currentSubSection) {
            sections[currentSection][currentSubSection] = currentItems;
          }
          currentSubSection = textNode.value;
          currentItems = [];
        }
      }
    }else if (node.type === "paragraph") {
      let paragraphText = "";
      for (const child of (node as Paragraph).children) {
        if (child.type === "text") {
          paragraphText += child.value;
        } else if (child.type === "link") {
          const linkText = child.children
            .map(c => 'value' in c ? c.value : '')
            .join('');
          paragraphText += `[${linkText}](${child.url})`;
        } else if (child.type === "strong") {
          let strongText = "";
          for (const c of child.children) {
            if (c.type === "text") {
              strongText += c.value;
            } else if (c.type === "link") {
              const linkText = c.children
                .map(lc => 'value' in lc ? lc.value : '')
                .join('');
              strongText += `[${linkText}](${c.url})`;
            } else if (c.type === "emphasis") {
              const emphasisText = c.children
                .map(ec => 'value' in ec ? ec.value : '')
                .join('');
              strongText += `*${emphasisText}*`;
            }
          }
          paragraphText += `**${strongText}**`;
        } else if (child.type === "emphasis") {
          const emphasisText = child.children
            .map(c => 'value' in c ? c.value : '')
            .join('');
          paragraphText += `*${emphasisText}*`;
        }
      }
      if (paragraphText) {
        currentItems.push(paragraphText);
      }
    }
    else if (node.type === "list") {
      for (const item of (node as List).children) {
        const listItem = item as ListItem;
        const textNode = listItem.children.find((child) => child.type === "paragraph") as Paragraph | undefined;
        if (textNode) {
          let text = "";
          for (const child of textNode.children) {
            if (child.type === "text") {
              text += child.value;
            } else if (child.type === "link") {
              const linkText = child.children
                .map(c => 'value' in c ? c.value : '')
                .join('');
              text += `[${linkText}](${child.url})`;
            } else if (child.type === "strong") {
              let strongText = "";
              for (const c of child.children) {
                if (c.type === "text") {
                  strongText += c.value;
                } else if (c.type === "link") {
                  const linkText = c.children
                    .map(lc => 'value' in lc ? lc.value : '')
                    .join('');
                  strongText += `[${linkText}](${c.url})`;
                } else if (c.type === "emphasis") {
                  const emphasisText = c.children
                    .map(ec => 'value' in ec ? ec.value : '')
                    .join('');
                  strongText += `*${emphasisText}*`;
                }
              }
              text += `**${strongText}**`;
            } else if (child.type === "emphasis") {
              const emphasisText = child.children
                .map(c => 'value' in c ? c.value : '')
                .join('');
              text += `*${emphasisText}*`;
            }
          }
          if (text.trim()) {
            currentItems.push(text.trim());
          }
        }
      }
    } else if (node.type === "code") {
      const codeNode = node as Code;
      const codeData: CodeData = {
        type: 'code',
        lang: codeNode.lang || null,
        meta: codeNode.meta || null,
        value: codeNode.value
      };
      currentItems.push(codeData);
    }
  }

  if (currentSection) {
    if (currentSubSection) {
      sections[currentSection][currentSubSection] = currentItems;
    } else {
      sections[currentSection] = currentItems;
    }
  }

  return sections;
}

export function saveReadmes(readmes: Record<string, any>) {
    const filePath = path.join(__dirname, "../src/data/readmes.ts");
    fs.writeFileSync(filePath, `export const readmes = ${JSON.stringify(readmes, null, 2)};\n`);
    console.log("✅ README actualizado en", filePath);
  }
