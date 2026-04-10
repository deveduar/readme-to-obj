export const readmes = [
  {
    "id": 1,
    "repoId": "3D Audio Visualizer",
    "date": "2026-04-08T21:12:46.167Z",
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
      "date": "2026-04-08T21:12:46.167Z",
      "sections": {
        "🎯 The Big Picture": [
          "I wanted to build more than just a music player. I set out to create an **experimental audio visualization platform** where music becomes art — real-time, reactive, and completely customizable.",
          "The result is a fully functional audiovisual player featuring:",
          "- **3D audio-reactive visualizations** with custom GLSL shaders",
          "- **Real-time parameter control** via Tweakpane editor",
          "- **Multiple visual modes** (geometry, waveform, grid, cover art)",
          "- **Professional audio engine** with metering (dB/LUFS)",
          "- **Playlist management** with drag-and-drop reordering",
          "- **Metadata extraction** for album artwork and track info"
        ],
        "✨ What I Built": {
          "Core Features": [
            "**Audio Engine**\nBuilt on Tone.js, the player handles playlist management, seekable timeline with real-time feedback, volume control, and playback modes (AUTO for autoplay next track, LOOP for repeating current). Audio metrics include approximate dB and LUFS metering.",
            "**3D Visualizer**\nA custom shader-based 3D scene built with Threlte (Three.js for Svelte). The geometry reacts to audio in real-time — bass hits create bounce effects, frequencies drive noise parameters, and the entire scene pulses with the music.",
            "**Live Editor**\nA Tweakpane-based control panel that lets users modify display modes, geometry types (Icosahedron, Sphere, Torus, Octahedron), and shader uniforms (noise frequency/amplitude/speed, base radius, wireframe opacity, bloom strength) in real-time. Every change is instantaneous — no reload needed.",
            "**Multiple Visual Modes**",
            "- **Sphere Mode** — Audio-reactive 3D geometry with shader effects",
            "- **Waveform Mode** — Traditional 2D canvas-based audio signal rendering",
            "- **Grid Mode** — Abstract grid visualization",
            "- **Cover Art Mode** — 3D album artwork display (flat or box) with extracted metadata",
            "**Playlist Management**\nInitial static tracks included, with support for file uploads via click or drag-and-drop. The sidebar allows track selection and drag-and-drop reordering, with full metadata extraction for album art, artist names, and track titles.",
            "**Camera Controls**\nOrbit controls with zoom, pan, and rotation. The zoom slider syncs with mouse wheel input in real-time, and users can disable zoom entirely from the Live Editor. Auto-rotate and audio-reactive camera bounce are fully configurable."
          ]
        },
        "🛠️ Technology Stack": [
          "**Frontend Framework**",
          "- Svelte 5 with Runes-based logic",
          "- SvelteKit for routing and SSR",
          "- TypeScript for type safety",
          "**Audio Engine**",
          "- Tone.js — Web Audio framework",
          "- jsmediatags — ID3 metadata extraction",
          "- Custom dB/LUFS metering",
          "**3D Graphics**",
          "- Threlte — Three.js for Svelte",
          "- Custom GLSL shaders",
          "- OrbitControls for camera manipulation",
          "**UI & Tooling**",
          "- Tweakpane — Real-time parameter editing",
          "- Tailwind CSS for styling",
          "- Vite for build tooling"
        ],
        "🧠 The Real Story — Challenges I Solved": {
          "1. **Race Conditions in Track Switching**": [
            "The biggest challenge was preventing race conditions when users switched tracks rapidly. If you clicked \"next\" three times quickly, the audio engine would try to load multiple tracks simultaneously, causing playback to freeze or skip erratically.",
            "**The solution:** I implemented a concurrency protection system with `stopIntent` states — explicitly tracking whether a stop was caused by pause, seek, track change, or natural end. This allowed `onstop` to know exactly when to advance to the next track and when to just clean up."
          ],
          "2. **Sync Issues Between UI and Audio Engine**": [
            "The progress bar was fighting with auto-play functionality. When you dragged the seek bar while a track was playing, it would trigger `onstop` and accidentally advance to the next track.",
            "**The fix:** I separated the logic entirely. Dragging the bar now sets an `isSeeking` flag that tells the audio engine to ignore natural stop logic. The position is calculated from `playbackOffset + transport.seconds` instead of mixing multiple position variables, ensuring pause/resume works from the exact spot you left it."
          ],
          "3. **Metadata Extraction Hell**": [
            "Extracting album artwork from MP3 files in the browser was surprisingly difficult. Libraries would throw `Buffer is not defined` errors (Node.js globals missing in browsers) or fail silently with `RangeError` when reading file boundaries.",
            "**The journey:**",
            "- First tried `music-metadata-browser` — Buffer errors",
            "- Switched to `id3js` — RangeError on certain files",
            "- Finally settled on `jsmediatags` with proper Vite aliasing to use the pre-bundled, minified version that includes all polyfills",
            "**The result:** Album artwork now loads reliably with a 4-second timeout fallback, and placeholders are embedded as data URIs so they load instantly even offline."
          ],
          "4. **Camera Zoom Sync Hell**": [
            "The zoom control was a nightmare of desynchronization. The OrbitControls zoom and the Live Editor slider were fighting each other — dragging the slider updated the store, but the camera didn't update until something else triggered a rerender.",
            "**The breakthrough:** I added a `$effect` in the Scene component that directly intercepts the camera and calls `updateProjectionMatrix()` every time the store changes. Now the slider and mouse wheel are perfectly synchronized, and users can disable zoom entirely from the panel with `pointer-events: none` on the control."
          ],
          "5. **Performance with Real-Time Shaders**": [
            "Custom GLSL shaders running at 60fps while processing audio data is computationally expensive. The fractal mode in particular was killing performance.",
            "**Optimizations applied:**",
            "- Throttled audio analysis updates",
            "- Selective re-renders only when parameters actually change",
            "- Geometry caching to avoid rebuilding on every frame",
            "- Bloom effects only enabled when actually needed"
          ],
          "6. **Live Editor State Management**": [
            "The Live Editor has dozens of parameters across multiple sections (Geometry, Camera, View, Post-Processing, Interface). Users wanted to save and load presets.",
            "**The solution:** I implemented a JSON export/import system that captures every parameter in the store. Presets save everything — camera position, shader parameters, colors, even which UI panels are collapsed. Users can share presets as JSON files."
          ],
          "7. **Responsive Design for 3D Interfaces**": [
            "Building a 3D tool that works on mobile is uniquely challenging. Touch events for orbit controls, sidebar that slides over the canvas without breaking interaction, and meters that reposition based on screen size.",
            "**The approach:** I built three distinct responsive behaviors:",
            "- **Desktop** — Sidebar slides in from left, meters float top-right, zoom control bottom-left",
            "- **Tablet** — Same layout but larger touch targets",
            "- **Mobile** — Sidebar takes full screen, meters move below sidebar, zoom control above player UI"
          ]
        },
        "📊 What I Learned": {
          "1. **Web Audio is Powerful but Unforgiving**": [
            "Tone.js abstracts away many complexities, but understanding the underlying Web Audio API was essential for debugging. The difference between `player.start()` and `transport.start()` matters when you're dealing with seek positions."
          ],
          "2. **Svelte 5 Runes Are a Game Changer**": [
            "The new runes syntax (`$state`, `$derived`, `$effect`) made reactive state management intuitive. The camera zoom sync issue would have been much harder with Svelte 4's store system."
          ],
          "3. **GLSL Shaders Require Patience**": [
            "Writing custom shaders that react to audio data involves passing uniform values from JavaScript to the shader 60 times per second. Debugging shader compilation errors with no line numbers is... character-building."
          ],
          "4. **Metadata Libraries Are Fragile**": [
            "Every MP3 file is slightly different. ID3v1, ID3v2.2, ID3v2.3, ID3v2.4 — libraries handle them differently. The robust solution was implementing timeouts and fallbacks for every extraction."
          ],
          "5. **3D Camera Math is Hard**": [
            "OrbitControls handles the heavy lifting, but syncing external sliders with camera state requires understanding projection matrices, update cycles, and Three.js's rendering pipeline."
          ]
        },
        "🎨 Gallery": [
          "| View | Description |\n|------|-------------|\n| **Sphere Mode** | Audio-reactive 3D geometry with wireframe rendering |\n| **Waveform Mode** | Real-time 2D audio signal visualization |\n| **Cover Art Mode** | 3D album artwork display (flat or box) |\n| **Grid Mode** | Abstract grid that pulses with the beat |\n| **Live Editor** | Tweakpane panel with real-time parameter control |"
        ],
        "🔧 Technical Deep Dive": {
          "Audio Reactive Logic": [
            "The shader receives audio data as uniform values:",
            "- **Bass frequencies** drive geometry scale and bounce",
            "- **Mid frequencies** affect noise amplitude and wireframe opacity",
            "- **High frequencies** influence bloom strength and rotation speed",
            "Users can freeze audio reaction to inspect specific states, or disable individual reactive elements (bounce, auto-rotate, etc.) from the Live Editor."
          ],
          "Shader Parameters": [
            "All parameters are exposed in real-time:",
            "- `noiseFreq / noiseAmp / noiseSpeed` — Controls the organic movement",
            "- `baseRadius` — Base size of the geometry",
            "- `wireframeOpacity` — Transparency of wireframe lines",
            "- `bloomStrength / bloomRadius / bloomThreshold` — Post-processing glow"
          ],
          "Performance Metrics": [
            "The system displays real-time dB and LUFS metering, giving users professional audio feedback. Meters can be toggled on/off from the interface settings."
          ]
        },
        "🚀 The Road Ahead": [
          "I'm continuing to improve the visualizer with:",
          "- **Multi-band visualization** — Separate shader instances reacting to different frequency ranges",
          "- **Audio-reactive camera** — FOV zoom with the kick drum",
          "- **Video export** — Record and download visualizations as WebM/MP4",
          "- **PBR materials** — Audio-driven roughness and emissive pulses",
          "- **LFO sequencers** — Automate parameters over time",
          "- **External API integration** — Spotify and SoundCloud support"
        ],
        "💡 Final Thoughts": [
          "This project pushed me into new territory — Web Audio, 3D graphics, shader programming, and complex state management across real-time systems. The result is a tool that's both functional and beautiful, and a codebase I'm proud to show as evidence of my ability to build sophisticated interactive applications.",
          "The journey taught me that the best projects are the ones that scare you a little at the start."
        ]
      }
    }
  },
  {
    "id": 2,
    "repoId": "Inventory Management System for Dropshipping Store",
    "date": "2026-04-08T18:25:51.797Z",
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
      "title": "Inventory Management System for Dropshipping Store",
      "fileName": "Inventory Management System for Dropshipping Store.md",
      "date": "2026-04-08T18:25:51.797Z",
      "sections": {
        "Why I built this": [
          "I wanted to understand how dropshipping platforms work under the hood. Instead of using Shopify or a pre-built solution, I decided to build my own dashboard that connects to **Printful API** — handling products, variants, categories, and exports.",
          "- This project is part of my journey to master:",
          "  - Angular standalone components",
          "  - Hexagonal architecture (ports & adapters)",
          "  - Real-world API integration (rate limits, CORS, caching)",
          "  - CSV import/export at scale"
        ],
        "The challenges I faced": [
          "- **1. Printful API rate limits (429 errors)**",
          "  - *\"You've recently sent too many requests. Please try again after 37 seconds.\"*",
          "  - I implemented a **caching layer** that stores products locally, reducing API calls by ~80%. No localStorage — just in-memory cache with TTL.",
          "- **2. Variant hell — colors + sizes**",
          "  - Products with multiple variants showed too many sizes. I had to separate variants by color first, then size. Built a custom selector similar to ecommerce stores.",
          "- **3. CSV import/export with type safety**",
          "  - Used `PapaParse` + `xlsx` but ran into type definition issues. Solved by creating custom TypeScript declarations and using `any` with object cloning for the rating column.",
          "- **4. CORS & proxy configuration**",
          "  - Angular + Express + Printful = CORS nightmare. Fixed with proxy config in Express and `tap` operators in RxJS.",
          "- **5. Node version hell**",
          "  - Unsupported engine errors with PrimeNG icons. Solved using `nvm` to pin Node 20.11.1.",
          "- **6. Angular standalone animations**",
          "  - Async animations don't work well with standalone components. Had to provide them synchronously in `appConfig`.",
          "- **7. Product editing without mutations**",
          "  - Used spread operator `...product` to avoid cloning issues and keep change detection predictable."
        ],
        "Tech Stack": [
          "| Technology | Why I chose it |\n|------------|----------------|\n| **Angular 21** | Standalone components, signals (soon), mature HTTP client |\n| **PrimeNG** | Enterprise-ready tables, theming, less boilerplate |\n| **SASS** | Custom theming with PrimeNG variables (Lara theme) |\n| **RxJS** | Caching, retry logic, handling 429 errors |\n| **Express** | Simple proxy + Printful SDK wrapper |\n| **PapaParse** | CSV parsing with streaming support |\n| **Angular CDK** | Drag & drop for future features |"
        ],
        "What I built": {
          "✅ Completed": [
            "- [x] **Product dashboard** with DataView & Table (PrimeNG)",
            "- [x] **Category filtering** with real-time updates",
            "- [x] **Inline product editing** (no forms — direct table editing)",
            "- [x] **CSV Export/Import** (PapaParse + xlsx)",
            "- [x] **Dark/Light mode** with PrimeNG SASS variables",
            "- [x] **Related products carousel** (excludes current product)",
            "- [x] **Local mock system** (fallback when API fails)",
            "- [x] **Express backend** with Printful SDK wrapper",
            "- [x] **HTTP error handling** (429, CORS, offline detection)"
          ],
          "🔄 Still cooking": [
            "- [ ] **Stripe integration** (Printful + Stripe webhooks)",
            "- [ ] **Customer storefront** (separate Angular app)",
            "- [ ] **Signals migration** (moving away from RxJS)",
            "- [ ] **Bulk product import** (JSON/CSV to DB)",
            "- [ ] **Order management** + supplier integration",
            "- [ ] **Analytics dashboard** with charts"
          ]
        },
        "Concepts I mastered": [
          "- **Hexagonal architecture** (ports & adapters)",
          "- **RxJS operators** (`tap`, `catchError`, `retryWhen`)",
          "- **Functional interceptors** vs class-based",
          "- **Angular lifecycle** (`ngOnChanges` vs `SimpleChanges`)",
          "- **Unary operator** (`+productId`) for type coercion",
          "- **Spread operator** for immutable state",
          "- **ViewChild** + template references",
          "- **Router params** (`snapshot` vs `paramsMap`)"
        ],
        "What's next (my roadmap)": [
          "- **Signals** — replace RxJS where it makes sense",
          "- **Stripe webhooks** — real payment flow",
          "- **Customer store** — second Angular app for public facing store",
          "- **Multi-tenant** — support multiple Printful stores from one dashboard",
          "- **Deploy** — Vercel (frontend) + Railway (backend)"
        ],
        "💡 Lessons learned": [
          "- **Never trust API rate limits** — always implement caching",
          "- **CORS is always harder than you think**",
          "- **Standalone components are great, but animations need sync providers**",
          "- **CSV parsing in TypeScript requires type declaration hacks**",
          "- **Node version matters** — use `.nvmrc`"
        ]
      }
    }
  },
  {
    "id": 3,
    "repoId": "Jekyll Blog  Obsidian — Building a Personal Knowledge Management System",
    "date": "2026-04-08T21:12:43.575Z",
    "title": "Jekyll Blog + Obsidian — Personal Knowledge Management System",
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
      "title": "Jekyll Blog + Obsidian — Personal Knowledge Management System",
      "fileName": "Jekyll Blog  Obsidian — Building a Personal Knowledge Management System.md",
      "date": "2026-04-08T21:12:43.575Z",
      "sections": {
        "🎯 The Big Picture": [
          "I wanted a blog that worked the way I think — connected, non-linear, and deeply integrated with my note-taking system. Instead of forcing myself into a traditional CMS, I built a bridge between **Obsidian** (where I write) and **Jekyll** (where I publish).",
          "The result is a complete publishing ecosystem featuring:",
          "- **Jekyll static site** hosted on GitHub Pages",
          "- **Obsidian plugin** for automated note transformation and syncing",
          "- **Visual backlink graph** for navigating connected ideas",
          "- **Wiki-style navigation** with page previews and context menus",
          "- **Fast frontend** with Turbo and vanilla JavaScript",
          "- **Automated content pipeline** with Python helper tools"
        ],
        "✨ What I Built": {
          "The Blog (Jekyll Frontend)": [
            "**Powered by Jekyll** — Static site generation for performance and simplicity. No databases, no complex hosting, just markdown files that become HTML.",
            "**Wiki-Style Navigation** — Backlinks show me which other posts reference the current one. Page previews let me peek at content before clicking. The entire navigation feels like browsing a personal wiki, not a traditional blog.",
            "**Visual Backlink Graph** — Built with vis.js, this interactive graph shows how my posts connect to each other. Nodes represent posts, edges represent links between them. I can hover to highlight connections and click to navigate.",
            "**Turbo & Vanilla JS** — Fast, responsive UX without heavy frameworks. Turbo handles page transitions, and vanilla JavaScript manages the interactive features (search, filtering, graph rendering).",
            "**Custom SASS Styling** — A minimalist, responsive UI inspired by Obsidian's aesthetic. Dark mode by default, clean typography with monospace fonts, and a sidebar that collapses elegantly on mobile.",
            "**Search & Filtering** — Real-time search across all posts with Fuse.js. Filter by tags or categories. The filtering system maintains state across page loads using URL parameters."
          ],
          "The Obsidian Plugin (Content Pipeline)": [
            "**Selective Sync** — Only exports notes marked with `public_note: true` in their frontmatter. This lets me keep private notes separate from blog content.",
            "**Frontmatter Processing** — Automatically generates titles, normalizes dates (`creation date` → `date`), and manages categories and tags intelligently.",
            "**WikiLink Transformation** — Converts Obsidian's `[[WikiLinks]]` into standard markdown links with proper relative paths. Links to unpublished notes are gracefully removed.",
            "**URL-Friendly Slugs** — Renames files to `YYYY-MM-DD-post-title.md` format, ensuring clean URLs like `/category/post-title/`.",
            "**Graph Generator** — Creates a `public-notes-graph.json` file containing nodes and connections between public notes. This powers the visual backlink graph on the blog."
          ],
          "The Automation Tools (Python Helpers)": [
            "**AI Content Assistant** — A Python-based tool with a web interface that helps me process AI-generated content. Features include:",
            "- Loading notes that need processing",
            "- Copying content with one click",
            "- Tracking processed vs pending notes",
            "- Editing processed content before publishing",
            "- Managing prompts and configurations",
            "**Metadata Extraction** — Handles edge cases like removing Dataview queries, cleaning up Templater syntax, and sanitizing frontmatter for Jekyll compatibility."
          ]
        },
        "🛠️ Technology Stack": [
          "**Frontend (Blog)**",
          "- Jekyll (Static Site Generator)",
          "- Ruby + Liquid templating",
          "- Turbo (Hotwire)",
          "- Vanilla JavaScript",
          "- vis.js (Backlink graph)",
          "- Fuse.js (Search)",
          "- SASS/CSS3",
          "**Backend (Content Pipeline)**",
          "- Obsidian Plugin (TypeScript)",
          "- Node.js for plugin build",
          "- Python (AI assistant tool)",
          "- Flask for web interface",
          "- GitHub Pages for hosting",
          "**Infrastructure**",
          "- GitHub Actions (CI/CD)",
          "- GitHub Pages (Free hosting)",
          "- Git for version control"
        ],
        "🧠 The Real Story — Challenges I Solved": {
          "1. **Bridging Obsidian and Jekyll**": [
            "Obsidian uses `[[WikiLinks]]` and flexible frontmatter. Jekyll expects standard markdown links and specific YAML structure.",
            "**The solution:** I built an Obsidian plugin that:",
            "- Reads notes from configured source folders",
            "- Filters by `public_note: true` flag",
            "- Transforms WikiLinks to `[text](/category/slug/)` format",
            "- Normalizes dates, categories, and tags",
            "- Generates URL-friendly slugs from filenames",
            "- Exports everything to a `public_notes` folder",
            "The plugin preserves original notes while creating web-ready copies."
          ],
          "2. **Managing Backlinks in a Static Site**": [
            "Traditional blogs don't have backlinks — they're a wiki feature. But backlinks are essential for knowledge management.",
            "**The implementation:** During the sync process, the plugin analyzes all WikiLinks between public notes and generates a `public-notes-graph.json` file. When the blog builds, it loads this JSON and renders an interactive graph using vis.js. Each node shows its title and links to the actual post.",
            "The graph supports:",
            "- Hover highlighting of connected nodes",
            "- Color-coded links (incoming vs outgoing)",
            "- Click navigation to posts",
            "- Zoom and pan for large graphs"
          ],
          "3. **Handling Edge Cases in Content Transformation**": [
            "Not all Obsidian notes are blog-ready. Some contain:",
            "- Dataview queries (`$= dv.current().file.tags...`)",
            "- Templater syntax",
            "- Embedded Zotero links",
            "- Local file links (`file://...`)",
            "- Obsidian-specific CSS classes",
            "**The cleanup process:** The plugin includes configurable rules to:",
            "- Remove specific strings from content (like `$= dv.current().file.tags...`)",
            "- Exclude entire lines containing certain patterns (Zotero links, file URIs)",
            "- Strip Dataview code blocks",
            "- Remove Obsidian-specific frontmatter properties",
            "- Sanitize special characters for URLs (á, ñ, spaces, slashes)"
          ],
          "4. **Instant Navigation Without Frameworks**": [
            "I wanted fast page transitions but didn't want to add React or Vue complexity to a static site.",
            "**The approach:** I integrated InstantClick (later migrated to Turbo), which preloads pages on hover and swaps them seamlessly on click. This gives me SPA-like speed with zero framework overhead.",
            "The challenge was making sure JavaScript re-initialized correctly on page transitions — search filters, graph rendering, and TOC highlighting all needed to work after Turbo loads new content."
          ],
          "5. **The AI Content Assistant**": [
            "I often generate blog post drafts with AI. Managing these drafts — copying content, tracking what's been processed, editing before publishing — was tedious.",
            "**The solution:** I built a Python web application that:",
            "- Scans my Obsidian vault for notes flagged for processing",
            "- Displays them in a clean interface with previews",
            "- Lets me copy AI-generated responses with one click",
            "- Tracks which notes have been processed (status.json)",
            "- Shows processed notes with edit capabilities",
            "- Detects when source notes change and flags them for reprocessing",
            "- Includes configuration for prompts and folders",
            "The interface uses Alpine.js for reactivity without heavy frontend frameworks."
          ],
          "6. **Category Inference and URL Structure**": [
            "Jekyll expects categories to determine URL structure. My Obsidian notes don't always have categories defined.",
            "**The logic:** The plugin can:",
            "- Use explicit `category` from frontmatter",
            "- Infer category from the first WikiLink in the note",
            "- Default to \"uncategorized\" if none found",
            "- Handle multiple categories as arrays",
            "URLs follow the pattern `/:category/:slug/`, which Jekyll handles cleanly with permalink configuration."
          ],
          "7. **Responsive Wiki Navigation**": [
            "The sidebar contains collapsible sections for recent posts, categories, and tags. On desktop, it's a fixed column. On mobile, it becomes an off-canvas menu.",
            "**The implementation:** Pure CSS with media queries and JavaScript for toggle behavior. The scroll position is preserved when navigating between posts — no jarring jumps to the top of the page.",
            "The Table of Contents (TOC) tracks the active heading as you scroll, highlighting it in the sidebar. On mobile, the TOC collapses into a dropdown button."
          ]
        },
        "📊 What I Learned": {
          "1. **Static Sites Can Be Dynamic**": [
            "Jekyll with Turbo and client-side JavaScript gives you the best of both worlds — fast initial loads, SEO-friendly HTML, and smooth navigation without rebuilding the entire framework."
          ],
          "2. **Obsidian as a CMS is Powerful**": [
            "Writing in Obsidian feels natural. Adding `public_note: true` to a note makes it a blog post. No separate CMS login, no formatting restrictions, just writing."
          ],
          "3. **Content Pipelines Need Edge Case Handling**": [
            "Every note is different. Some have Dataview queries, some have weird characters, some have broken links. Robust content transformation requires configurable rules and graceful fallbacks."
          ],
          "4. **Graph Visualization Adds Value**": [
            "The backlink graph isn't just a gimmick — it helps readers discover related content they wouldn't find through tags or categories. It turns the blog from a linear feed into a network of ideas."
          ],
          "5. **Tooling Around AI Content is Underrated**": [
            "Generating content with AI is easy. Managing that content — tracking drafts, editing, versioning — is the hard part. Building custom tooling for this workflow saves hours of manual work."
          ]
        },
        "🔧 Technical Deep Dive": {
          "Obsidian Plugin Architecture": [
            "The plugin has three main components:",
            "**Content Processor** — Reads markdown files, parses frontmatter, transforms WikiLinks, applies cleanup rules, and generates new frontmatter for Jekyll.",
            "**Sync Manager** — Handles folder selection, file filtering, and export destination management. It only processes files that have changed since last sync.",
            "**Graph Generator** — Analyzes WikiLinks between public notes, builds a graph data structure (nodes + edges), and exports as JSON for the blog."
          ],
          "Jekyll Frontend Architecture": [
            "**Liquid Templates** — Modular components for posts, archive pages, categories, tags, and the graph view.",
            "**JavaScript Modules** — Search (Fuse.js), filtering, TOC highlighting, graph rendering (vis.js), and mobile sidebar toggles.",
            "**SASS Architecture** — Variables for theming, mixins for responsive breakpoints, and component-specific styles that don't leak."
          ],
          "Python AI Assistant": [
            "**Flask Web Server** — Serves the interface and API endpoints for content management.",
            "**File Watcher** — Detects changes in source notes and flags them for reprocessing.",
            "**Status Tracking** — JSON-based state management for processed vs pending notes, with backup functionality for rollbacks."
          ]
        },
        "🚀 The Road Ahead": [
          "I'm continuing to improve the ecosystem with:",
          "- **Complete plugin packaging** — Publishing the Obsidian plugin to the community store",
          "- **Jekyll theme as a gem** — Making the theme installable via `gem install`",
          "- **GitHub Action for automation** — Auto-sync on Obsidian vault changes",
          "- **Full-text search** — Better search with page previews and relevance ranking",
          "- **More graph features** — Timeline view, force-directed layouts, search within graph",
          "- **Webmentions** — Receiving and displaying interactions from other sites",
          "- **Newsletter integration** — Email subscriptions for new posts"
        ],
        "💡 Final Thoughts": [
          "This project taught me that the best publishing system is the one that disappears into your workflow. I don't think about \"blogging\" anymore — I just write notes in Obsidian, mark them as public, and they appear on my site.",
          "The integration between Obsidian, Jekyll, and my AI assistant tools creates a seamless pipeline from idea to published post. And the backlink graph transforms the blog from a collection of articles into a genuine knowledge network.",
          "This is my digital garden — constantly growing, automatically maintained, and a reflection of how I actually think and work."
        ]
      }
    }
  },
  {
    "id": 4,
    "repoId": "Merakikrea Ceramica – Landing Page",
    "date": "2026-04-08T18:26:21.442Z",
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
      "date": "2026-04-08T18:26:21.442Z",
      "sections": {
        "📌 About the project": [
          "This project was born from the need to centralize all the information of a local business in one place: location, customer reviews, visual catalog from Instagram, and direct contact channels. The design focuses on conveying warmth and trust, with a smooth user experience across both mobile and desktop devices."
        ],
        "✨ Key features": [
          "- **Fully responsive design** that adapts seamlessly to any screen size",
          "- **Light/Dark mode** implemented with Tailwind CSS and CSS variables",
          "- **SEO optimized** using semantic HTML tags and a search-engine-friendly structure",
          "- **Core sections**:",
          "  - About the business and its workshops",
          "  - Location with integrated Google Maps",
          "  - Dynamic Instagram feed",
          "  - Real Google reviews",
          "  - Direct contact buttons (WhatsApp, email, social media)",
          "- **Floating WhatsApp button** always visible for quick inquiries",
          "- **Header and footer** with clear, accessible navigation"
        ],
        "🛠️ Tech stack": [
          "| Technology         | Purpose                                        |\n| ------------------ | ---------------------------------------------- |\n| Next.js            | React framework with SSR and optimized routing |\n| TypeScript         | Static typing for more robust code             |\n| Tailwind CSS       | Styling and dark mode implementation           |\n| ShadCN UI          | Accessible, customizable UI components         |\n| Framer Motion      | Smooth animations to enhance user experience   |\n| Google Maps API    | Physical store location display                |\n| Instagram Feed API | Dynamic display of recent posts                |\n| Vercel             | Continuous deployment and hosting              |"
        ],
        "🚀 Why this stack?": [
          "I chose Next.js to leverage hybrid rendering and built-in performance. Tailwind combined with ShadCN allowed me to build a clean, accessible interface without sacrificing flexibility. Integrating external APIs (Google Maps, Instagram, reviews) was key to making the site act as a real bridge between the business and its customers."
        ],
        "📸 Preview": [],
        "📎 Links": [
          "- 🌐 [Live demo](https://your-domain.com)",
          "- 📂 [GitHub repository](https://github.com/yourusername/merakikrea)",
          "*This project reflects my focus on frontend development for local businesses, prioritizing performance, accessibility, and real-world service integrations.*"
        ]
      }
    }
  },
  {
    "id": 5,
    "repoId": "Ping Test Tool - Real-Time Network Monitor",
    "date": "2026-04-08T18:26:25.915Z",
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
      "date": "2026-04-08T18:26:25.915Z",
      "sections": {
        "✨ Features": [
          "- **Real-Time Monitoring** – Continuous updates on key network stats",
          "- **Latency, Jitter, Packet Loss** – Displayed via animated charts and color indicators",
          "- **Retro-Inspired UI** – A throwback to vintage gaming consoles",
          "- **Zustand State Management** – For clean and fast app state updates",
          "- **Web Workers** – Keep performance smooth while running tests in the background",
          "- **Responsive Design** – Works great on mobile and desktop",
          "- **Privacy Respecting** – No personal data is stored, only uses local storage for preferences"
        ],
        "🚀 How to Use": [
          "1️⃣ **Start Test** – Click the button to begin monitoring",
          "2️⃣ **Watch Metrics** – Observe live updates in the dashboard",
          "3️⃣ **Toggle Views** – Switch between metric displays (ping, jitter, loss)"
        ],
        "❓ FAQ": [
          "- **Q: How accurate are the measurements?**",
          "  - A: The metrics are based on real-time network requests and give a good representation of your connection quality.",
          "- **Q: Does it work offline?**",
          "  - A: No, the app requires an active internet connection.",
          "- **Q: Can I export the data?**",
          "  - A: Not yet, but this is a planned feature for future versions."
        ],
        "🛠️ Built With": [
          "- ⚛️ **React + Next.js** – The backbone of the web app",
          "- 🅾️ **TypeScript** – Type-safe development",
          "- 🎨 **Tailwind CSS** – Rapid and responsive UI",
          "- ⚙️ **Zustand** – Lightweight and scalable state management",
          "- 💪 **Web Workers** – Efficient background processing",
          "- 📈 **Custom Metrics Charts** – Visualizations with color indicators"
        ],
        "🔐 Privacy & **Cookies**": [
          "- ✅ No personal data is stored or transmitted",
          "- ✅ Only uses local storage for your UI preferences",
          "- ✅ No third-party analytics or tracking cookies"
        ],
        "⚠️ Limitations of the Network Measurement System": {
          "1. Ping Measurement": [
            "- The system measures network latency using `HEAD` requests to various remote endpoints. These requests may not provide an accurate measurement of actual latency as results can be influenced by external factors like server load, user network, and internet propagation delays.",
            "- The selected endpoints for ping measurement include popular services like Google, Cloudflare, Microsoft, Amazon, and Apple. If any of these services experience issues or downtime, the ping measurement may not be accurate or could fail."
          ],
          "2. Jitter": [
            "- Jitter is calculated based on the time difference between consecutive ping measurements. If there is a large variation in response times between pings, this may affect the results.",
            "- Jitter can be influenced by changes in the network, traffic fluctuations, and other variability outside the system's control."
          ],
          "3. Packet Loss": [
            "- If a ping request fails (e.g., due to a network issue or server unavailability), it is counted as packet loss.",
            "- The system does not directly measure packet loss but estimates it based on the successful and failed pings."
          ],
          "4. Limited to Remote Endpoints": [
            "- Measurements are only performed towards selected remote servers, meaning they do not reflect latency or network quality between local devices or within a local network.",
            "- Measurement accuracy could improve if local endpoints or specific servers were added depending on the use case."
          ],
          "5. **Network Interruptions and Configuration**": [
            "- The measurement results can be affected by local network congestion or temporary internet connection issues. Ping, jitter, and packet loss metrics may vary significantly depending on network stability.",
            "- The system does not provide detailed information about specific network issues (e.g., local bottlenecks or intermittent routing problems)."
          ],
          "6. **Use of `no-cors` in Requests**": [
            "- Measurement requests use the `no-cors` mode to avoid CORS-related issues, which limits the type of responses that can be received. This means that detailed server response metrics, such as header response time, are not available and only the round-trip time for the request is measured."
          ],
          "7. **Measurement Intervals**": [
            "- The system performs measurements at 2-second intervals. If there is a network interruption or the server does not respond within this interval, an error or an increase in packet loss might be recorded."
          ]
        }
      }
    }
  },
  {
    "id": 6,
    "repoId": "Portfolio project",
    "date": "2026-04-10T12:16:14.362Z",
    "title": "How I Built a Self-Updating Portfolio with Next.js + Obsidian",
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
      "title": "How I Built a Self-Updating Portfolio with Next.js + Obsidian",
      "fileName": "Portfolio project.md",
      "date": "2026-04-10T12:16:14.362Z",
      "sections": {
        "🎯 The Big Picture": [
          "I wanted a portfolio that:",
          "- **Grows with me** — add a project in Obsidian, it appears on my site",
          "- **Shows my process** — not just final results, but the journey",
          "- **Stays technical** — actual problems, actual solutions",
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
            "- Reads every markdown file from my Obsidian folder",
            "- Parses the structure to identify sections and their content",
            "- Converts everything into a TypeScript object that my portfolio understands",
            "- Outputs a clean data file ready to import"
          ],
          "How It Works": [
            "The script uses a markdown parser to analyze the structure of each note. It identifies headings, paragraphs, lists, and code blocks, then organizes them by section. This means I can write naturally in Obsidian — using whatever formatting makes sense for documentation — and the converter intelligently extracts the meaningful parts.",
            "If I add a new section to a project note, it automatically appears in the portfolio. If I edit existing content, the portfolio reflects the changes on the next build."
          ],
          "The Automation Layer": [
            "To make this workflow seamless, I created a PowerShell script that acts as a control panel. From a simple menu, I can:",
            "- View all my existing project notes",
            "- Create a new project template with the correct structure",
            "- Run the conversion script to generate fresh data",
            "- Commit the updated data to my portfolio repository",
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
            "- Star count (if people have starred the repo)",
            "- Last commit date",
            "- Primary programming language",
            "- Direct links to repositories and live demos",
            "This adds a layer of authenticity — visitors can see that these are active, real-world projects with actual community engagement."
          ],
          "Animations and Polish": [
            "I added smooth scroll animations using a custom hook that snaps to sections as you browse. The theme system supports both **Dracula** and **Catppuccin** palettes with 14+ customizable accent colors. The site is fully responsive, works on any device, and includes dark/light mode with system preference detection."
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
        "The Tech Stack": [
          "| Component | Technology |\n|-----------|------------|\n| **Content Authoring** | Obsidian (markdown) |\n| **Conversion Script** | Node.js + TypeScript |\n| **Markdown Parsing** | Remark ecosystem |\n| **Workflow Automation** | PowerShell |\n| **Portfolio Framework** | Next.js 14 |\n| **Styling** | Tailwind CSS with CSS variables |\n| **Theming** | Dracula & Catppuccin + custom accent colors |\n| **Scroll Navigation** | Custom snap scroll hook |\n| **API Integration** | GitHub REST API |\n| **Hosting** | Vercel |"
        ],
        "What I Learned": [
          "**Automation compounds.** The time I invested in building this workflow paid back many times over in saved manual effort. More importantly, it removed friction — I'm more likely to document projects now because the cost is so low.",
          "**Your source of truth matters.** Keeping all my project documentation in Obsidian means I have a single place to look for notes, ideas, and technical details. The portfolio is just a view into that database.",
          "**Static sites can be dynamic.** By generating pages at build time from a data source, I get the performance of static sites with the flexibility of a content management system — without actually running a CMS.",
          "**Personal tools are worth building.** This system doesn't exist as a product. It's custom-built for my workflow, my folder structure, my way of writing. And that's exactly why it works so well.",
          "**Theme systems are personal.** Providing users with choice — multiple palettes and accent colors — makes a portfolio feel more approachable while maintaining consistency. CSS variables + ThemeContext makes switching themes seamless."
        ],
        "📂 Repositories": [
          "- **readme-to-obj** — The Node.js converter that processes markdown files",
          "- **nextjs-portfolio** — The frontend that displays my work",
          "- **Live Portfolio** — See it in action"
        ],
        "Future Improvements": [
          "I'm planning to add:",
          "- **Auto-sync** — watch for Obsidian file changes and trigger updates automatically",
          "- **Full-text search** — help visitors find projects by technology or topic",
          "- **Tags and categories** — organize projects beyond just listing them",
          "- **Image handling** — automatically convert and optimize images from Obsidian",
          "- **More theme variants** — additional Catppuccin flavors and custom accent palettes"
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
    "id": 7,
    "repoId": "Todo app - kanban board",
    "date": "2026-04-08T21:12:41.464Z",
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
      "fileName": "Todo app - kanban board.md",
      "date": "2026-04-08T21:12:41.464Z",
      "sections": {
        "🎯 The Big Picture": [
          "I set out to build more than just a todo list. I wanted to create a **production-ready task management system** that could handle real-world complexity — multiple projects, subtasks, drag-and-drop, bulk operations, and a sophisticated recycling system.",
          "What started as a simple React app evolved into a comprehensive tool with:",
          "- **Two complete views**: Kanban board and spreadsheet-style table",
          "- **Project management**: Organize tasks across different projects",
          "- **Advanced task hierarchy**: Tasks with subtasks, deep nesting",
          "- **Complete lifecycle management**: Archive, restore, permanent delete",
          "- **Bulk operations**: Select, modify, or delete multiple tasks at once",
          "- **Rich date management**: Due dates, reminders with intelligent time selection"
        ],
        "✨ What I Built": {
          "Core Features": [
            "**Task Management**\nCreate, edit, delete, and mark tasks as complete. Each task has status, priority, color coding, due dates, and reminders.",
            "**Project Organization**\nGroup tasks by projects. Create new projects, edit their details, and filter views by project.",
            "**Subtask System**\nTasks can contain subtasks, creating hierarchical structures. Subtasks inherit project context and can be managed independently or with their parent.",
            "**Two Powerful Views**",
            "*Kanban Board* — Drag and drop tasks between status columns (Pending, In Progress, Completed, Blocked, Archived). Customize which columns appear, collapse them, and reorder tasks within columns.",
            "*Table View* — A spreadsheet-style interface with sortable columns, column resizing, bulk selection, and advanced filtering. Perfect for power users who want to see everything at once.",
            "**Recycle Bin**\nDeleted tasks go to a recycle bin first. Restore them later or permanently delete. Tasks with subtasks show warnings before deletion and offer options to preserve subtasks.",
            "**Bulk Operations**\nSelect multiple tasks and perform actions in batch — change status, update priority, assign to projects, or delete. Smart dialogs handle edge cases like moving subtasks between projects.",
            "**Smart Date Picker**\nDue dates and reminders with intelligent time selection. The picker validates that selected times are valid for the chosen day and adapts between tooltips (desktop) and drawers (mobile).",
            "**Rich Text Input**\nA sophisticated input component that parses markdown. Create multiple tasks at once with syntax like:"
          ]
        },
        "🛠️ Technology Stack": [
          "**Frontend**",
          "- React with TypeScript for type safety",
          "- Tailwind CSS for styling with custom theming",
          "- ShadCN/UI for accessible component primitives",
          "- date-fns for robust date handling",
          "- DnD Kit for drag-and-drop functionality",
          "- Zustand for state management",
          "**Backend** (Separate repository)",
          "- Node.js with Express",
          "- PostgreSQL database",
          "- Docker for consistent development and deployment",
          "**Testing & Quality**",
          "- End-to-end testing with Playwright",
          "- Comprehensive unit tests",
          "- ESLint and Prettier for code quality"
        ],
        "🧠 The Real Story — Challenges I Solved": {
          "1. **Managing Complex State with Subtasks**": [
            "The biggest challenge was handling the parent-child relationship between tasks and subtasks. When you:",
            "- Delete a parent task — do subtasks get deleted too?",
            "- Move a parent to another project — do subtasks follow?",
            "- Bulk select a mix of parents and children — how do operations behave?",
            "I built a system that respects hierarchy while giving users control. Dialogs ask the right questions:",
            "- \"Delete parent only and convert subtasks to main tasks?\"",
            "- \"Move parent and all subtasks to new project?\"",
            "- \"Delete selected subtasks while preserving their parent?\""
          ],
          "2. **Drag-and-Drop at Scale**": [
            "The kanban board needed to handle hundreds of tasks across multiple columns without performance issues. I implemented:",
            "- Optimized re-rendering with proper memoization",
            "- Smooth animations that don't interfere with drag operations",
            "- Visual feedback with drop indicators and preview elements",
            "- Support for both desktop drag-and-drop and touch devices",
            "The biggest win? Making drag-and-drop work seamlessly while the board is sorted (not in manual mode) or when columns are collapsed."
          ],
          "3. **Bulk Operations Without Breaking the UI**": [
            "Selecting 50+ tasks and changing their status should feel instant. I built:",
            "- Background processing with loading states",
            "- Toast notifications showing progress",
            "- Smart selection logic that respects filters and grouping",
            "- Optimistic updates that revert on failure",
            "The tricky part was handling edge cases — what happens when you bulk delete a mix of parents and children? The solution involved analyzing selections and presenting clear options before executing."
          ],
          "4. **Column Management in Table View**": [
            "The table view needed to be as powerful as a spreadsheet:",
            "- Resizable columns with visual indicators during resize",
            "- Sortable columns (ascending/descending) that work across all data types",
            "- Fixed headers that scroll with the table",
            "- Horizontal scroll for when columns exceed viewport width",
            "- Responsive behavior that adapts to mobile",
            "The responsive version collapses into cards while maintaining all functionality — a significant UI/UX challenge that required rethinking the component structure."
          ],
          "5. **The Recycle Bin System**": [
            "Deleting tasks shouldn't be permanent. I built a complete recycling system:",
            "- Soft delete moves tasks to trash instead of removing from database",
            "- Restore operations preserve hierarchy (restore parent, get all subtasks back)",
            "- Permanent delete with warnings for tasks that have subtasks",
            "- Search and filter within trash",
            "- Batch restore and delete operations",
            "This required careful database design with deleted_at timestamps and ensuring cascade operations respected the soft delete pattern."
          ],
          "6. **Mobile-First Responsive Design**": [
            "The app needed to work beautifully on phones, tablets, and desktops. I implemented:",
            "- Tooltips on desktop, drawers on mobile for date pickers",
            "- Collapsed views that show only essential information on small screens",
            "- Touch-friendly drag-and-drop with larger hit areas",
            "- Bottom sheets for bulk actions instead of dropdowns",
            "- Responsive tables that convert to card layouts on mobile",
            "The result is an app that feels native on any device."
          ],
          "7. **Real-Time Search Across Hierarchies**": [
            "Search needed to find tasks AND subtasks, then show them in context. When you search for a subtask:",
            "- The parent task expands automatically",
            "- Matching subtasks are highlighted",
            "- Search results show counts and clear indicators",
            "This required coordinating state across components and ensuring the UI updates without losing scroll position or user context."
          ],
          "8. **Performance at Scale**": [
            "With hundreds of tasks and subtasks, performance became critical. I optimized:",
            "- Virtual scrolling for large lists",
            "- Memoized components to prevent unnecessary re-renders",
            "- Debounced search inputs",
            "- Optimistic updates for instant UI feedback",
            "- Batch database operations for bulk actions",
            "The app now handles 1000+ tasks without noticeable lag."
          ]
        },
        "📊 What I Learned": {
          "1. **State Management Complexity**": [
            "Zustand proved perfect for this project — lightweight but powerful enough to handle complex state with selectors and middleware. The key was structuring state to minimize re-renders while keeping logic maintainable."
          ],
          "2. **The Importance of Database Design**": [
            "The initial schema was simple. As features grew, I needed proper indexing for search, soft delete flags, hierarchy management with parent_id, and efficient queries for counts and filters. PostgreSQL's JSON capabilities helped with flexible metadata storage."
          ],
          "3. **User Experience Matters**": [
            "Every edge case needs consideration. What happens when you drag a task to a collapsed column? What if you try to move a subtask to a different project? The difference between a frustrating app and a delightful one is handling these scenarios gracefully."
          ],
          "4. **Testing Saves Time**": [
            "Writing comprehensive tests early caught bugs that would have been nightmares to debug later. End-to-end tests with Playwright ensured critical flows (drag-and-drop, bulk operations) never regressed."
          ],
          "5. **Technical Debt Is Real**": [
            "As features grew, refactoring became essential. I went through multiple iterations of the kanban state management, the table component, and the bulk action system. Each refactor made the code cleaner and more maintainable."
          ]
        },
        "📈 The Road Ahead": [
          "I'm continuing to improve the app with:",
          "- **Authentication** — User accounts with personal data",
          "- **Real-time collaboration** — Multiple users working on the same board",
          "- **Advanced notifications** — Email reminders for due dates",
          "- **Analytics dashboard** — Charts showing productivity trends",
          "- **Pomodoro timer** — Integrated focus sessions",
          "- **AI integration** — Smart task suggestions and natural language task creation",
          "- **Mobile apps** — React Native version for iOS and Android"
        ],
        "💡 Final Thoughts": [
          "This project taught me that simple ideas become complex systems when you care about details. A todo list is trivial. A **task management system that people actually want to use** requires thinking about every interaction, every edge case, and every performance bottleneck.",
          "The result is a tool I use daily — and a codebase I'm proud to show as evidence of my ability to build production-ready applications."
        ]
      }
    }
  },
  {
    "id": 8,
    "repoId": "Utility Tools Collection – Data Migration & Media Conversion",
    "date": "2026-04-08T18:27:02.080Z",
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
      "date": "2026-04-08T18:27:02.080Z",
      "sections": {
        "📦 Project 1: Omnivore → Raindrop.io Migration Tool": {
          "✨ Key features": [
            "- **Batch processing** – Handles multiple JSON files matching a filename pattern",
            "- **UTF-8 encoding** – Preserves special characters and non-English text",
            "- **Complete metadata migration** – Preserves URLs, titles, tags, notes, and creation dates",
            "- **Error resilience** – Continues processing remaining files if one fails"
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
            "- **One‑command conversion** – Simple CLI interface",
            "- **Customizable output** – Adjustable DPI and JPEG quality",
            "- **Preserves page order** – Pages maintain original sequence",
            "- **Efficient compression** – Optimized for comic reading devices"
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
            "- **Batch processing** – Accepts multiple video URLs at once",
            "- **High‑quality audio** – Downloads best available format and converts to 320kbps MP3",
            "- **Filename sanitization** – Automatically removes invalid characters for cross‑platform compatibility",
            "- **Organized output** – Files saved in a dedicated `output` folder"
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
          "- **Omnivore Converter** – Helped users preserve their reading history before a service shutdown",
          "- **PDF to CBR** – Solved a niche but common pain point for digital comic readers",
          "- **YouTube MP3 Downloader** – Automated a repetitive task with a simple, clean interface",
          "These tools share a common philosophy: **solve a real problem with minimal complexity, clear documentation, and robust error handling.**"
        ],
        "🔧 Common technical themes": [
          "- **Command‑line first** – Designed for automation and scriptability",
          "- **Cross‑platform** – Works on Windows, macOS, and Linux",
          "- **Educational value** – Clear code structure and documentation for learning",
          "- **User‑focused** – Handles edge cases and provides meaningful feedback"
        ],
        "📎 Links": [
          "- 🔄 [Omnivore to Raindrop Converter]((https://github.com/deveduar/omnivore-to-raindrop)",
          "- 📚 [PDF to CBR Converter](https://github.com/deveduar/pdf-to-cbr.git)",
          "- 🎵 [YouTube MP3 Downloader](https://github.com/deveduar/you-mp3-python)"
        ]
      }
    }
  },
  {
    "id": 9,
    "repoId": "Vue Dates — Building a Complete Salon Booking System",
    "date": "2026-04-08T21:10:45.346Z",
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
      "date": "2026-04-08T21:10:45.346Z",
      "sections": {
        "🎯 The Big Picture": [
          "I wanted to build a complete booking solution for service-based businesses — salons, barbershops, consultancies, clinics. Not just a calendar, but a **smart scheduling engine** that handles provider availability, service durations, conflict detection, and real-time booking constraints.",
          "The result is a full-featured application featuring:",
          "- **Interactive booking system** with real-time availability",
          "- **Provider management** with granular service assignment",
          "- **Dual scheduling modes** (Standard daily windows + Fixed slots)",
          "- **Admin dashboard** for complete business control",
          "- **Specialist dashboards** for managing appointments",
          "- **Real-time conflict detection** preventing double bookings",
          "- **In-progress appointment tracking** with live timers"
        ],
        "✨ What I Built": {
          "The Booking System (`/booking`)": [
            "**Interactive Calendar** — Users select dates and see available time slots in real-time. The system automatically filters past times and respects provider-specific schedules.",
            "**Smart Service Selection** — Services are organized by categories, can be marked as public or hidden, and each service has its own duration, pricing, and assigned specialists.",
            "**Provider Selection** — Specialists are assigned to services. Users see expert profiles, status, and real-time availability. The system auto-selects the next available slot for a seamless experience.",
            "**Conflict Detection** — The engine prevents double-booking by checking existing appointments, service durations, and provider schedules before showing available slots."
          ],
          "Admin Dashboard (`/admin`)": [
            "**Service Management** — Complete CRUD for services with pricing, duration, categories, and visibility controls. Services can be duplicated, edited, or soft-deleted.",
            "**Dual Scheduling Engine**",
            "*Standard Mode* — Define daily operating windows (e.g., 9:00 AM - 5:00 PM) with configurable intervals between slots.",
            "*Fixed Slots Mode* — Precise manual control over specific date and time combinations. Perfect for special events or limited availability.",
            "**Provider Overrides** — Custom schedules for any provider on any specific service, overriding business defaults. Granular control per specialist.",
            "**Provider Management** — Full CRUD for specialists with profiles, status tracking, and service assignment. Each provider can have their own schedule and service specialties."
          ],
          "User & Specialist Dashboards": [
            "**User Dashboard** — View upcoming appointments, active bookings, appointment history, and rebook past services. Real-time countdown timers for active appointments.",
            "**Specialist Dashboard** — Manage pending requests, upcoming appointments, accept/reject bookings, mark appointments as completed, and view assigned services."
          ],
          "Intelligent Features": [
            "**Real-Time Timer System** — Live countdown timers for appointments (HH:MM:SS format) with visual progress bars. Shows \"Comienza en X\", \"En curso\", or \"Completado\" states.",
            "**Automatic Status Management** — Appointments automatically transition from Pending → Upcoming → InProgress → Completed as time passes. The system runs periodic checks every 60 seconds.",
            "**Collision Detection** — Prevents double-booking by checking:",
            "- Existing appointments for the same provider at the same time",
            "- Service duration impact on availability",
            "- Provider-specific schedule constraints",
            "- Fixed slot reservations",
            "**Waitlist Foundation** — Infrastructure for future waitlist functionality when no slots are available."
          ]
        },
        "🛠️ Technology Stack": [
          "**Frontend Framework**",
          "- Vue 3 (Composition API, Script Setup)",
          "- TypeScript for type safety",
          "- Vite for build tooling",
          "**State Management**",
          "- Pinia for centralized stores",
          "- Persistent localStorage for data resilience",
          "**UI Framework**",
          "- Vuetify 3 for Material Design components",
          "- Custom SASS theming with dark/light mode",
          "**Routing & Testing**",
          "- Vue Router 4",
          "- Vitest for unit tests",
          "- Cypress for E2E testing",
          "**Code Quality**",
          "- ESLint + Prettier"
        ],
        "🧠 The Real Story — Challenges I Solved": {
          "1. **Collision Detection Across Multiple Dimensions**": [
            "The hardest challenge was preventing double bookings while handling:",
            "- Multiple providers with overlapping schedules",
            "- Service durations affecting adjacent time slots",
            "- Standard ranges vs fixed slots",
            "- Pending, accepted, and in-progress appointments",
            "- Rejected and cancelled appointments freeing up slots",
            "**The solution:** I built a centralized availability engine that:",
            "- Tracks all appointments by provider, date, and time",
            "- Considers service duration when calculating availability",
            "- Filters out slots that conflict with existing appointments",
            "- Handles both range-based and fixed-slot availability models",
            "- Updates availability in real-time as appointments change status",
            "The engine returns available slots for any given provider, date, and service combination — used by both the booking page and the admin editors."
          ],
          "2. **Real-Time Timer Without Performance Issues**": [
            "Displaying live countdowns for multiple appointments while updating every second could kill performance.",
            "**The approach:** Each timer component manages its own `setInterval` that updates a local reactive variable. When the component unmounts, the interval is cleaned up. The store's periodic watcher (every 60 seconds) handles status transitions, while the timer handles second-by-second display.",
            "The timer supports:",
            "- Countdown until appointment start",
            "- Elapsed time during active appointments",
            "- Visual progress bar showing completion percentage",
            "- HH:MM:SS format for longer appointments"
          ],
          "3. **Automatic Status Transitions**": [
            "Appointments needed to transition through states without user intervention:",
            "- `Pending` → `Upcoming` (specialist accepts)",
            "- `Upcoming` → `InProgress` (start time arrives)",
            "- `InProgress` → `Completed` (end time passes)",
            "- `Pending`/`Upcoming` → `Expired` (date passes without acceptance)",
            "**The implementation:** A `startAppointmentWatcher()` function runs every 60 seconds in the appointments store. It checks every appointment against the current time and updates statuses accordingly. When status changes to `Completed`, notifications are sent to both the user and the specialist."
          ],
          "4. **Dual Scheduling Modes**": [
            "Businesses need different scheduling models:",
            "- **Standard Mode** — Recurring daily windows (e.g., \"9 AM to 5 PM every weekday\")",
            "- **Fixed Slots Mode** — Specific dates and times (e.g., \"Christmas Eve, 2 PM to 4 PM\")",
            "**The architecture:** Both modes share the same underlying availability checking engine. Standard mode generates available slots on the fly based on daily windows and intervals. Fixed slots mode stores explicit available slots that override any standard rules.",
            "The admin UI adapts based on mode — date pickers for standard mode, slot-by-slot management for fixed mode."
          ],
          "5. **Provider Overrides**": [
            "Some providers have unique schedules. A specialist might work Wednesdays 10 AM to 2 PM while the business is open 9 AM to 6 PM.",
            "**The solution:** Provider overrides are stored separately and checked before business defaults. When a provider is assigned to a service, their override schedule takes precedence. The admin can set overrides for any provider on any service."
          ],
          "6. **Performance at Scale**": [
            "With 90+ appointments, the system started slowing down — especially on theme switching and booking page interactions.",
            "**Optimizations applied:**",
            "- Reduced watchers that weren't necessary",
            "- Memoized computed properties for availability calculations",
            "- Debounced date picker changes",
            "- Simplified the Availability Summary component",
            "- Lazy-loaded dashboard sections",
            "The booking page now uses cached availability data that updates only when necessary."
          ],
          "7. **Resilient Data Layer**": [
            "Since the frontend uses `localStorage` for persistence (no backend yet), data consistency is critical.",
            "**The approach:** Pinia stores have structured actions for all CRUD operations. Each action updates the store and immediately persists to localStorage. The store initializes by loading from localStorage or seeding with rich sample data for immediate evaluation.",
            "This gives users a fully functional app without any backend setup — perfect for evaluation or small businesses."
          ]
        },
        "📊 What I Learned": {
          "1. **Date/Time Logic is Deceptively Complex**": [
            "Handling time zones, service durations, and conflict detection requires rigorous testing. One off-by-minute bug can show unavailable slots as available or vice versa."
          ],
          "2. **Vue 3 Composition API Shines for Complex Logic**": [
            "The Composition API with script setup made the availability engine much more maintainable than Options API would have. Composable functions like `useAvailability` and `useBooking` encapsulate complex logic cleanly."
          ],
          "3. **Pinia is Perfect for Medium-Complexity Apps**": [
            "Pinia strikes the right balance between simplicity and power. The appointments store handles status transitions, watchers, and notifications without becoming unmanageable."
          ],
          "4. **LocalStorage is Underrated for Prototyping**": [
            "Building the app without a backend first let me iterate on the UX and booking logic rapidly. The localStorage persistence layer can be swapped for a real API later without changing the core logic."
          ],
          "5. **Real-Time Features Need Clean Cleanup**": [
            "Timers and watchers must be cleaned up on component unmount. I added proper `onUnmounted` hooks for every interval and watcher to prevent memory leaks."
          ],
          "6. **User Feedback Prevents Confusion**": [
            "When a slot isn't available, telling users *why* (existing booking, provider unavailable, outside business hours) reduces frustration. Clear error messages and disabled UI elements guide users to valid choices."
          ]
        },
        "🔧 Technical Deep Dive": {
          "Availability Engine Architecture": [
            "The core availability logic is centralized in composables:",
            "**`useAvailability`** — Takes a provider ID, date, service duration, and returns available time slots. Checks against:",
            "- Provider's standard schedule (or overrides)",
            "- Existing appointments (all statuses except Rejected/Cancelled)",
            "- Service duration to block adjacent slots",
            "- Business operating hours",
            "**`useBooking`** — Orchestrates the booking flow:",
            "- Validates selected slot against current availability (re-check before creation)",
            "- Creates appointment with Pending status",
            "- Notifies the assigned specialist",
            "- Updates the availability cache",
            "**`useCollisionDetection`** — Used by admin editors to prevent invalid configurations:",
            "- Checks if new slots conflict with existing appointments",
            "- Validates duration against available windows",
            "- Warns about appointments that would fall outside new ranges"
          ],
          "Appointment State Machine": [
            {
              "type": "code",
              "lang": null,
              "meta": null,
              "value": "Pending ──(specialist accept)──→ Upcoming ──(start time arrives)──→ InProgress\n   │                                    │\n   │                                    │\n   └──(reject/expire)──→ Rejected/Expired\n                                          │\n                                          └──(end time passes)──→ Completed"
            },
            "Each transition triggers appropriate side effects:",
            "- `Pending → Upcoming`: Notification to user",
            "- `Upcoming → InProgress`: Timer starts in dashboards",
            "- `InProgress → Completed`: Notification to both parties, slot becomes available again"
          ],
          "Dashboard Architecture": [
            "Both user and specialist dashboards share common components:",
            "- `AppointmentCard` — Displays appointment details with actions",
            "- `AppointmentTimer` — Live countdown/elapsed display",
            "- `AppointmentList` — Filterable, sortable list with pagination",
            "The dashboards are role-aware — admin sees management features, specialists see appointment management, users see booking and history."
          ]
        },
        "🚀 The Road Ahead": [
          "I'm continuing to improve the system with:",
          "- **Real-time WebSocket updates** — Socket.io for instant slot blocking notifications",
          "- **Backend migration** — PostgreSQL + NestJS + Docker Compose",
          "- **Payment integration** — Stripe for deposits or full payments",
          "- **Waitlist feature** — Notify users when slots become available",
          "- **Multi-tenant SaaS** — Support multiple businesses from one instance",
          "- **Email/SMS reminders** — Automatic notifications before appointments",
          "- **Calendar export** — iCal/Google Calendar integration",
          "- **Analytics dashboard** — Booking trends, provider performance, revenue"
        ],
        "💡 Final Thoughts": [
          "This project taught me that booking systems look simple on the surface but reveal immense complexity when you dig in. Every business has unique scheduling needs — standard windows, fixed slots, provider overrides, service durations, buffer times, and more.",
          "Building a system that handles all these cases while remaining intuitive for users is a serious engineering challenge. The result is a flexible, performant booking engine that can power real businesses.",
          "This is the kind of application I'm proud to show as evidence of my ability to build complex, user-facing systems with clean architecture and attention to detail."
        ]
      }
    }
  }
];
