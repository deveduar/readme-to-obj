export const readmes = [
  {
    "id": 1,
    "repoId": "angular-SGI-front",
    "title": "Angular inventory system for printfull store",
    "description": "Complete inventory management system built with Angular 21 and PrimeNG, connected to Printful API for product management, categories, variants and CSV export.",
    "imageSrc": "https://i.postimg.cc/jqJdfFtB/iphone-meraki-mockup.webp",
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
        "href": "https://github.com/deveduar/inventory-backendd",
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
      "title": "Angular inventory system for printfull store",
      "fileName": "angular-SGI-front.md",
      "sections": {
        "✨ Demo y repositorios": [
          "| Recurso | Enlace |\n|--------|--------|\n| 🔗 Frontend (este repo) | [GitHub - angular-inventory-system](https://github.com/deveduar/angular-inventory-system) |\n| 🔗 Backend (Express) | [GitHub - inventory-backend](https://github.com/deveduar/inventory-backend) |\n| 🚀 Demo del dashboard | Próximamente |"
        ],
        "🎯 Objetivos del proyecto": [
          "✅ Gestionar productos, categorías y variantes desde un panel administrativo.",
          "✅ Exportar inventario a CSV.",
          "✅ Integrar con la API de Printful para obtener productos reales.",
          "🔄 Conectar con pasarela de pagos (Stripe) para futura tienda.",
          "🔄 Crear un frontend público para clientes.",
          "🔄 Dashboard con reportes y gráficos.",
          "🔄 Autenticación de usuarios (auth).",
          "🔄 Gestión de pedidos y proveedores."
        ],
        "🧠 Arquitectura y decisiones técnicas": [
          "El sistema sigue una **arquitectura hexagonal (puertos y adaptadores)**, separando claramente:",
          "**Modelos/DTOs** → Transforman los datos de la API de Printful a un modelo interno.",
          "**Servicios** → Manejan la lógica de negocio y comunicación con el backend.",
          "**Adaptadores** → Permiten cambiar fácilmente entre fuentes de datos (API real, JSON local, etc.).",
          "Además, se ha implementado:",
          "Cache de productos para evitar sobrecargar la API de Printful.",
          "Manejo de errores 429 (demasiadas peticiones) con reintentos y mensajes amigables.",
          "Interceptores HTTP funcionales (pendiente de migración completa).",
          "Soporte para SSR sin configurar completamente (fetch con `withFetch()`)."
        ],
        "🛠️ Tecnologías utilizadas": [
          "| Área | Tecnologías |\n|------|-------------|\n| **Frontend** | Angular 21, PrimeNG, SASS, RxJS |\n| **Backend** | Express, Node.js, Axios |\n| **Build tools** | ESLint, Prettier, Angular CLI |\n| **Extras** | PapaParse (CSV), xlsx (Excel), Angular CDK (drag & drop) |"
        ],
        "⚙️ Funcionalidades implementadas": {
          "✅ Completadas": [
            "[x] Listado de productos con DataView y Table (PrimeNG)",
            "[x] Detalle de producto con carrusel de productos relacionados",
            "[x] Filtros por categoría",
            "[x] Edición inline de productos",
            "[x] Exportar e importar productos a CSV (PapaParse / xlsx)",
            "[x] Temas dinámicos (claro/oscuro) con PrimeNG SASS",
            "[x] Sidebar y menús responsivos",
            "[x] Conexión al backend Express + Printful API",
            "[x] Mock de productos locales como fallback"
          ],
          "🔄 En progreso / Backlog": [
            "[ ] Autenticación de usuarios (JWT)",
            "[ ] Gestión de pedidos y proveedores",
            "[ ] Dashboard con métricas y gráficos",
            "[ ] Frontend público tipo tienda (cliente final)",
            "[ ] Integración con Stripe para pagos reales",
            "[ ] Migración de RxJS a Signals (experimental)",
            "[ ] Optimización de imágenes",
            "[ ] Skeleton loaders para mejorar UX"
          ]
        },
        "🧩 Conceptos avanzados aplicados": [
          "**Lifecycle hooks** (`ngOnInit`, `ngOnChanges`, `SimpleChanges`)",
          "**Data binding** y **event binding**",
          "**ViewChild** para acceder a elementos del DOM",
          "**Router events** y captura de parámetros (`paramsMap`, `snapshot`)",
          "**Operador unario (`+`)** para convertir IDs a número",
          "**Spread operator** para evitar mutaciones en arrays",
          "**Manejo de errores HTTP** con interceptores funcionales",
          "**Separación de lógica en servicios** reutilizables",
          "**Paginación** con scroll automático al inicio"
        ]
      }
    }
  },
  {
    "id": 2,
    "repoId": "merakikrea",
    "title": "Merakikrea Cerámica",
    "description": "A landing page inspired by Google Business Profile to showcase store information and facilitate easy contact.",
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
      "title": "Merakikrea Cerámica",
      "fileName": "merakikrea.md",
      "sections": {
        "✨ Features": [
          "✅ **Responsive design** – Adapted for both mobile and desktop.✅ **Light/Dark Mode** – Implemented using **Tailwind CSS**.✅ **SEO and Accessibility** – Optimized for search engines with semantic HTML tags.✅ **Key Sections**:",
          "**About Us** – Information about the store and courses.",
          "**Location** – Integrated with **Google Maps**.",
          "**Instagram Feed** – Displays recent posts from Instagram.",
          "**Google Reviews** – Shows customer reviews.",
          "**Contact** – Buttons for WhatsApp, email, and social media.✅ **Floating WhatsApp button** – Always visible.✅ **Header and Footer** – Intuitive navigation."
        ],
        "🛠️ Technologies Used": [
          "⚛️ **Next.js** (React framework for web applications)",
          "🅾️ **TypeScript** (Safe typing for JavaScript)",
          "🎨 **Tailwind CSS** (Styling and light/dark mode with variables)",
          "📦 **ShadCN UI** (Accessible and modern UI components)",
          "🎬 **Framer Motion** (Smooth and attractive animations)",
          "🗺️ **Google Maps API** (For location display)",
          "📸 **Instagram Feed API** (For displaying recent posts)",
          "🌐 **Vercel** (Hosting and deployment)"
        ]
      }
    }
  },
  {
    "id": 3,
    "repoId": "omnivore-to-raindrop",
    "title": "Omnivore JSON to Raindrop.io CSV Converter",
    "description": "A Python script to convert Omnivore JSON exports to CSV format for easy migration to Raindrop.io.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "This Python script helps users convert JSON files exported from Omnivore into CSV format, making them compatible with Raindrop.io. It allows easy migration of data as Omnivore is scheduled to shut down.",
    "technologies": [
      "Python",
      "Scripting",
      "Automation",
      "Data Conversion"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/omnivore-to-raindrop",
        "label": "GitHub"
      }
    ],
    "features": [
      "Converts Omnivore JSON exports to CSV format.",
      "Supports UTF-8 encoding for correct display of text data.",
      "Batch processing of multiple JSON files based on filename pattern.",
      "Generates CSV file compatible with Raindrop.io for easy import."
    ],
    "readmeContent": {
      "title": "Omnivore JSON to Raindrop.io CSV Converter",
      "fileName": "omnivore-to-raindrop.md",
      "sections": {
        "Prerequisites": [
          "**Python 3**: Ensure that you have Python 3 installed. You can check your Python version by running:"
        ],
        "Features": [
          "Converts Omnivore JSON exports to a CSV file.",
          "Compatible with UTF-8 encoding, so text data displays correctly.",
          "Processes multiple JSON files based on a filename pattern, allowing batch conversion."
        ],
        "Installation": [
          "Clone this repository or download the `convert.py` script.",
          "Place the script in a directory where your exported JSON files from Omnivore are located."
        ],
        "Usage": {
          "Output": [
            "The script will generate a CSV file named `metadata.csv` in the same directory.",
            "This file can be imported into Raindrop.io or other applications that accept CSV imports."
          ]
        },
        "CSV Structure": [
          "The output CSV file includes the following columns:",
          "| Column    | Description                       |\n|-----------|-----------------------------------|\n| url       | The URL associated with the item  |\n| title     | The title of the item             |\n| tags      | Comma-separated tags              |\n| note      | Notes or description              |\n| created   | The creation date of the item     |"
        ],
        "Example": [
          "Here’s how to use the script for multiple JSON files matching the pattern `metadata_*.json`:",
          {
            "type": "code",
            "lang": "bash",
            "meta": null,
            "value": "python3 convert.py \"metadata_*.json\""
          },
          "Upon successful completion, you should see a message indicating the total number of records processed and that `metadata.csv` has been created."
        ],
        "Error Handling": [
          "If a JSON file cannot be processed (for example, if it is corrupted), an error message will be displayed, and the script will continue processing the remaining files."
        ],
        "Notes": [
          "Ensure that all Omnivore export files are saved in UTF-8 format to avoid encoding issues.",
          "Open `metadata.csv` with a UTF-8 compatible editor, such as Excel or LibreOffice, to ensure proper display of special characters."
        ]
      }
    }
  },
  {
    "id": 4,
    "repoId": "pdf-to-cbr",
    "title": "PDF to CBR Converter",
    "description": "A Python script to convert PDF files to CBR (Comic Book RAR) format, perfect for digital comic and manga readers.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "This tool converts PDF files into the CBR format, suitable for comic book and manga readers. It requires Poppler for Windows and Python 3.7+.",
    "technologies": [
      "Python",
      "PDF Conversion",
      "CBR Format",
      "Poppler"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/pdf-to-cbr.git",
        "label": "GitHub Repository"
      }
    ],
    "features": [
      "Converts PDFs to CBR format for digital comic reading.",
      "Supports custom output directories, DPI, and image quality settings.",
      "Easy-to-use command line interface.",
      "Requires Poppler for PDF rendering.",
      "Perfect for manga and comic book digitalization."
    ],
    "readmeContent": {
      "title": "PDF to CBR Converter",
      "fileName": "pdf-to-cbr.md",
      "sections": {
        "Description": [
          "A Python script to convert PDF files to CBR (Comic Book RAR) format, perfect for digital comic and manga readers."
        ],
        "Disclaimer": [
          "This tool is intended for personal and educational use only. Please ensure you have the right to convert and distribute any content with copyright protection. The creator of this script does not condone or take responsibility for any unauthorized use, including the redistribution of copyrighted material."
        ],
        "Prerequisites": {
          "Installation": [
            "Clone the repository:",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "git clone https://github.com/your-username/pdf-to-cbr.git\ncd pdf-to-cbr"
            },
            "Install dependencies:",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "pip install -r requirements.txt"
            },
            "Download and Install Poppler:",
            "  - Download Poppler binaries for Windows",
            "  - Extract contents into the project folder"
          ]
        },
        "Usage": {
          "Basic Usage": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python main.py \"path/to/file.pdf\""
            }
          ],
          "Advanced Options": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python main.py \"path/to/file.pdf\" --output-dir images --dpi 300 --quality 95"
            }
          ],
          "Parameters": [
            "`path/to/file.pdf`: Path to the PDF file to convert",
            "`--output-dir`: Output directory for images (default: `output`)",
            "`--dpi`: Image resolution (default: 300)",
            "`--quality`: JPEG compression quality (default: 95, range 1-100)"
          ]
        },
        "Examples": {
          "Convert PDF with default settings": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python main.py \"D:/Manga/chapter1.pdf\""
            }
          ],
          "Convert with custom configuration": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "python main.py \"D:/Manga/chapter2.pdf\" --output-dir my_images --dpi 600 --quality 90"
            }
          ]
        },
        "Roadmap": [
          "[x] Convert to ZIP and CBR",
          "[ ] Loading improvements and color enhancements"
        ],
        "Troubleshooting": [
          "Ensure Poppler is correctly installed and added to system PATH",
          "Check Python version compatibility",
          "Verify input PDF file integrity"
        ],
        "Contributing": [
          "Contributions are welcome! Please:",
          "Open an issue to discuss proposed changes",
          "Create a pull request with detailed description",
          "Follow project coding standards"
        ]
      }
    }
  },
  {
    "id": 5,
    "repoId": "ping-test-tool",
    "title": "Ping Test Tool",
    "description": "A lightweight web-based utility for monitoring your connection quality in real time.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
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
      "title": "Ping Test Tool",
      "fileName": "ping-test-tool.md",
      "sections": {
        "✨ Features": [
          "✅ **Real-Time Monitoring** – Continuous updates on key network stats",
          "✅ **Latency, Jitter, Packet Loss** – Displayed via animated charts and color indicators",
          "✅ **Retro-Inspired UI** – A throwback to vintage gaming consoles",
          "✅ **Zustand State Management** – For clean and fast app state updates",
          "✅ **Web Workers** – Keep performance smooth while running tests in the background",
          "✅ **Responsive Design** – Works great on mobile and desktop",
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
    "id": 6,
    "repoId": "portfolio",
    "title": "My Portfolio",
    "description": "A modern portfolio built with Next.js 14, TypeScript, and Tailwind CSS, featuring a Bento-style layout, AOS animations, and GitHub integration for projects.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "This portfolio is designed to showcase my projects, skills, and experience with a visually engaging Bento grid, animations powered by AOS, and automated project details fetched from a GitHub repository.",
    "technologies": [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "AOS",
      "GitHub API"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/nextjs-portfolio.git",
        "label": "GitHub Repository"
      },
      {
        "href": "https://deveduar-portfolio.vercel.app",
        "label": "Live Demo"
      }
    ],
    "features": [
      "Bento-style UI for a modern and structured layout.",
      "Dynamic project showcase integrated with GitHub README repository.",
      "Interactive modals for project details.",
      "Smooth animations using AOS for an engaging experience.",
      "Dark mode support.",
      "Fully responsive design for all devices.",
      "Deployed on Vercel for fast and reliable hosting."
    ],
    "readmeContent": {
      "title": "My Portfolio",
      "fileName": "portfolio.md",
      "sections": {
        "🌟 Features": [
          "✅ **Modern UI/UX** – Bento-grid layout with smooth animations.",
          "✅ **Project showcase** – Integrated with a GitHub repository to fetch project details from READMEs.",
          "✅ **Optimized performance** – Uses `next/image` for fast loading.",
          "✅ **AOS Animations** – Smooth scrolling animations for a dynamic experience.",
          "✅ **Static site** – No longer a SPA, improved SEO and performance.",
          "✅ **Dark Mode** – Supports light and dark themes.",
          "✅ **Fully Responsive** – Works seamlessly on all devices.",
          "✅ **Deployed on Vercel** – Fast and reliable hosting."
        ],
        "🛠️ Tech Stack": [
          "**Next.js 14** – App router & server components",
          "**TypeScript** – Strongly typed codebase",
          "**Tailwind CSS** – Utility-first styling",
          "**AOS (Animate on Scroll)** – Smooth animations",
          "**GitHub API** – Fetch project details dynamically",
          "**Vercel** – Deployment and hosting"
        ],
        "🚀 Getting Started": {
          "1️⃣ Clone the repository": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "git clone https://github.com/deveduar/nextjs-portfolio.git\ncd nextjs-portfolio"
            }
          ],
          "2️⃣ Install dependencies": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "npm install\n# or\nyarn install"
            }
          ],
          "3️⃣ Run the development server": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "npm run dev\n# or\nyarn dev"
            },
            "Open **[http://localhost:3000](http://localhost:3000)** to view in the browser."
          ]
        },
        "🔗 Live Demo": [
          "🔴 **Check it out live:** [deveduar-portfolio.vercel.app](https://deveduar-portfolio.vercel.app/)"
        ],
        "📌 Future Improvements": [
          "📌 Enhance filtering and search for projects.",
          "📌 Improve accessibility and mobile gestures.",
          "📌 Expand GitHub integration with more metadata."
        ],
        "📞 Contact": [
          "If you have any questions or feedback, feel free to reach out!"
        ],
        "📝 License": [
          "This project is **MIT licensed**. Feel free to use and modify it!"
        ]
      }
    }
  },
  {
    "id": 7,
    "repoId": "readme-to-obj",
    "title": "README to Object Converter",
    "description": "A project to convert README.md files from multiple repositories into structured JavaScript objects for easy integration with TypeScript projects.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "This project downloads README.md files from specified repositories, processes them to extract key sections (such as headers, paragraphs, lists, and code), and converts them into a JavaScript object. This object contains the sections with their corresponding content and is saved into a .ts file for later use.",
    "technologies": [
      "Node.js",
      "TypeScript",
      "GitHub API",
      "remark"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/readme-to-obj",
        "label": "GitHub Repository"
      }
    ],
    "features": [
      "Downloads README.md files from public GitHub repositories.",
      "Extracts sections such as headers, paragraphs, and lists from Markdown.",
      "Converts extracted content into a structured JavaScript object.",
      "Saves the resulting object in a ts file for TypeScript integration.",
      "Customizable list of repositories to download from.",
      "Supports integration with TypeScript projects for dynamic README usage."
    ],
    "readmeContent": {
      "title": "README to Object Converter",
      "fileName": "readme-to-obj.md",
      "sections": {
        "Description": [
          "The project downloads `README.md` files from specified repositories, processes them to extract key sections (such as headers, paragraphs, lists, and code), and converts them into a JavaScript object. This object contains the sections with their corresponding content and is saved into a `.ts` file for later use. Additionally, it generates an HTML view for each README to visualize its content directly in the browser."
        ],
        "Features": [
          "Downloads `README.md` files from public GitHub repositories.",
          "Automatically extracts sections from the Markdown file.",
          "Converts sections into a structured object.",
          "Saves the result in a `.ts` file for easy integration with TypeScript projects.",
          "You can customize which repositories to download the README from.",
          "**HTML Generation**: Generates HTML to visualize the README files directly in the browser."
        ],
        "Installation": [
          "Clone this repository:",
          "Install the dependencies:"
        ],
        "Usage": {
          "1. Run the Conversion Script": [
            "The `updateReadmes.ts` script is responsible for downloading and converting the `README.md` files from the specified repositories. To run the script, use the following command:",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "npm run update-readmes"
            },
            "This will download the `README.md` files, extract the sections, and save the resulting object in `src/data/readmes.ts`."
          ],
          "2. View the HTML": [
            "After running the script, you can also generate an HTML view of each README file by running the following:",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "npm run generate-html"
            },
            "This will create an HTML page for each README file that can be viewed directly in a browser."
          ],
          "3. Example Output": [
            "After running the script, the `readmes.ts` file will contain something like this:",
            {
              "type": "code",
              "lang": "ts",
              "meta": null,
              "value": "export const readmes = {\n  \"portfolio\": {\n    title: \"My Portfolio\",\n    sections: {\n      \"Introduction\": \"This is my portfolio...\",\n      \"Technologies\": \"React, Node.js, etc.\",\n      // ...\n    }\n  },\n  \"todo-app\": {\n    title: \"Todo App\",\n    sections: {\n      \"Features\": \"Task management...\",\n      \"Setup\": \"To install...\",\n      // ...\n    }\n  }\n}"
            },
            "The HTML output will be available in the `dist` folder."
          ],
          "4. Include the Data in Your Project": [
            "You can import the `readmes` object into your code:",
            {
              "type": "code",
              "lang": "ts",
              "meta": null,
              "value": "import { readmes } from './data/readmes';\n\nconsole.log(readmes['portfolio']);"
            }
          ]
        },
        "Customization": [
          "You can modify the list of repositories in the `src/scripts/updateReadmes.ts` file by adding or removing repositories. The repository structure is as follows:",
          {
            "type": "code",
            "lang": "ts",
            "meta": null,
            "value": "const repos = [\n  { id: \"repo_id\", url: \"https://raw.githubusercontent.com/user/repo/main/README.md\" },\n  // ...\n];"
          }
        ],
        "Libraries Used": [
          "This project uses the following libraries:",
          "**[remark](https://github.com/remarkjs/remark)** - A Markdown processor for parsing and transforming Markdown.",
          "**[remark-parse](https://github.com/remarkjs/remark/tree/main/packages/remark-parse)** - A plugin for remark to parse Markdown into an abstract syntax tree (AST).",
          "**[typescript](https://www.typescriptlang.org/)** - A strict syntactical superset of JavaScript that adds optional static typing.",
          "**[@types/node](https://www.npmjs.com/package/@types/node)** - TypeScript type definitions for Node.js."
        ],
        "Node.js and TypeScript Version Requirements": [
          "Node.js version: **v16.0.0** or higher",
          "TypeScript version: **v5.8.2** or higher"
        ],
        "License": [
          "This project is licensed under the [MIT License](LICENSE)."
        ]
      }
    }
  },
  {
    "id": 8,
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
    "id": 9,
    "repoId": "you-mp3-python",
    "title": "YouTube MP3 Downloader",
    "description": "A Python script to download audio from YouTube videos in MP3 format at 320kbps using yt-dlp and ffmpeg.",
    "imageSrc": "https://i.postimg.cc/HLT5MH2H/artem-sapegin-b18-TRXc8-UPQ-unsplash.jpg",
    "detailedDescription": "This Python script downloads audio from YouTube videos, converts it to MP3 at 320kbps, and saves it in an output folder with sanitized filenames. It uses yt-dlp for downloading and ffmpeg for conversion.",
    "technologies": [
      "Python",
      "yt-dlp",
      "ffmpeg",
      "Scripting",
      "Automation"
    ],
    "links": [
      {
        "href": "https://github.com/deveduar/you-mp3-python",
        "label": "GitHub Repository",
        "svg": "GitHubIcon"
      }
    ],
    "features": [
      "Efficiently download and convert multiple YouTube videos to MP3 at 320kbps.",
      "Sanitize filenames to avoid invalid characters on Windows.",
      "Organize MP3 files in the 'output' folder.",
      "Supports batch download of multiple YouTube URLs."
    ],
    "readmeContent": {
      "title": "YouTube MP3 Downloader",
      "fileName": "you-mp3-python.md",
      "sections": {
        "Requirements": [
          "Python 3.x",
          "`yt-dlp`: For downloading YouTube videos.",
          "`ffmpeg`: For converting audio files to MP3."
        ],
        "Installation": {
          "1. Clone this repository": [
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "git clone https://github.com/yourusername/py-mp3-you.git\ncd py-mp3-you"
            }
          ],
          "2. Install dependencies": [
            "Make sure Python is installed, and then install the required Python packages. You can use the `requirements.txt` file provided:",
            {
              "type": "code",
              "lang": "bash",
              "meta": null,
              "value": "pip install -r requirements.txt"
            },
            "This will install all necessary dependencies, including `yt-dlp`."
          ],
          "3. Download and install ": [
            "You can download `ffmpeg` from the [official website](https://ffmpeg.org/download.html).",
            "If you are using Windows, make sure to add the `ffmpeg` path to your `PATH` environment variable, or place the `ffmpeg.exe` binary in a folder within your project and modify the path in the script."
          ],
          "4. Project Structure": [
            "The project should have the following folder structure:",
            {
              "type": "code",
              "lang": null,
              "meta": null,
              "value": "py-mp3-you/\n├── ffmpeg/                   # Folder containing the ffmpeg binary\n│   └── bin/\n│       └── ffmpeg.exe         # ffmpeg executable\n├── output/                   # Folder where the downloaded MP3s will be saved\n├── script.py                 # Python script for downloading and converting\n├── requirements.txt          # File containing the Python dependencies\n└── README.md                 # This file"
            }
          ]
        },
        "Usage": [
          "Run the script with the following command:",
          {
            "type": "code",
            "lang": "bash",
            "meta": null,
            "value": "python script.py"
          },
          "The script will ask you to enter the YouTube video URL(s) separated by commas. For example:",
          {
            "type": "code",
            "lang": null,
            "meta": null,
            "value": "https://www.youtube.com/watch?v=abc123, https://www.youtube.com/watch?v=xyz456"
          },
          "The script will download the audio in the best available format, convert it to MP3 at 320kbps, and save it in the `output` folder with the video title, removing invalid characters."
        ],
        "Features": [
          "Efficiently downloads and converts multiple YouTube videos to MP3.",
          "Sanitizes filenames to avoid issues with invalid characters on Windows.",
          "The converted MP3 files are organized and saved in an `output` folder."
        ],
        "Contributions": [
          "If you have suggestions or improvements, feel free to create a pull request or open an issue."
        ],
        "Disclaimer": [
          "This script is intended for educational purposes only. The author does not condone or encourage the downloading of copyrighted material without permission. It is the responsibility of the user to ensure they comply with local laws and the terms of service of YouTube or any other platform they are using the script with.",
          "The author will not be held liable for any misuse of this tool or for any legal consequences that arise from its use."
        ],
        "License": [
          "MIT License. See the LICENSE file for more details."
        ]
      }
    }
  }
];
