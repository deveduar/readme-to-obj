# README to Object Converter

This project converts `README.md` files from multiple repositories into JavaScript objects. The goal is to facilitate the extraction of sections and content from README files in a structured way.

## Description

The project downloads `README.md` files from specified repositories, processes them to extract key sections (such as headers, paragraphs, lists, and code), and converts them into a JavaScript object. This object contains the sections with their corresponding content and is saved into a `.ts` file for later use.

## Features

- Downloads `README.md` files from public GitHub repositories.
- Automatically extracts sections from the Markdown file.
- Converts sections into a structured object.
- Saves the result in a `.ts` file for easy integration with TypeScript projects.
- You can customize which repositories to download the README from.

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

### 1. Run the Conversion Script

The `updateReadmes.ts` script is responsible for downloading and converting the `README.md` files from the specified repositories. To run the script, use the following command:

```bash
npm run update-readmes
```

This will download the `README.md` files, extract the sections, and save the resulting object in `src/data/readmes.ts`.

### 2. Example Output

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

### 3. Include the Data in Your Project

You can import the `readmes` object into your code:

```ts
import { readmes } from './data/readmes';

console.log(readmes['portfolio']);
```

## Customization

You can modify the list of repositories in the `src/scripts/updateReadmes.ts` file by adding or removing repositories. The repository structure is as follows:

```ts
const repos = [
  { id: "repo_id", url: "https://raw.githubusercontent.com/user/repo/main/README.md" },
  // ...
];
```

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