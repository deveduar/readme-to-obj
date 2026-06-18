export const readmes = [
  {
    "id": 1,
    "repoId": "3D Audio Visualizer",
    "date": "2026-06-18T15:02:55.373Z",
    "title": "3D Audio Visualizer — Experimental Audio Engine",
    "description": "Interactive 3D audio visualizer with SvelteKit and Tone.js",
    "imageSrc": "https://i.postimg.cc/prQ56z5M/3d-visu-laptope.webp",
    "detailedDescription": "SvelteKit-based 3D audio visualizer with shader effects and metadata extraction.",
    "technologies": [
      "Svelte 5",
      "SvelteKit",
      "TypeScript",
      "Tone.js",
      "Threlte",
      "Three.js",
      "GLSL",
      "Tweakpane",
      "Tailwind CSS",
      "Vite",
      "jsmediatags"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/3d-audio-visualizer.git",
        "label": "GitHub Repository"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/prQ56z5M/3d-visu-laptope.webp",
      "https://i.postimg.cc/yxh3bc3H/3d-visu-laptope-2.webp",
      "https://i.postimg.cc/FzbkB3kv/3d-visu-phone.webp"
    ],
    "features": [
      "Real-time 3D audio visualization with custom GLSL shaders.",
      "Live Editor panel for instant parameter tweaking (no reload).",
      "Multiple visual modes — sphere, waveform, grid, and cover art.",
      "Multiple geometry types — Icosahedron, Sphere, Torus, Octahedron.",
      "MP3 metadata extraction — album artwork, artist names, track titles.",
      "Playlist management with drag-and-drop reordering and file uploads.",
      "Professional audio metering — dB and LUFS measurements.",
      "Playback modes — AUTO (autoplay next) and LOOP (repeat current).",
      "Camera controls with zoom sync between mouse wheel and UI slider.",
      "Preset system — save and load configurations as JSON.",
      "Responsive design — works on desktop, tablet, and mobile.",
      "Dark/Light theme support for UI and visualizer separately."
    ],
    "status": "🌟",
    "readmeContent": {
      "title": "3D Audio Visualizer — Experimental Audio Engine",
      "fileName": "3D Audio Visualizer.md",
      "date": "2026-06-18T15:02:55.373Z",
      "sections": {
        "🎯 Overview": {
          "✨ Key Features": [
            "- 🎧 Real-time audio engine (Tone.js)",
            "- 🌌 3D shader-based visualizations (GLSL + Threlte)",
            "- 🎛️ Live parameter editor (Tweakpane)",
            "- 📊 Audio analysis (dB / LUFS metering)",
            "- 🎵 Playlist system with drag & drop",
            "- 🖼️ Album art + metadata extraction",
            "- 🎥 Multiple visualization modes (Sphere, Waveform, Grid, Cover Art)",
            "- 🎮 Fully interactive camera controls"
          ]
        },
        "🧰 Tech Stack": [
          "- SvelteKit + Svelte 5 (Runes)",
          "- Tone.js (Web Audio API)",
          "- Threlte / Three.js (3D rendering)",
          "- GLSL shaders",
          "- Tweakpane (live controls)",
          "- TypeScript",
          "- Tailwind CSS"
        ],
        "🎨 Visual Modes": [
          "- **Sphere Mode** — Audio-reactive 3D geometry",
          "- **Waveform Mode** — Classic signal visualization",
          "- **Grid Mode** — Abstract reactive grid",
          "- **Cover Art Mode** — 3D album display"
        ],
        "🧠 Key Challenges": {
          "Audio synchronization": [
            "Solved race conditions when switching tracks by introducing controlled playback states and separation between UI and audio engine timing."
          ],
          "Shader performance": [
            "Optimized real-time GLSL rendering by throttling audio analysis, caching geometry, and limiting unnecessary re-renders."
          ],
          "Metadata extraction": [
            "Handled inconsistent browser support for MP3 metadata using robust fallbacks and timeout-based loading for album art."
          ],
          "Camera + UI sync": [
            "Fixed desynchronization between OrbitControls and UI sliders using direct reactive updates and controlled projection matrix refresh."
          ]
        },
        "📈 What I Learned": [
          "- Web Audio API requires precise state control",
          "- Shader programming is highly performance-sensitive",
          "- Real-time systems need strict separation between UI and engine logic",
          "- Svelte 5 reactivity simplifies complex interactive systems",
          "- 3D interfaces require careful UX design for mobile"
        ],
        "🚀 Future Improvements": [
          "- Audio-reactive camera movement",
          "- Video export (WebM / MP4)",
          "- Spotify / SoundCloud integration",
          "- Advanced LFO modulation system",
          "- PBR material system driven by audio frequencies"
        ],
        "💡 Summary": [
          "A personal exploration into **audio-driven generative systems**, combining Web Audio, real-time graphics, and interactive UI design into a single experimental platform."
        ]
      }
    }
  },
  {
    "id": 2,
    "repoId": "Inventory Management System for Dropshipping Store",
    "date": "2026-06-18T15:02:29.323Z",
    "title": "Inventory Management System — Dropshipping Dashboard",
    "description": "A production-ready inventory management system built with Angular 21, PrimeNG, and Hexagonal Architecture. This is not just another CRUD — it's my deep dive into dropshipping integration, API caching, CSV handling, and real-world Angular challenges.",
    "imageSrc": "https://i.postimg.cc/660BTKqC/luca-bravo-XJXWbf-So2f0-unsplash-(1).jpg",
    "detailedDescription": "Full-featured inventory management dashboard developed with Angular 21, PrimeNG and SASS, integrated with Printful API and custom Express backend. Includes products and categories management, CSV export/import, dark/light mode, responsive design and advanced filtering. Architecture follows hexagonal patterns with clear separation of concerns, HTTP interceptors, and reactive programming with RxJS.",
    "technologies": [
      "Angular 21",
      "TypeScript",
      "PrimeNG",
      "SASS/SCSS",
      "RxJS",
      "Express.js"
    ],
    "gallery": [
      "https://i.postimg.cc/B6bS0RTf/localhost-4200-(5).png",
      "https://i.postimg.cc/L6xMHx8Q/localhost-4200-(3).png",
      "https://i.postimg.cc/BbvMNBf7/localhost-4200-(4).png"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/angular-SGI-front",
        "label": "GitHub"
      },
      {
        "href": "https://github.com/deveduar/inventory-backend",
        "label": "Backend API"
      }
    ],
    "features": [
      "Complete product and category management with Printful API integration.",
      "CSV import/export functionality for bulk operations.",
      "Dark/Light mode theming with PrimeNG SASS variables.",
      "Responsive design with DataView and Table components.",
      "HTTP interceptors for error handling and request caching.",
      "Related products carousel with filtered recommendations.",
      "Real-time product editing with inline forms.",
      "Hexagonal architecture with DTO adapters."
    ],
    "status": "📌",
    "readmeContent": {
      "title": "Inventory Management System — Dropshipping Dashboard",
      "fileName": "Inventory Management System for Dropshipping Store.md",
      "date": "2026-06-18T15:02:29.323Z",
      "sections": {
        "Overview": [
          "This project simulates a real-world ecommerce inventory system designed for managing print-on-demand products through the Printful API.",
          "The goal was to build a scalable admin dashboard capable of handling product catalogs, variants, and data export/import workflows in a production-like environment."
        ],
        "Key Features": {
          "📦 Product Management": [
            "- Product listing with filtering and search.",
            "- Inline editing directly in the table view.",
            "- Variant handling for colors, sizes, and configurations.",
            "- Category-based organization."
          ],
          "🔄 Data Operations": [
            "- CSV import/export for bulk product management.",
            "- Structured data transformation for external systems.",
            "- Support for large-scale product catalogs."
          ],
          "⚙️ API Integration": [
            "- Printful API integration for product synchronization.",
            "- Backend proxy layer to handle API communication.",
            "- Resilient handling of external API constraints."
          ],
          "🎨 Admin Interface": [
            "- Responsive dashboard built with PrimeNG.",
            "- Dark/light mode support.",
            "- Table and card-based product views.",
            "- Clean UX for product editing workflows."
          ]
        },
        "Highlights": [
          "One of the main challenges of this project was designing a system capable of handling real-world ecommerce constraints such as API limitations, large datasets, and complex product variants.",
          "The architecture emphasizes modularity and separation of concerns, using a backend proxy layer and a structured frontend state management approach."
        ],
        "Outcome": [
          "This project strengthened my experience with Angular architecture, API integration patterns, and building complex admin dashboards that simulate real production ecommerce systems."
        ]
      }
    }
  },
  {
    "id": 3,
    "repoId": "Jekyll Blog  Obsidian — Building a Personal Knowledge Management System",
    "date": "2026-06-18T15:01:58.514Z",
    "title": "Obsidian → Jekyll Knowledge System",
    "description": "Jekyll blog with Obsidian integration and visual backlink graphs",
    "imageSrc": "https://i.postimg.cc/Rh1JDKJC/blog-laptop-1.webp",
    "detailedDescription": "Obsidian-Jekyll publishing system with backlink graphs, wiki navigation, and AI content assistant.",
    "technologies": [
      "Jekyll",
      "Ruby",
      "Liquid",
      "TypeScript",
      "Obsidian API",
      "JavaScript",
      "vis.js",
      "Fuse.js",
      "Turbo",
      "SASS",
      "Python",
      "Flask",
      "GitHub Pages",
      "GitHub Actions"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/deveduar.github.io",
        "label": "GitHub Repository"
      },
      {
        "href": "https://deveduar.github.io",
        "label": "Live Blog"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/Rh1JDKJC/blog-laptop-1.webp",
      "https://i.postimg.cc/vT7xNfxY/blog-laptop-2.webp",
      "https://i.postimg.cc/FzbkB3k9/blog-liphone.webp"
    ],
    "features": [
      "Custom Obsidian plugin for one-click note syncing and transformation.",
      "WikiLink conversion to standard markdown with proper relative paths.",
      "Visual backlink graph with vis.js — interactive node navigation.",
      "Turbo-powered fast page transitions without framework overhead.",
      "Real-time search and filtering with Fuse.js.",
      "Wiki-style navigation with page previews and context menus.",
      "Automatic slug generation for clean URLs (/category/post-title/).",
      "Frontmatter normalization — dates, categories, tags.",
      "Configurable content cleanup (Dataview, Templater, Zotero links).",
      "Python AI assistant with web interface for draft management.",
      "Processed vs pending note tracking with status persistence.",
      "Responsive design with Obsidian-inspired aesthetic.",
      "GitHub Pages hosting with automated CI/CD.",
      "Table of Contents with active heading tracking.",
      "Category and tag filtering with URL state persistence."
    ],
    "status": "🌟",
    "readmeContent": {
      "title": "Obsidian → Jekyll Knowledge System",
      "fileName": "Jekyll Blog  Obsidian — Building a Personal Knowledge Management System.md",
      "date": "2026-06-18T15:01:58.514Z",
      "sections": {
        "Overview": [
          "This project builds a complete bridge between a personal note-taking system and a public blog.",
          "Instead of manually maintaining a website, I use Obsidian as the source of truth. Notes marked as public are automatically transformed, processed, and published to a Jekyll-based blog with enhanced navigation and visualization features.",
          "The result is a self-updating digital garden that reflects my thinking process as it evolves."
        ],
        "Key Features": {
          "🧠 Knowledge System": [
            "- Obsidian as a personal CMS.",
            "- Selective publishing via frontmatter flags.",
            "- Automatic markdown transformation for web publishing."
          ],
          "🔗 Wiki-Style Navigation": [
            "- Internal linking between notes.",
            "- Backlink-aware browsing experience.",
            "- Contextual navigation between related ideas."
          ],
          "📊 Knowledge Graph": [
            "- Interactive graph visualization of note connections.",
            "- Visual exploration of relationships between ideas.",
            "- Node-based navigation system."
          ],
          "⚙️ Automation Pipeline": [
            "- Custom plugin to process and sync notes.",
            "- Markdown cleanup and transformation rules.",
            "- Automated generation of structured blog content."
          ],
          "🌐 Fast Static Blog": [
            "- Jekyll static site generation.",
            "- Client-side enhancements for search and navigation.",
            "- Optimized performance with minimal framework overhead."
          ]
        },
        "Highlights": [
          "The core idea behind this project is treating a blog not as a publishing platform, but as a live representation of a personal knowledge system.",
          "Instead of writing for publication, I write notes. Publication happens automatically as a side effect of my workflow."
        ],
        "Outcome": [
          "This project strengthened my experience with content pipelines, static site architecture, plugin development, and knowledge management systems.",
          "It also demonstrates how automation can turn personal workflows into scalable publishing systems without introducing complexity into the writing process."
        ]
      }
    }
  },
  {
    "id": 4,
    "repoId": "Merakikrea Ceramica – Landing Page",
    "date": "2026-06-18T15:02:34.905Z",
    "title": "Merakikrea Cerámica – Landing Page",
    "description": "Landing page for artisan ceramics business with Google Maps and Instagram feed",
    "imageSrc": "https://i.postimg.cc/y8jKgnTZ/pc-meraki-mockup.webp",
    "detailedDescription": "Next.js landing page showcasing business info, location, reviews, and WhatsApp integration for ceramics store.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "ShadCN UI",
      "Framer Motion"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/merakikrea-landing",
        "label": "GitHub"
      },
      {
        "href": "https://meraki-krea-ceramica-six.vercel.app",
        "label": "Live Demo"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/5032x1kZ/pc-meraki-mockup.webp",
      "https://i.postimg.cc/jqJdfFtB/iphone-meraki-mockup.webp",
      "https://i.postimg.cc/8z1HFJbt/laptop-meraki-mockup.webp",
      "https://i.postimg.cc/NjpxRsJY/tablet-meraki-mockup.webp"
    ],
    "features": [
      "Responsive and accessible design.",
      "Light/Dark mode with Tailwind CSS.",
      "Integration with Google Maps and WhatsApp.",
      "SEO optimized for better visibility.",
      "Google reviews and social media section.",
      "Floating WhatsApp button for quick contact."
    ],
    "status": "📌",
    "readmeContent": {
      "title": "Merakikrea Cerámica – Landing Page",
      "fileName": "Merakikrea Ceramica – Landing Page.md",
      "date": "2026-06-18T15:02:34.905Z",
      "sections": {
        "Overview": [
          "This project was built to provide a simple but effective digital presence for a local ceramics workshop.",
          "The goal was to centralize essential business information — location, reviews, visual content, and contact methods — into a single, fast, and accessible website."
        ],
        "Key Features": {
          "🏺 Business Showcase": [
            "- Product and workshop presentation.",
            "- Structured information about the brand and its story.",
            "- Clean, visual-first layout."
          ],
          "📍 Location & Contact": [
            "- Google Maps integration for physical store location.",
            "- Direct contact via WhatsApp and email.",
            "- Easy access to social media channels."
          ],
          "📸 Content Integration": [
            "- Dynamic Instagram feed for updated visuals.",
            "- Customer reviews display for trust building.",
            "- Real-time content updates from external platforms."
          ],
          "🎨 UI & Experience": [
            "- Fully responsive design across devices.",
            "- Dark and light mode support.",
            "- Smooth animations with Framer Motion.",
            "- SEO-optimized structure for discoverability."
          ]
        },
        "Highlights": [
          "The main focus of this project was creating a fast, trustworthy and visually appealing landing page that connects a physical business with its digital presence.",
          "Special attention was given to usability, performance, and mobile experience, ensuring that customers can quickly find key information and contact the business."
        ],
        "Outcome": [
          "This project strengthened my experience building real-world landing pages for local businesses, working with external APIs, and designing user interfaces focused on clarity, trust, and conversion."
        ]
      }
    }
  },
  {
    "id": 5,
    "repoId": "Obsidian Portfolio Pipeline",
    "date": "2026-06-18T15:02:37.850Z",
    "title": "Obsidian Portfolio Pipeline",
    "description": "Self-updating portfolio syncing Obsidian notes with Next.js",
    "imageSrc": "https://i.postimg.cc/hv8Q5Tzk/portfolio-laptop.webp",
    "detailedDescription": "Automated system converting Obsidian markdown to Next.js portfolio with GitHub stats integration.",
    "technologies": [
      "Next.js 14",
      "TypeScript",
      "Obsidian",
      "Node.js",
      "Remark",
      "Tailwind CSS",
      "PowerShell",
      "GitHub API",
      "Vercel"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/readme-to-obj",
        "label": "GitHub - Converter"
      },
      {
        "href": "https://github.com/deveduar/nextjs-portfolio",
        "label": "GitHub - Portfolio"
      },
      {
        "href": "https://deveduar-portfolio.vercel.app",
        "label": "Live Demo"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/hv8Q5Tzk/portfolio-laptop.webp",
      "https://i.postimg.cc/8cdf0MJ3/portfolio-phone.webp",
      "https://i.postimg.cc/6qV4mn2D/portfolio-tablet.webp"
    ],
    "features": [
      "Automated markdown to data conversion.",
      "Obsidian vault integration with PowerShell automation.",
      "Static site generation with Next.js 14.",
      "GitHub API for real-time project stats.",
      "Bento-grid layout with snap scrolling.",
      "Theme system with Dracula & Catppuccin palettes.",
      "14+ accent color options for theme customization.",
      "Dark mode and responsive design.",
      "Vercel automatic deployment."
    ],
    "status": "🌟",
    "readmeContent": {
      "title": "Obsidian Portfolio Pipeline",
      "fileName": "Obsidian Portfolio Pipeline.md",
      "date": "2026-06-18T15:02:37.850Z",
      "sections": {
        "Overview": [
          "This project was created to solve a recurring problem: maintaining project documentation in multiple places.",
          "Instead of manually updating a portfolio every time a project changed, I built a workflow where Obsidian acts as the single source of truth. Project notes are automatically converted into structured data and consumed by a Next.js portfolio, creating a seamless publishing pipeline.",
          "The result is a portfolio that grows naturally as new projects are documented."
        ],
        "Key Features": {
          "📝 Obsidian as a CMS": [
            "- Markdown-based project documentation.",
            "- Single source of truth for all project content.",
            "- Flexible note structure without manual formatting requirements."
          ],
          "⚙️ Automated Content Pipeline": [
            "- Parses markdown files into structured project data.",
            "- Converts notes into portfolio-ready content.",
            "- Automatically includes new projects without manual updates."
          ],
          "🌐 Portfolio Generation": [
            "- Static page generation with Next.js.",
            "- Responsive project showcase.",
            "- SEO-friendly content rendering.",
            "- Fast loading through build-time generation."
          ],
          "🔗 GitHub Integration": [
            "- Repository metadata integration.",
            "- Direct links to source code and project resources.",
            "- Automatic synchronization between documentation and development workflow."
          ]
        },
        "Highlights": [
          "The most interesting aspect of this project is the content pipeline itself. Instead of treating the portfolio as a collection of manually managed pages, it behaves more like a lightweight static CMS powered entirely by markdown files.",
          "This approach allows documentation, development, and portfolio maintenance to become part of the same workflow, reducing friction and ensuring project information stays up to date."
        ],
        "Outcome": [
          "This project improved my understanding of content automation, static site generation, markdown processing, and developer tooling.",
          "More importantly, it demonstrated how small automation systems can eliminate repetitive work and create workflows that scale naturally over time."
        ]
      }
    }
  },
  {
    "id": 6,
    "repoId": "Ping Test Tool - Real-Time Network Monitor",
    "date": "2026-06-18T15:02:09.950Z",
    "title": "Ping Test Tool - Real-Time Network Monitor",
    "description": "Web-based utility for real-time network connection quality monitoring",
    "imageSrc": "https://i.postimg.cc/661JsKNF/Captura.png",
    "detailedDescription": "Next.js app measuring latency, jitter, and packet loss with Web Workers and Zustand state management.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Web Workers"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/network-metrics-tool.git",
        "label": "GitHub"
      },
      {
        "href": "https://ping-test-tool.vercel.app/",
        "label": "Live Demo"
      }
    ],
    "features": [
      "Real-time monitoring of latency, jitter, and packet loss.",
      "Retro gaming-inspired UI.",
      "Responsive design with color indicators and charts.",
      "State management using Zustand.",
      "Runs tests using Web Workers for non-blocking performance.",
      "Switch between different metric views.",
      "Privacy-friendly: no personal data collected."
    ],
    "status": "📌",
    "readmeContent": {
      "title": "Ping Test Tool - Real-Time Network Monitor",
      "fileName": "Ping Test Tool - Real-Time Network Monitor.md",
      "date": "2026-06-18T15:02:09.950Z",
      "sections": {
        "Overview": [
          "Ping Test Tool is designed to provide a quick and visual way to understand network quality in real time.",
          "Instead of relying on complex diagnostic tools, it focuses on simplicity: start a test and immediately see how your connection behaves under real-world conditions."
        ],
        "Key Features": {
          "📊 Real-Time Metrics": [
            "- Live latency monitoring.",
            "- Jitter calculation based on response variation.",
            "- Packet loss estimation through failed requests.",
            "- Continuous updates with smooth visual feedback."
          ],
          "⚙️ Performance-Focused Architecture": [
            "- Web Workers for background processing.",
            "- Non-blocking UI during network tests.",
            "- Efficient state management with Zustand."
          ],
          "🎨 UI & Experience": [
            "- Retro-inspired interface design.",
            "- Color-coded indicators for quick interpretation.",
            "- Responsive layout for all devices.",
            "- Minimal and focused dashboard experience."
          ]
        },
        "Highlights": [
          "One of the key challenges in this project was ensuring real-time updates without blocking the UI.",
          "This was solved using Web Workers to handle network measurements in the background, allowing the interface to remain smooth even during continuous monitoring.",
          "The result is a simple but effective tool for visualizing network quality at a glance."
        ],
        "Outcome": [
          "This project strengthened my experience with real-time data visualization, browser performance optimization, and UI state management.",
          "It also reinforced the importance of keeping tools simple, focused, and immediately useful."
        ]
      }
    }
  },
  {
    "id": 7,
    "repoId": "Todo App — Task Management System",
    "date": "2026-06-18T13:24:31.921Z",
    "title": "Todo App — Complete Task Management System",
    "description": "Full-featured task manager with Kanban, table views, and subtasks",
    "imageSrc": "https://i.postimg.cc/Y0NLsYLw/todo-laptop-1.webp",
    "detailedDescription": "Production-ready task management system with Kanban board, spreadsheet view, subtask hierarchy, bulk operations, and recycle bin.",
    "technologies": [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Zustand",
      "DnD Kit",
      "date-fns",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "Playwright"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/todo-app",
        "label": "GitHub Repository"
      },
      {
        "href": "https://github.com/deveduar/todo-app-backend",
        "label": "Backend API"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/T1j54gLF/todo-iphonewebp.webp",
      "https://i.postimg.cc/Y0NLsYLw/todo-laptop-1.webp"
    ],
    "features": [
      "Kanban board with drag-and-drop between customizable status columns.",
      "Spreadsheet-style table view with sortable, resizable columns.",
      "Complete subtask hierarchy — tasks can contain unlimited subtasks.",
      "Project organization — group tasks by projects with dedicated views.",
      "Bulk operations — select multiple tasks and change status, priority, or delete in batch.",
      "Recycle bin with restore and permanent delete functionality.",
      "Smart date picker with due dates and reminders, adapting between tooltips and drawers.",
      "Rich markdown input — create multiple tasks and subtasks with simple syntax.",
      "Real-time search across tasks and subtasks with automatic expansion.",
      "Responsive design — works seamlessly on mobile, tablet, and desktop.",
      "Dark mode support with custom theming.",
      "Comprehensive testing with Playwright E2E tests."
    ],
    "status": "🌟",
    "readmeContent": {
      "title": "Todo App — Complete Task Management System",
      "fileName": "Todo App — Task Management System.md",
      "date": "2026-06-18T13:24:31.921Z",
      "sections": {
        "Overview": [
          "This project started as an exploration of modern task management workflows and evolved into a complete productivity application.",
          "The goal was to combine the flexibility of a Kanban board with the efficiency of a spreadsheet-style interface, allowing users to organize projects, manage subtasks, and perform large-scale task operations from a single application."
        ],
        "Key Features": [
          "- 📋 Kanban board with drag-and-drop task management.",
          "- 📊 Table view with sorting, filtering, and column resizing.",
          "- 🌳 Nested subtasks with hierarchical organization.",
          "- 📁 Project-based task grouping.",
          "- ⚡ Bulk actions for updating or deleting multiple tasks.",
          "- 🗑️ Recycle bin with restore and permanent delete options.",
          "- 📅 Due dates and reminders with smart date selection.",
          "- 🔍 Real-time search across tasks and subtasks.",
          "- 📱 Responsive design for desktop, tablet, and mobile.",
          "- 🌙 Dark mode support.",
          "- ✅ End-to-end testing with Playwright."
        ],
        "Highlights": [
          "One of the most interesting aspects of this project was building a system capable of managing complex task hierarchies while keeping the interface fast and intuitive.",
          "The application supports multiple workflows, from visual Kanban management to spreadsheet-style organization, making it suitable for both casual users and power users who need advanced filtering, bulk actions, and project management capabilities."
        ],
        "Outcome": [
          "This project helped me deepen my understanding of state management, complex UI interactions, drag-and-drop systems, responsive design, and full-stack application architecture.",
          "It also became a practical exercise in building software that balances functionality, performance, and user experience."
        ]
      }
    }
  },
  {
    "id": 8,
    "repoId": "tui voice asistente de voz offline",
    "date": "2026-06-18T13:07:35.778Z",
    "title": "tui-voice — Asistente de Voz Offline",
    "description": "Asistente por voz en español 100% offline con Vosk y Textual",
    "imageSrc": "https://i.postimg.cc/660BTKqC/luca-bravo-XJXWbf-So2f0-unsplash-(1).jpg",
    "detailedDescription": "Asistente de voz local para Windows con reconocimiento offline mediante Vosk, interfaz TUI moderna construida con Textual y sistema de comandos totalmente configurable mediante JSON.",
    "technologies": [
      "Python",
      "Vosk",
      "Textual",
      "PyAudio",
      "JSON",
      "ctypes",
      "Windows API",
      "GlazeWM"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/tui-voice-assistant-offline",
        "label": "GitHub Repository"
      }
    ],
    "features": [
      "Reconocimiento de voz completamente offline en español utilizando Vosk.",
      "Interfaz TUI moderna desarrollada con Textual.",
      "Configuración automática de micrófonos y modelos de voz.",
      "Sistema de comandos extensible mediante archivos JSON.",
      "Modo dictado con inyección directa de texto en la ventana activa.",
      "Soporte para múltiples nombres de activación (wake words).",
      "Gestión visual de comandos habilitados y deshabilitados.",
      "Paleta de comandos para acciones rápidas y configuración.",
      "Registro automático de comandos no reconocidos para mejorar patrones.",
      "Cambio dinámico de temas visuales sin reiniciar la aplicación.",
      "Integración opcional con GlazeWM para automatización de ventanas.",
      "Arquitectura asíncrona con carga de modelos sin bloquear la interfaz."
    ],
    "status": "🚀",
    "readmeContent": {
      "title": "tui-voice — Asistente de Voz Offline",
      "fileName": "tui voice asistente de voz offline.md",
      "date": "2026-06-18T13:07:35.778Z",
      "sections": {
        "El objetivo": [
          "La mayoría de asistentes de voz modernos dependen de servicios en la nube para procesar comandos. Quería explorar una alternativa centrada en la privacidad, capaz de funcionar localmente y con una experiencia de usuario agradable desde la terminal.",
          "El resultado fue **tui-voice**, un asistente de voz offline para Windows que escucha continuamente comandos hablados, ejecuta acciones configurables y ofrece un modo de dictado integrado para escribir texto en cualquier aplicación."
        ],
        "Tecnologías utilizadas": [
          "El proyecto está construido principalmente en Python y combina varias tecnologías especializadas:",
          "- **Vosk** para reconocimiento de voz offline.",
          "- **PyAudio** para captura de audio en tiempo real.",
          "- **Textual** para crear una interfaz TUI moderna y reactiva.",
          "- **ctypes** y la API de Windows para el sistema de dictado.",
          "- **JSON** para la configuración dinámica de comandos y preferencias.",
          "- **GlazeWM** como integración opcional para automatización de ventanas."
        ],
        "Características principales": {
          "🎤 Reconocimiento de voz local": [
            "Todo el procesamiento de voz se realiza localmente mediante modelos Vosk en español. Esto permite utilizar el asistente sin conexión a internet y mantiene la privacidad de las conversaciones."
          ],
          "⌨️ Modo dictado": [
            "Además de ejecutar comandos, Flex puede funcionar como sistema de dictado. El texto reconocido se envía directamente a la ventana activa utilizando mensajes nativos de Windows, evitando dependencias externas o el uso del portapapeles."
          ],
          "⚙️ Comandos configurables": [
            "Los comandos están definidos en archivos JSON editables por el usuario. Es posible:",
            "- Abrir programas.",
            "- Ejecutar comandos shell.",
            "- Lanzar URLs.",
            "- Enviar combinaciones de teclas.",
            "- Controlar ventanas mediante GlazeWM.",
            "- Crear acciones personalizadas sin modificar el código fuente."
          ],
          "🎨 Interfaz TUI moderna": [
            "La aplicación incorpora:",
            "- Historial de conversaciones.",
            "- Texto parcial en tiempo real.",
            "- Barra de estado.",
            "- Configuración visual de comandos.",
            "- Paleta de acciones rápidas.",
            "- Cambio dinámico de temas."
          ]
        },
        "Retos técnicos": [
          "Uno de los principales desafíos fue mantener la interfaz completamente responsiva mientras se cargaban modelos de reconocimiento de voz potencialmente pesados.",
          "Para resolverlo, la carga de modelos y el procesamiento de audio se ejecutan en hilos independientes, permitiendo que la aplicación continúe respondiendo a la interacción del usuario.",
          "Otro aspecto interesante fue el desarrollo del sistema de dictado, implementado únicamente con herramientas nativas de Windows mediante `SendMessageW(WM_CHAR)` para lograr una escritura fluida sin depender de soluciones externas."
        ],
        "Lo que aprendí": [
          "Este proyecto me permitió profundizar en:",
          "- Procesamiento de audio en tiempo real.",
          "- Arquitecturas asíncronas en Python.",
          "- Desarrollo de interfaces terminales modernas.",
          "- Integración con APIs nativas de Windows.",
          "- Diseño de sistemas configurables orientados al usuario.",
          "Además, fue una excelente oportunidad para explorar cómo construir experiencias de usuario completas sin depender de servicios cloud."
        ],
        "Resultado": [
          "tui-voice demuestra que es posible crear un asistente de voz moderno, privado y extensible utilizando únicamente herramientas open source y procesamiento local. El proyecto sigue evolucionando como laboratorio personal para experimentar con interfaces conversacionales y automatización de escritorio."
        ]
      }
    }
  },
  {
    "id": 9,
    "repoId": "Utility Tools Collection – Data Migration & Media Conversion",
    "date": "2026-06-18T15:02:17.459Z",
    "title": "Utility Tools Collection – Data Migration & Media Conversion",
    "description": "Python CLI tools for Omnivore migration, PDF to CBR, and YouTube MP3 download",
    "imageSrc": "https://i.postimg.cc/660BTKqC/luca-bravo-XJXWbf-So2f0-unsplash-(1).jpg",
    "detailedDescription": "Collection of Python tools: Omnivore→Raindrop converter, PDF to CBR, and YouTube MP3 downloader with batch processing.",
    "technologies": [
      "Python 3",
      "yt-dlp",
      "ffmpeg",
      "pdf2image",
      "Poppler",
      "JSON",
      "CSV",
      "Command Line Interface"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/omnivore-to-raindrop.git",
        "label": "Omnivore to Raindrop Converter"
      },
      {
        "href": "https://github.com/deveduar/pdf-to-cbr.git",
        "label": "PDF to CBR Converter"
      },
      {
        "href": "https://github.com/deveduar/py-mp3-you.git",
        "label": "YouTube MP3 Downloader"
      }
    ],
    "features": [
      "Omnivore to Raindrop.io migration: Convert JSON exports to CSV with preserved metadata (URLs, titles, tags, notes, dates)",
      "PDF to CBR: Convert PDFs to comic book format with customizable DPI and JPEG quality settings",
      "YouTube MP3 Downloader: Download high-quality 320kbps MP3 audio from multiple video URLs",
      "Batch processing support across all three tools",
      "Cross-platform compatibility (Windows, macOS, Linux)",
      "Clear error handling and user feedback",
      "UTF-8 encoding support for special characters and non-English text"
    ],
    "status": "📌",
    "readmeContent": {
      "title": "Utility Tools Collection – Data Migration & Media Conversion",
      "fileName": "Utility Tools Collection – Data Migration & Media Conversion.md",
      "date": "2026-06-18T15:02:17.459Z",
      "sections": {
        "Overview": [
          "This collection brings together several standalone tools developed in response to specific real-world needs. Rather than building large applications, the focus was on creating lightweight, reliable utilities that perform a single task well.",
          "The projects cover data migration, document conversion, and media processing, sharing a common philosophy: simple interfaces, clear documentation, and automation-friendly workflows."
        ],
        "Included Tools": {
          "🔄 Omnivore → Raindrop.io Converter": [
            "A migration utility created after Omnivore announced its shutdown. The tool converts exported bookmark data into a format compatible with Raindrop.io while preserving important metadata such as titles, tags, notes, and creation dates."
          ],
          "📚 PDF to CBR Converter": [
            "A utility that transforms PDF files into CBR archives for comic and manga readers. The conversion process extracts pages as images and packages them into a reader-friendly format suitable for e-readers and comic applications."
          ],
          "🎵 Audio Download Utility": [
            "A command-line tool that automates audio extraction and conversion workflows, producing organized, high-quality output files while reducing manual processing steps."
          ]
        },
        "Highlights": [
          "- Built around real user needs and practical workflows.",
          "- Designed for automation and batch processing.",
          "- Cross-platform compatibility.",
          "- Clear command-line interfaces with minimal setup.",
          "- Strong focus on reliability and ease of use."
        ],
        "Outcome": [
          "These projects helped strengthen my experience with file processing, data transformation, external tooling integration, and CLI application design while emphasizing the importance of building software that solves real problems efficiently."
        ]
      }
    }
  },
  {
    "id": 10,
    "repoId": "Vue Dates — Building a Complete Salon Booking System",
    "date": "2026-06-18T15:02:21.595Z",
    "title": "Vue Dates — Complete Booking System",
    "description": "Vue 3 appointment booking system with real-time availability and conflict detection",
    "imageSrc": "https://i.postimg.cc/PJbvRYvr/booking-laptop-1.webp",
    "detailedDescription": "Production-ready salon booking system with Vue 3, Vuetify, and intelligent scheduling engine.",
    "technologies": [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vuetify 3",
      "Vue Router 4",
      "Vite",
      "Vitest",
      "Cypress",
      "ESLint",
      "Prettier"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/vue-dates",
        "label": "GitHub Repository"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/PJbvRYvr/booking-laptop-1.webp",
      "https://i.postimg.cc/Bb5PVHPt/booking-laptop-2.webp",
      "https://i.postimg.cc/8cdf0Mfc/booking-phone.webp"
    ],
    "features": [
      "Interactive booking system with real-time availability and conflict detection.",
      "Dual scheduling modes — Standard daily windows and Fixed precise slots.",
      "Provider management with service assignment and schedule overrides.",
      "Admin dashboard for complete service, provider, and appointment control.",
      "Specialist dashboard for managing pending requests and upcoming appointments.",
      "User dashboard with appointment history, active bookings, and rebooking.",
      "Real-time appointment timer system with HH:MM:SS format and progress bar.",
      "Automatic status transitions — Pending → Upcoming → InProgress → Completed.",
      "Comprehensive collision detection preventing double bookings.",
      "Provider override schedules — custom hours per specialist per service.",
      "Persistent localStorage for zero-backend evaluation.",
      "Dark/Light theme support with Vuetify theming.",
      "Responsive design for mobile, tablet, and desktop.",
      "Rich sample data for immediate testing and evaluation.",
      "Service visibility controls — public or hidden.",
      "Appointment cancellation and rejection with slot restoration."
    ],
    "status": "🌟",
    "readmeContent": {
      "title": "Vue Dates — Complete Booking System",
      "fileName": "Vue Dates — Building a Complete Salon Booking System.md",
      "date": "2026-06-18T15:02:21.595Z",
      "sections": {
        "Overview": [
          "Vue Dates is a booking system built for businesses that depend on appointments, such as salons, barbershops, clinics, and consultants.",
          "The application combines a customer-facing booking experience with powerful administration tools, allowing businesses to manage services, providers, schedules, and appointments from a single platform."
        ],
        "Key Features": {
          "📅 Smart Booking Experience": [
            "- Real-time availability checking.",
            "- Interactive calendar and time slot selection.",
            "- Automatic conflict prevention.",
            "- Service-specific durations and scheduling rules."
          ],
          "👥 Provider Management": [
            "- Specialist profiles and assignments.",
            "- Custom schedules and availability overrides.",
            "- Service-specific provider allocation."
          ],
          "⚙️ Business Administration": [
            "- Service management with pricing and duration settings.",
            "- Flexible scheduling configuration.",
            "- Support for recurring availability and fixed appointment slots.",
            "- Complete appointment lifecycle management."
          ],
          "📊 Dashboards": [
            "- User dashboard for upcoming and past appointments.",
            "- Specialist dashboard for managing requests and bookings.",
            "- Live appointment tracking and status updates."
          ]
        },
        "Highlights": [
          "One of the most interesting aspects of this project was building an availability engine capable of coordinating services, providers, schedules, and existing appointments while preventing booking conflicts.",
          "The system was designed to be flexible enough for different business models while maintaining a simple and intuitive booking experience for end users."
        ],
        "Outcome": [
          "This project strengthened my experience with complex state management, scheduling systems, business workflows, and user-focused application design.",
          "It also provided valuable insight into the challenges of building software that handles real-world appointment management and availability planning."
        ]
      }
    }
  }
];
