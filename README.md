# README to Object Converter

This project converts local `.md` files from an Obsidian vault into JavaScript objects. The goal is to facilitate the extraction of sections and content from local Markdown notes in a structured way.

## Description

The project reads local `.md` files from your Obsidian vault, processes them to extract key sections (such as headers, paragraphs, lists, and code), and converts them into a JavaScript object. This object contains the sections with their corresponding content and is saved into a `.ts` file for later use. Additionally, it generates an HTML view in `src/data/readmes.html`.

## Features

- Reads local Markdown files from your Obsidian vault.
- Automatically extracts sections from the Markdown files.
- Converts sections into a structured object.
- Saves the result in a `.ts` file for easy integration with TypeScript projects.
- Works entirely with local files, no GitHub downloads required.
- **HTML Generation**: Generates HTML to visualize the Markdown content directly in the browser.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/readme-to-obj.git
   cd readme-to-obj
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### 1. Configure the local Obsidian path

Create a `.env` file in the project root with a line like this:

```env
READMES_OBSIDIAN_PATH="C:\path\to\your\obsidian\vault\Blog-Portfolio"
```

### 2. Run the Conversion Script

`src/index.ts` reads all `.md` files from the local folder specified in `.env`. To run the script:

```bash
npm run update-readmes
```

This will process the local files, extract the sections, and save the resulting object to `src/data/readmes.ts`.

### 3. Example Output

After running the script, the `readmes.ts` file will contain something like this:

```ts
export const readmes = {
  "portfolio": {
    title: "My Portfolio",
    sections: {
      "Introduction": "This is my portfolio...",
      "Technologies": "React, Node.js, etc.",
      // ...
    }
  },
  "todo-app": {
    title: "Todo App",
    sections: {
      "Features": "Task management...",
      "Setup": "To install...",
      // ...
    }
  }
}
```

The HTML output will be available in the `dist` folder.

### 3. Include the Data in Your Project

You can import the `readmes` object into your code:

```ts
import { readmes } from './data/readmes';

console.log(readmes['portfolio']);
```

## Configuration

The folder path is configured through a `.env` file in the project root. Create a `.env` file alongside `package.json` with this content:

```env
READMES_OBSIDIAN_PATH="C:\path\to\your\obsidian\vault\Blog-Portfolio"
```

Then run the script from the project root.

## Libraries Used

This project uses the following libraries:

- **[remark](https://github.com/remarkjs/remark)** - A Markdown processor for parsing and transforming Markdown.
- **[remark-parse](https://github.com/remarkjs/remark/tree/main/packages/remark-parse)** - A plugin for remark to parse Markdown into an abstract syntax tree (AST).
- **[typescript](https://www.typescriptlang.org/)** - A strict syntactical superset of JavaScript that adds optional static typing.
- **[@types/node](https://www.npmjs.com/package/@types/node)** - TypeScript type definitions for Node.js.

## Node.js and TypeScript Version Requirements

- Node.js version: **v16.0.0** or higher
- TypeScript version: **v5.8.2** or higher

## License

This project is licensed under the [MIT License](LICENSE).
