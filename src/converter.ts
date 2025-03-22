import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { remark } from "remark";
import remarkParse from "remark-parse";
import { Root, Heading, Paragraph, List, ListItem, Text, Code } from "mdast";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function extractSections(markdown: string): Record<string, string> {
  const tree = remark().use(remarkParse).parse(markdown) as Root;
  const sections: Record<string, string> = {};
  let currentSection = "";
  let currentContent = "";

  for (const node of tree.children) {
    if (node.type === "heading" && (node as Heading).depth === 2) {
      const textNode = (node as Heading).children.find((child) => child.type === "text") as Text | undefined;
      if (textNode) {
        if (currentSection) {
          sections[currentSection] = currentContent.trim();
        }
        currentSection = textNode.value;
        currentContent = "";
      }
    } else if (node.type === "paragraph") {
      const text = (node as Paragraph).children
        .filter((child) => child.type === "text")
        .map((child) => (child as Text).value)
        .join(" ");
      currentContent += text + "\n";
    } else if (node.type === "list") {
      for (const item of (node as List).children) {
        const listItem = item as ListItem;
        const textNode = listItem.children.find((child) => child.type === "paragraph") as Paragraph | undefined;
        if (textNode) {
          const text = textNode.children
            .filter((child) => child.type === "text")
            .map((child) => (child as Text).value)
            .join(" ");
          currentContent += `- ${text}\n`;
        }
      }
    } else if (node.type === "code") {
      const codeNode = node as Code;
      currentContent += `\`\`\`${codeNode.lang || "text"}\n${codeNode.value}\n\`\`\`\n`;
    }
  }

  if (currentSection) {
    sections[currentSection] = currentContent.trim();
  }

  return sections;
}

export function saveReadmes(readmes: Record<string, any>) {
    const filePath = path.join(__dirname, "../src/data/readmes.ts");
    fs.writeFileSync(filePath, `export const readmes = ${JSON.stringify(readmes, null, 2)};\n`);
    console.log("✅ README actualizado en", filePath);
  }
