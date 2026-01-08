# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Testing:**
- No test framework configured

## Architecture

This is a Next.js 15 application for "Dovira" - a French video editing agency website. The project uses:

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with Shadcn/UI components
- **Animations:** Motion (previously Framer Motion)
- **UI Components:** Radix UI primitives with custom styling
- **Typography:** Geist Sans, Geist Mono, and Syne fonts
- **Build Tool:** Turbopack for development

**Key Structure:**
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components organized by category:
  - `ui/` - Base UI components (buttons, cards, etc.)
  - `sections/` - Page section components (header, hero, etc.)
  - `animations/` - Animation components
- `lib/` - Utility functions (mainly `cn` for class merging)

**Component Organization:**
- All components use barrel exports via `index.ts` files
- Shadcn/UI configuration in `components.json` with path aliases
- Custom styling with Tailwind CSS using utility classes
- Responsive design with mobile-first approach
- Always use named export without default for component and only use default export for Next.js pages

**Content:**
The site appears to be a French video editing agency with sections for services, testimonials, pricing, and FAQ. The main page structure includes Header, Hero, WorkWithTicker, WorkWithMe, and Steps sections.

**Styling Patterns:**
- Uses `cn()` utility for conditional class merging
- Custom gradients and animations for CTAs
- Responsive navigation with mobile hamburger menu
- Scroll-based header background changes