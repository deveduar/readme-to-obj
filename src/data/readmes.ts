export const readmes = [
  {
    "id": 1,
    "repoId": "Inventory Management System for Dropshipping Store",
    "title": "Inventory Management System for Dropshipping Store",
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
    "readmeContent": {
      "title": "Inventory Management System for Dropshipping Store",
      "fileName": "Inventory Management System for Dropshipping Store.md",
      "sections": {
        "🎯 Why I built this": [
          "I wanted to understand how dropshipping platforms work under the hood. Instead of using Shopify or a pre-built solution, I decided to build my own dashboard that connects to **Printful API** — handling products, variants, categories, and exports.",
          "This project is part of my journey to master:",
          "Angular standalone components",
          "Hexagonal architecture (ports & adapters)",
          "Real-world API integration (rate limits, CORS, caching)",
          "CSV import/export at scale"
        ],
        "🚧 The challenges I faced": [
          "**1. Printful API rate limits (429 errors)**",
          "I implemented a **caching layer** that stores products locally, reducing API calls by ~80%. No localStorage — just in-memory cache with TTL.",
          "**2. Variant hell — colors + sizes**\nProducts with multiple variants showed too many sizes. I had to separate variants by color first, then size. Built a custom selector similar to ecommerce stores.",
          "**3. CSV import/export with type safety**\nUsed `PapaParse` + `xlsx` but ran into type definition issues. Solved by creating custom TypeScript declarations and using `any` with object cloning for the rating column.",
          "**4. CORS & proxy configuration**\nAngular + Express + Printful = CORS nightmare. Fixed with proxy config in Express and `tap` operators in RxJS.",
          "**5. Node version hell**\nUnsupported engine errors with PrimeNG icons. Solved using `nvm` to pin Node 20.11.1.",
          "**6. Angular standalone animations**\nAsync animations don't work well with standalone components. Had to provide them synchronously in `appConfig`.",
          "**7. Product editing without mutations**\nUsed spread operator `...product` to avoid cloning issues and keep change detection predictable."
        ],
        "🛠️ Tech Stack": [
          "| Technology | Why I chose it |\n|------------|----------------|\n| **Angular 21** | Standalone components, signals (soon), mature HTTP client |\n| **PrimeNG** | Enterprise-ready tables, theming, less boilerplate |\n| **SASS** | Custom theming with PrimeNG variables (Lara theme) |\n| **RxJS** | Caching, retry logic, handling 429 errors |\n| **Express** | Simple proxy + Printful SDK wrapper |\n| **PapaParse** | CSV parsing with streaming support |\n| **Angular CDK** | Drag & drop for future features |"
        ],
        "📦 What I built": {
          "✅ Completed": [
            "[x] **Product dashboard** with DataView & Table (PrimeNG)",
            "[x] **Category filtering** with real-time updates",
            "[x] **Inline product editing** (no forms — direct table editing)",
            "[x] **CSV Export/Import** (PapaParse + xlsx)",
            "[x] **Dark/Light mode** with PrimeNG SASS variables",
            "[x] **Related products carousel** (excludes current product)",
            "[x] **Local mock system** (fallback when API fails)",
            "[x] **Express backend** with Printful SDK wrapper",
            "[x] **HTTP error handling** (429, CORS, offline detection)"
          ],
          "🔄 Still cooking": [
            "[ ] **Stripe integration** (Printful + Stripe webhooks)",
            "[ ] **Customer storefront** (separate Angular app)",
            "[ ] **Signals migration** (moving away from RxJS)",
            "[ ] **Bulk product import** (JSON/CSV to DB)",
            "[ ] **Order management** + supplier integration",
            "[ ] **Analytics dashboard** with charts"
          ]
        },
        "📚 Concepts I mastered": [
          "**Hexagonal architecture** (ports & adapters)",
          "**RxJS operators** (`tap`, `catchError`, `retryWhen`)",
          "**Functional interceptors** vs class-based",
          "**Angular lifecycle** (`ngOnChanges` vs `SimpleChanges`)",
          "**Unary operator** (`+productId`) for type coercion",
          "**Spread operator** for immutable state",
          "**ViewChild** + template references",
          "**Router params** (`snapshot` vs `paramsMap`)"
        ],
        "🚀 What's next (my roadmap)": [
          "**Signals** — replace RxJS where it makes sense",
          "**Stripe webhooks** — real payment flow",
          "**Customer store** — second Angular app for public facing store",
          "**Multi-tenant** — support multiple Printful stores from one dashboard",
          "**Deploy** — Vercel (frontend) + Railway (backend)"
        ],
        "💡 Lessons learned": [
          "**Never trust API rate limits** — always implement caching",
          "**CORS is always harder than you think**",
          "**Standalone components are great, but animations need sync providers**",
          "**CSV parsing in TypeScript requires type declaration hacks**",
          "**Node version matters** — use `.nvmrc`"
        ]
      }
    }
  },
  {
    "id": 2,
    "repoId": "Merakikrea Ceramica – Landing Page",
    "title": "Merakikrea Cerámica – Landing Page",
    "description": "A custom landing page for an artisan ceramics business**, inspired by the Google Business Profile experience. The goal was to create a fast, accessible digital presence that bridges the physical store with its customers through key information, authentic reviews, and up-to-date visual content",
    "imageSrc": "https://i.postimg.cc/jqJdfFtB/iphone-meraki-mockup.webp",
    "detailedDescription": "An optimized landing page built with Next.js and Tailwind CSS, presenting key information about Merakikrea Cerámica. It includes location details, social media links, opening hours, direct WhatsApp contact, and an Instagram feed.",
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
    "readmeContent": {
      "title": "Merakikrea Cerámica – Landing Page",
      "fileName": "Merakikrea Ceramica – Landing Page.md",
      "sections": {
        "📌 About the project": [
          "This project was born from the need to centralize all the information of a local business in one place: location, customer reviews, visual catalog from Instagram, and direct contact channels. The design focuses on conveying warmth and trust, with a smooth user experience across both mobile and desktop devices."
        ],
        "✨ Key features": [
          "**Fully responsive design** that adapts seamlessly to any screen size",
          "**Light/Dark mode** implemented with Tailwind CSS and CSS variables",
          "**SEO optimized** using semantic HTML tags and a search-engine-friendly structure",
          "**Core sections**:",
          "  - About the business and its workshops",
          "  - Location with integrated Google Maps",
          "  - Dynamic Instagram feed",
          "  - Real Google reviews",
          "  - Direct contact buttons (WhatsApp, email, social media)",
          "**Floating WhatsApp button** always visible for quick inquiries",
          "**Header and footer** with clear, accessible navigation"
        ],
        "🛠️ Tech stack": [
          "| Technology         | Purpose                                        |\n| ------------------ | ---------------------------------------------- |\n| Next.js            | React framework with SSR and optimized routing |\n| TypeScript         | Static typing for more robust code             |\n| Tailwind CSS       | Styling and dark mode implementation           |\n| ShadCN UI          | Accessible, customizable UI components         |\n| Framer Motion      | Smooth animations to enhance user experience   |\n| Google Maps API    | Physical store location display                |\n| Instagram Feed API | Dynamic display of recent posts                |\n| Vercel             | Continuous deployment and hosting              |"
        ],
        "🚀 Why this stack?": [
          "I chose Next.js to leverage hybrid rendering and built-in performance. Tailwind combined with ShadCN allowed me to build a clean, accessible interface without sacrificing flexibility. Integrating external APIs (Google Maps, Instagram, reviews) was key to making the site act as a real bridge between the business and its customers."
        ],
        "📸 Preview": [],
        "📎 Links": [
          "🌐 [Live demo](https://your-domain.com)",
          "📂 [GitHub repository](https://github.com/yourusername/merakikrea)",
          "*This project reflects my focus on frontend development for local businesses, prioritizing performance, accessibility, and real-world service integrations.*"
        ]
      }
    }
  },
  {
    "id": 3,
    "repoId": "Ping Test Tool - Real-Time Network Monitor",
    "title": "Ping Test Tool - Real-Time Network Monitor",
    "description": "A lightweight web-based utility for monitoring your connection quality in real time.",
    "imageSrc": "https://i.postimg.cc/661JsKNF/Captura.png",
    "detailedDescription": "Ping Test Tool is a responsive and privacy-focused web app built with Next.js, TypeScript, and Zustand. It provides real-time feedback on connection quality, showing metrics like latency, jitter, and packet loss.",
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
    "readmeContent": {
      "title": "Ping Test Tool - Real-Time Network Monitor",
      "fileName": "Ping Test Tool - Real-Time Network Monitor.md",
      "sections": {
        "✨ Features": [
          "**Real-Time Monitoring** – Continuous updates on key network stats",
          "**Latency, Jitter, Packet Loss** – Displayed via animated charts and color indicators",
          "**Retro-Inspired UI** – A throwback to vintage gaming consoles",
          "**Zustand State Management** – For clean and fast app state updates",
          "**Web Workers** – Keep performance smooth while running tests in the background",
          "**Responsive Design** – Works great on mobile and desktop",
          "✅ **Privacy Respecting** – No personal data is stored, only uses local storage for preferences"
        ],
        "🚀 How to Use": [
          "1️⃣ **Start Test** – Click the button to begin monitoring",
          "2️⃣ **Watch Metrics** – Observe live updates in the dashboard",
          "3️⃣ **Toggle Views** – Switch between metric displays (ping, jitter, loss)"
        ],
        "❓ FAQ": [
          "**Q: How accurate are the measurements?**",
          "A: The metrics are based on real-time network requests and give a good representation of your connection quality.",
          "**Q: Does it work offline?**",
          "A: No, the app requires an active internet connection.",
          "**Q: Can I export the data?**",
          "A: Not yet, but this is a planned feature for future versions."
        ],
        "🛠️ Built With": [
          "⚛️ **React + Next.js** – The backbone of the web app",
          "🅾️ **TypeScript** – Type-safe development",
          "🎨 **Tailwind CSS** – Rapid and responsive UI",
          "⚙️ **Zustand** – Lightweight and scalable state management",
          "💪 **Web Workers** – Efficient background processing",
          "📈 **Custom Metrics Charts** – Visualizations with color indicators"
        ],
        "🔐 Privacy & Cookies": [
          "✅ No personal data is stored or transmitted",
          "✅ Only uses local storage for your UI preferences",
          "✅ No third-party analytics or tracking cookies"
        ],
        "⚠️ Limitations of the Network Measurement System": {
          "1. ": [
            "The system measures network latency using `HEAD` requests to various remote endpoints. These requests may not provide an accurate measurement of actual latency as results can be influenced by external factors like server load, user network, and internet propagation delays.",
            "The selected endpoints for ping measurement include popular services like Google, Cloudflare, Microsoft, Amazon, and Apple. If any of these services experience issues or downtime, the ping measurement may not be accurate or could fail."
          ],
          "2. ": [
            "Jitter is calculated based on the time difference between consecutive ping measurements. If there is a large variation in response times between pings, this may affect the results.",
            "Jitter can be influenced by changes in the network, traffic fluctuations, and other variability outside the system's control."
          ],
          "3. ": [
            "If a ping request fails (e.g., due to a network issue or server unavailability), it is counted as packet loss.",
            "The system does not directly measure packet loss but estimates it based on the successful and failed pings."
          ],
          "4. ": [
            "Measurements are only performed towards selected remote servers, meaning they do not reflect latency or network quality between local devices or within a local network.",
            "Measurement accuracy could improve if local endpoints or specific servers were added depending on the use case."
          ],
          "5. ": [
            "The measurement results can be affected by local network congestion or temporary internet connection issues. Ping, jitter, and packet loss metrics may vary significantly depending on network stability.",
            "The system does not provide detailed information about specific network issues (e.g., local bottlenecks or intermittent routing problems)."
          ],
          "6. ": [
            "Measurement requests use the `no-cors` mode to avoid CORS-related issues, which limits the type of responses that can be received. This means that detailed server response metrics, such as header response time, are not available and only the round-trip time for the request is measured."
          ],
          "7. ": [
            "The system performs measurements at 2-second intervals. If there is a network interruption or the server does not respond within this interval, an error or an increase in packet loss might be recorded."
          ]
        }
      }
    }
  },
  {
    "id": 4,
    "repoId": "Portfolio project",
    "title": "How I Built a Self-Updating Portfolio with Next.js + Obsidian",
    "description": "A deep dive into creating a dynamic portfolio that automatically syncs with my Obsidian vault, transforming markdown notes into a beautiful, interactive showcase of my work.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "I built a custom automation system that connects my Obsidian note-taking workflow to my Next.js portfolio. A Node.js script reads markdown files from my vault, parses them with Remark, and converts them into structured data. A PowerShell script manages the entire workflow — creating new project notes, running the conversion, and committing updates. The Next.js portfolio consumes this data, generating static pages for each project with real-time GitHub stats. The result: a portfolio that updates itself whenever I write a new note. No manual copying, no formatting headaches, just writing and publishing.",
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
    "features": [
      "Automated markdown to data conversion.",
      "Obsidian vault integration with PowerShell automation.",
      "Static site generation with Next.js 14.",
      "GitHub API for real-time project stats.",
      "Bento-grid layout with AOS animations.",
      "Dark mode and responsive design.",
      "Vercel automatic deployment."
    ],
    "readmeContent": {
      "title": "How I Built a Self-Updating Portfolio with Next.js + Obsidian",
      "fileName": "Portfolio project.md",
      "sections": {
        "🎯 The Big Picture": [
          "I wanted a portfolio that:",
          "**Grows with me** — add a project in Obsidian, it appears on my site",
          "**Shows my process** — not just final results, but the journey",
          "**Stays technical** — actual problems, actual solutions",
          "The result? A **Next.js portfolio** powered by a **custom automation system** that converts my Obsidian notes into structured data, automatically updating my project showcase whenever I write a new note."
        ],
        "🧩 The Ecosystem": [
          "The system connects three main pieces:",
          "**Obsidian Vault** → Where I write all my project documentation, technical notes, and personal learnings in markdown format.",
          "**Node.js Converter** → A custom script that reads all my markdown files, parses them intelligently, and transforms them into a clean, structured JavaScript object.",
          "**Next.js Portfolio** → The frontend that consumes this data and presents it as a beautiful, interactive bento-grid layout with smooth animations.",
          "The magic is that everything flows automatically — I write once, and my portfolio updates itself."
        ],
        "📝 Part 1: README to Object Converter": {
          "The Problem": [
            "I document every project I build in Obsidian. Each note contains sections like Overview, Tech Stack, Challenges, Features, and Future Plans. But my portfolio needed structured data, not raw markdown with formatting and special syntax.",
            "Manually copying and reformatting content for each project was tedious and error-prone. I wanted a way to keep my source of truth (Obsidian) and my public-facing portfolio in sync without duplicating work."
          ],
          "The Solution": [
            "I built a Node.js script that:",
            "Reads every markdown file from my Obsidian folder",
            "Parses the structure to identify sections and their content",
            "Converts everything into a TypeScript object that my portfolio understands",
            "Outputs a clean data file ready to import"
          ],
          "How It Works": [
            "The script uses a markdown parser to analyze the structure of each note. It identifies headings, paragraphs, lists, and code blocks, then organizes them by section. This means I can write naturally in Obsidian — using whatever formatting makes sense for documentation — and the converter intelligently extracts the meaningful parts.",
            "If I add a new section to a project note, it automatically appears in the portfolio. If I edit existing content, the portfolio reflects the changes on the next build."
          ],
          "The Automation Layer": [
            "To make this workflow seamless, I created a PowerShell script that acts as a control panel. From a simple menu, I can:",
            "View all my existing project notes",
            "Create a new project template with the correct structure",
            "Run the conversion script to generate fresh data",
            "Commit the updated data to my portfolio repository",
            "This reduces what used to be a five-minute manual process (create note, copy sections, format HTML, update links, commit) to about thirty seconds of menu selections."
          ]
        },
        "🎨 Part 2: Next.js Portfolio": {
          "The Architecture": [
            "My portfolio is built with Next.js 14 using the App Router and server components. This gives me static site generation for fast loading and SEO benefits, while keeping the ability to fetch dynamic data when needed.",
            "The design follows a bento-grid layout — clean, modern, and responsive. Each project appears as a card with key information, and clicking through shows the full documentation extracted from my Obsidian notes."
          ],
          "The Data Flow": [
            "At build time, Next.js imports the generated data file created by my converter. For each project in my Obsidian vault, it pre-renders a dedicated page with all the sections and content. This means visitors get instant load times, and search engines can crawl all my project content easily."
          ],
          "GitHub Integration": [
            "Beyond the markdown content, I also pull real-time data from GitHub for each project. The portfolio displays:",
            "Star count (if people have starred the repo)",
            "Last commit date",
            "Primary programming language",
            "Direct links to repositories and live demos",
            "This adds a layer of authenticity — visitors can see that these are active, real-world projects with actual community engagement."
          ],
          "Animations and Polish": [
            "I added smooth scroll animations using a lightweight library, so elements fade in and slide up as you browse. The site is fully responsive, works on any device, and includes dark mode support for comfortable viewing at night."
          ]
        },
        "🔄 The Complete Workflow": {
          "1. Write in Obsidian": [
            "I open Obsidian and create a new note. I follow a loose template: an overview paragraph, a tech stack list, the challenges I faced, and future improvements. I write naturally — no special syntax, no formatting constraints."
          ],
          "2. Run the Automation": [
            "From my PowerShell menu, I select \"add new project\" and enter the project name. The script creates a properly formatted markdown file in my Obsidian folder if it doesn't exist.",
            "Then I select \"convert to data\" — this runs the Node script that parses all my notes and generates the fresh data file.",
            "Finally, I select \"commit and deploy\" — the script commits the changes and pushes to GitHub."
          ],
          "3. Automatic Deployment": [
            "Vercel detects the push to my main branch and automatically rebuilds the portfolio. Within minutes, the new project appears on my live site.",
            "**No manual HTML editing. No copy-pasting. No broken links. Just writing and running a few commands.**"
          ]
        },
        "💡 Why This Matters": {
          "For My Productivity": [
            "This system eliminated a repetitive task I used to dread. Before, updating my portfolio meant opening two applications, copying content, reformatting for the web, updating links, and hoping I didn't miss anything. Now I stay in my writing flow, and everything else happens automatically."
          ],
          "For My Portfolio Visitors": [
            "Visitors get comprehensive project documentation written when the project was fresh in my mind, not weeks later when I'm forcing myself to update the site. They see the real challenges, the actual technologies, and the honest mistakes — not a polished, sanitized version."
          ],
          "For My Learning": [
            "Documenting projects in Obsidian has become part of my development process. When I finish a feature, I jot down what worked and what didn't. When I solve a tricky bug, I capture the solution. These notes become the raw material for my portfolio, making the documentation feel organic rather than an afterthought."
          ]
        },
        "🛠️ The Tech Stack": [
          "| Component | Technology |\n|-----------|------------|\n| **Content Authoring** | Obsidian (markdown) |\n| **Conversion Script** | Node.js + TypeScript |\n| **Markdown Parsing** | Remark ecosystem |\n| **Workflow Automation** | PowerShell |\n| **Portfolio Framework** | Next.js 14 |\n| **Styling** | Tailwind CSS |\n| **Animations** | AOS (Animate on Scroll) |\n| **API Integration** | GitHub REST API |\n| **Hosting** | Vercel |"
        ],
        "🚀 What I Learned": [
          "**Automation compounds.** The time I invested in building this workflow paid back many times over in saved manual effort. More importantly, it removed friction — I'm more likely to document projects now because the cost is so low.",
          "**Your source of truth matters.** Keeping all my project documentation in Obsidian means I have a single place to look for notes, ideas, and technical details. The portfolio is just a view into that database.",
          "**Static sites can be dynamic.** By generating pages at build time from a data source, I get the performance of static sites with the flexibility of a content management system — without actually running a CMS.",
          "**Personal tools are worth building.** This system doesn't exist as a product. It's custom-built for my workflow, my folder structure, my way of writing. And that's exactly why it works so well."
        ],
        "📂 Repositories": [
          "**readme-to-obj** — The Node.js converter that processes markdown files",
          "**nextjs-portfolio** — The frontend that displays my work",
          "**Live Portfolio** — See it in action"
        ],
        "🔮 Future Improvements": [
          "I'm planning to add:",
          "**Auto-sync** — watch for Obsidian file changes and trigger updates automatically",
          "**Full-text search** — help visitors find projects by technology or topic",
          "**Tags and categories** — organize projects beyond just listing them",
          "**Image handling** — automatically convert and optimize images from Obsidian"
        ],
        "📝 Final Thoughts": [
          "This project taught me that the best tools are the ones that disappear. My portfolio doesn't feel like a system — it just feels like my work, presented honestly and automatically.",
          "If you're tired of manually updating your portfolio or blog, consider building your own pipeline. Start with where your notes already live, add automation where you feel friction, and let the system handle the rest.",
          "**Built with 🖊️ Obsidian, ⚛️ Next.js, and the desire to never copy-paste again**— [deveduar](https://github.com/deveduar)"
        ]
      }
    }
  },
  {
    "id": 5,
    "repoId": "todo-app",
    "title": "Todo app",
    "description": "A task management application designed to help organize and prioritize activities efficiently.",
    "imageSrc": "https://i.postimg.cc/RVkst3yt/pc-todo-app-mockup.webp",
    "detailedDescription": "The app allows setting due dates, reminders, and managing task statuses. Now, it also includes a Kanban board with drag-and-drop functionality, allowing tasks to be easily moved between different statuses for better organization.",
    "technologies": [
      "Next.js",
      "React.js",
      "Tailwind",
      "Node.js",
      "Shacdn UI",
      "PostgreSQL",
      "Docker"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/todo-app",
        "label": "GitHub"
      }
    ],
    "gallery": [
      "https://i.postimg.cc/L8jy39Fb/iphone-todo-app-mockup.webp",
      "https://i.postimg.cc/kMhhnYyf/laptop-todo-app-mockup.webp",
      "https://i.postimg.cc/RVkst3yt/pc-todo-app-mockup.webp",
      "https://i.postimg.cc/RV6pq1s9/tablet-todo-app-mockup.webp"
    ],
    "features": [
      "Task management: Create, edit, delete, and mark tasks as completed.",
      "Statuses and priorities: Assign custom statuses and priority levels.",
      "Due dates and reminders: Set due dates and notifications.",
      "Smart date and time selection: Ensures valid time selection based on the chosen date.",
      "Backend synchronization: Data persistence via an API.",
      "Kanban board: Drag-and-drop tasks between different statuses for a visual workflow.",
      "Responsive design with ShadCN UI.",
      "Static site generation with Next.js."
    ],
    "readmeContent": {
      "title": "Todo app",
      "fileName": "todo-app.md",
      "sections": {
        "✨ Features": [
          "📋 **Task management**: Create, edit, delete, and mark tasks as completed.",
          "🎯 **Statuses and priorities**: Assign custom statuses and priority levels.",
          "⏰ **Due dates and reminders**: Set due dates and notifications.",
          "📅 **Smart date and time selection**: Ensures valid time selection based on the chosen date.",
          "🔄 **Backend synchronization**: Data persistence via an API.",
          "📌 **Kanban board**: Drag-and-drop tasks between different statuses for a visual workflow."
        ],
        "🛠️ Technologies Used": {
          "Frontend": [
            "⚛️ **React** with TypeScript",
            "🎨 **Tailwind CSS** for styling",
            "📦 **ShadCN/UI** for UI components",
            "🗂 **date-fns** and **date-fns-tz** for date handling",
            "🖱 **dnd-kit** for drag-and-drop functionality in the Kanban board"
          ],
          "Backend (Separate GitHub Project)": [
            "🚀 **Node.js with Express**",
            "🐘 **PostgreSQL** as the database",
            "🐳 **Docker** for deployment and configuration"
          ]
        },
        "🚀 Installation": {
          "1️⃣ Clone the repository": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "git clone https://github.com/your-user/your-todo-repo.git\ncd your-todo-repo"
            }
          ],
          "2️⃣ Install dependencies": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "npm install"
            }
          ],
          "3️⃣ Set up the backend (Docker)": [
            "The backend is in a separate GitHub project. Follow its instructions to set it up with Docker."
          ],
          "4️⃣ Run the frontend": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "npm run dev"
            }
          ]
        },
        "📌 Roadmap": [
          "[ ] Authentication integration",
          "[ ] Support for subtasks",
          "[ ] Real-time notifications",
          "📌 *Contributions and suggestions are welcome.*"
        ]
      }
    }
  },
  {
    "id": 6,
    "repoId": "Utility Tools Collection – Data Migration & Media Conversion",
    "title": "Utility Tools Collection – Data Migration & Media Conversion",
    "description": "A collection of Python CLI tools: migrate Omnivore bookmarks to Raindrop.io, convert PDFs to CBR format for digital comics, and download YouTube audio as high-quality MP3.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "Three practical Python command-line tools designed to solve real-world problems. The Omnivore Converter helps users migrate their saved articles to Raindrop.io before the service shutdown. The PDF to CBR Converter transforms PDF files into comic book format for digital readers. The YouTube MP3 Downloader extracts high-quality audio from YouTube videos with a simple CLI interface. Each tool prioritizes simplicity, clear documentation, and robust error handling.",
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
    "readmeContent": {
      "title": "Utility Tools Collection – Data Migration & Media Conversion",
      "fileName": "Utility Tools Collection – Data Migration & Media Conversion.md",
      "sections": {
        "📦 Project 1: Omnivore → Raindrop.io Migration Tool": {
          "✨ Key features": [
            "**Batch processing** – Handles multiple JSON files matching a filename pattern",
            "**UTF-8 encoding** – Preserves special characters and non-English text",
            "**Complete metadata migration** – Preserves URLs, titles, tags, notes, and creation dates",
            "**Error resilience** – Continues processing remaining files if one fails"
          ],
          "🛠️ Tech stack": [
            "| Technology | Purpose |\n|-----------|---------|\n| Python 3 | Core scripting language |\n| JSON | Parsing exported data |\n| CSV | Output format for Raindrop.io import |"
          ],
          "📋 CSV output structure": [
            "| Column | Description |\n|--------|-------------|\n| url | The original article or bookmark URL |\n| title | Article or bookmark title |\n| tags | Comma-separated tags |\n| note | Personal notes or descriptions |\n| created | Creation date of the saved item |"
          ],
          "📎 Usage example": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python3 convert.py \"metadata_*.json\""
            }
          ]
        },
        "📚 Project 2: PDF to CBR Converter": {
          "✨ Key features": [
            "**One‑command conversion** – Simple CLI interface",
            "**Customizable output** – Adjustable DPI and JPEG quality",
            "**Preserves page order** – Pages maintain original sequence",
            "**Efficient compression** – Optimized for comic reading devices"
          ],
          "🛠️ Tech stack": [
            "| Technology | Purpose |\n|-----------|---------|\n| Python 3.7+ | Core scripting language |\n| pdf2image | PDF page extraction |\n| Pillow | Image processing |\n| RAR/zipfile | Archive creation |\n| Poppler | PDF rendering backend |"
          ],
          "📎 Usage examples": [
            "**Basic conversion:**",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python main.py \"comic.pdf\""
            },
            "**Advanced options:**",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python main.py \"manga.pdf\" --output-dir images --dpi 300 --quality 95"
            }
          ],
          "⚠️ Note": [
            "This tool is intended for personal use with content you have the rights to convert."
          ]
        },
        "🎵 Project 3: YouTube MP3 Downloader": {
          "✨ Key features": [
            "**Batch processing** – Accepts multiple video URLs at once",
            "**High‑quality audio** – Downloads best available format and converts to 320kbps MP3",
            "**Filename sanitization** – Automatically removes invalid characters for cross‑platform compatibility",
            "**Organized output** – Files saved in a dedicated `output` folder"
          ],
          "🛠️ Tech stack": [
            "| Technology | Purpose |\n|-----------|---------|\n| Python 3 | Core scripting language |\n| yt-dlp | YouTube video/audio extraction |\n| ffmpeg | Audio conversion and encoding |"
          ],
          "📎 Usage example": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python script.py\n# Then enter URLs: https://youtube.com/watch?v=abc123, https://youtube.com/watch?v=xyz456"
            }
          ],
          "⚠️ Disclaimer": [
            "This tool is for educational purposes only. Users are responsible for complying with YouTube's terms of service and applicable copyright laws."
          ]
        },
        "🚀 Why I built these tools": [
          "Each of these projects represents a practical response to a specific user need:",
          "**Omnivore Converter** – Helped users preserve their reading history before a service shutdown",
          "**PDF to CBR** – Solved a niche but common pain point for digital comic readers",
          "**YouTube MP3 Downloader** – Automated a repetitive task with a simple, clean interface",
          "These tools share a common philosophy: **solve a real problem with minimal complexity, clear documentation, and robust error handling.**"
        ],
        "🔧 Common technical themes": [
          "**Command‑line first** – Designed for automation and scriptability",
          "**Cross‑platform** – Works on Windows, macOS, and Linux",
          "**Educational value** – Clear code structure and documentation for learning",
          "**User‑focused** – Handles edge cases and provides meaningful feedback"
        ],
        "📎 Links": [
          "🔄 [Omnivore to Raindrop Converter]((https://github.com/deveduar/omnivore-to-raindrop)",
          "📚 [PDF to CBR Converter](https://github.com/deveduar/pdf-to-cbr.git)",
          "🎵 [YouTube MP3 Downloader](https://github.com/deveduar/you-mp3-python)"
        ]
      }
    }
  }
];
