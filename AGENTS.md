## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## 1. Project Overview

**Name:** The Switch
**Repository:** `the-switch-io`
**Purpose:** A high performance, original data focused web application for mechanical keyboard switch reviews and a searchable technical database.
**Core Differentiator:** Pairs official manufacturer specifications with independently measured force curve graphs produced via a custom testing machine. Reviews are concise, direct, and factual.
**Legal Insulation:** All visual assets, vector art, text reviews, and force curve datasets must be created entirely from scratch. Never scrape, lift, or reproduce text, visual graphics, or compiled datasets from competitor sites.

## 2. Tech Stack & Environment

- **Framework:** Astro (latest version, blank slate setup)
- **Styling:** Tailwind CSS v4 (configured via Vite and `@theme` directives in CSS)
- **Type Safety & Data:** TypeScript, Astro Content Collections with Zod schemas
- **Typography Packages:** `@fontsource/manrope`, `@fontsource/dm-mono`
- **Local OS & Editor:** Nobara Linux (Fedora based), VSCodium
- **Local AI Pipeline:** Ollama engine running a custom split offloaded Qwen 3.5 MoE (`qwen-moe-custom`) for chat/edit and Starcoder2 3B for tab autocompletion via Continue (`config.yaml`)

## 3. Typography & Font Configuration

Font imports are defined in `src/global.css` using Tailwind v4 `@theme` directives:

- **Primary Sans Font:** `Manrope`, sans-serif (`var(--font-sans)`)
- **Secondary Mono Font:** `DM Mono`, monospace (`var(--font-mono)`)

### Typography Usage Rules

- Use `font-sans` for interface headings, main navigation, and body copy.
- Use `font-mono` for technical specifications, force curve chart axes, numeric data, and tag metadata.

## 4. Design System & Functional Colour Palette

### Light Mode Palette

| Token            | Hex       | UI Purpose                                |
| :--------------- | :-------- | :---------------------------------------- |
| Main Background  | `#FFFAF1` | Canvas background                         |
| Primary Surface  | `#FFFFFF` | Cards and primary interactive buttons     |
| Input Surface    | `#F5F2EB` | Image placeholders and search bar fill    |
| Subtle Border    | `#A6A39C` | Horizontal dividers and tag outlines      |
| Primary Text     | `#081C2C` | Headings and high contrast body copy      |
| Muted Text       | `#536068` | Metadata, dates, and placeholder text     |
| Contrast Surface | `#0C2D48` | Dark background split sections            |
| Brand Accent     | `#F05A24` | Interactive highlights, badges, and logos |

### Dark Mode Palette

| Token           | Hex       | UI Purpose                                  |
| :-------------- | :-------- | :------------------------------------------ |
| Main Background | `#071722` | Canvas background                           |
| Primary Surface | `#0C2D48` | Container and card surface background       |
| Input Surface   | `#102B3F` | Search input fill                           |
| Subtle Border   | `#294253` | Horizontal dividers and grid lines          |
| Primary Text    | `#F7F0E4` | Headings and primary body copy              |
| Muted Text      | `#7F909A` | Secondary metadata and read times           |
| Contrast Text   | `#FFFFFF` | High contrast button text                   |
| Brand Accent    | `#F05A24` | Interactive highlights, badges, and accents |

## 5. Coding Standards & Writing Rules

### Writing Style & UI Text

- **Language Standard:** Strictly use British English across all UI text, code comments, and documentation (e.g., colour, optimised, cataloguing).
- **Tone:** Direct, technical, and objective. Avoid conversational filler, marketing fluff, or wordplay.
- **Forbidden Characters & Visuals:**
  - Do not use emojis anywhere in code, UI text, or markdown documentation.
  - Do not use em dashes or en dashes anywhere in text. Use standard hyphens, colons, or commas instead.

### Astro & Component Architecture

- **Component Rules:** Default to native Astro (`.astro`) components. Avoid client side JavaScript hydration unless interactive state (such as search filtering or mobile navigation toggles) strictly requires it.
- **Data Layer:** Define all switch entries, measured test runs, and journal posts inside `src/content/config.ts` using strictly typed Zod schemas.
- **Styling Approach:** Rely strictly on utility classes mapped to the custom `@theme` variables defined in Tailwind CSS v4.
