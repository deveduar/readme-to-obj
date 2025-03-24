import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { remark } from "remark";
import remarkParse from "remark-parse";
import { Root, Heading, Paragraph, List, ListItem, Text, Code, Link, LinkReference, CodeData, LinkData, Emphasis, InlineCode, Node, PhrasingContent } from "mdast";
import { Readme } from "./types.js";
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function processInlineElements(node: PhrasingContent): string {
  if (node.type === "text") return node.value;
  if (node.type === "inlineCode") return `\`${node.value}\``;
  if (node.type === "link") {
    const linkText = node.children
      .map((c: PhrasingContent) => 'value' in c ? c.value : '')
      .join('');
    return `[${linkText}](${node.url})`;
  }
  if (node.type === "strong") {
    const strongText = node.children
      .map((c: PhrasingContent) => processInlineElements(c))
      .join('');
    return `**${strongText}**`;
  }
  if (node.type === "emphasis") {
    const emphasisText = node.children
      .map((c: PhrasingContent) => processInlineElements(c))
      .join('');
    return `*${emphasisText}*`;
  }
  return '';
}

function processParagraph(node: Paragraph): string {
  return node.children.map(child => processInlineElements(child)).join('');
}

function processNestedList(nestedItem: ListItem): string {
  return nestedItem.children
    .map(nc => {
      if (nc.type === "paragraph") {
        return processParagraph(nc as Paragraph);
      }
      return '';
    })
    .join('');
}

function handleHeading(
  heading: Heading,
  sections: Record<string, any>,
  currentState: {
    currentSection: string;
    currentSubSection: string;
    currentItems: any[];
  }
): void {
  const textNode = heading.children.find((child) => child.type === "text") as Text | undefined;
  
  if (!textNode) return;

  if (heading.depth === 2) {
    if (currentState.currentSection) {
      if (currentState.currentSubSection) {
        sections[currentState.currentSection][currentState.currentSubSection] = currentState.currentItems;
        currentState.currentSubSection = "";
      } else {
        sections[currentState.currentSection] = currentState.currentItems;
      }
    }
    currentState.currentSection = textNode.value;
    currentState.currentItems = [];
    sections[currentState.currentSection] = {};
  } else if (heading.depth === 3 || heading.depth === 4) {
    if (currentState.currentSubSection) {
      sections[currentState.currentSection][currentState.currentSubSection] = currentState.currentItems;
    }
    currentState.currentSubSection = textNode.value;
    currentState.currentItems = [];
  }
}


export function extractSections(markdown: string): Record<string, any> {
  const { data: frontmatter, content } = matter(markdown);
  const tree = remark().use(remarkParse).parse(markdown) as Root;
  const sections: Record<string, any> = {};
  const currentState = {
    currentSection: "",
    currentSubSection: "",
    currentItems: [] as (string | Code | Link | LinkReference | CodeData | LinkData)[]
  };

  for (const node of tree.children) {
    if (node.type === "heading") {
      handleHeading(node as Heading, sections, currentState);
    } 
    else if (node.type === "paragraph") {
      const paragraphText = processParagraph(node as Paragraph);
      if (paragraphText) {
        currentState.currentItems.push(paragraphText);
      }
    }
    else if (node.type === "list") {
      for (const item of (node as List).children) {
        const listItem = item as ListItem;
        
        for (const child of listItem.children) {
          if (child.type === "paragraph") {
            const text = processParagraph(child as Paragraph);
            if (text.trim()) {
              currentState.currentItems.push(text.trim());
            }
          } else if (child.type === "list") {
            for (const nestedItem of child.children) {
              if (nestedItem.type === "listItem") {
                const nestedText = processNestedList(nestedItem as ListItem);
                if (nestedText.trim()) {
                  currentState.currentItems.push(`  - ${nestedText.trim()}`);
                }
              }
            }
          }
        }
      }
    }
    else if (node.type === "code") {
      const codeNode = node as Code;
      currentState.currentItems.push({
        type: 'code',
        lang: codeNode.lang || null,
        meta: codeNode.meta || null,
        value: codeNode.value
      });
    }
  }

  // Handle final section
  if (currentState.currentSection) {
    if (currentState.currentSubSection) {
      sections[currentState.currentSection][currentState.currentSubSection] = currentState.currentItems;
    } else {
      sections[currentState.currentSection] = currentState.currentItems;
    }
  }

  return {
    projectData: frontmatter, // Contains all the YAML data
    sections    // Contains the markdown sections
  };
}

export function saveReadmes(readmes: Readme[]) {
    const filePath = path.join(__dirname, "../src/data/readmes.ts");
    fs.writeFileSync(filePath, `export const readmes = ${JSON.stringify(readmes, null, 2)};\n`);
    console.log("✅ README actualizado en", filePath);
  }
