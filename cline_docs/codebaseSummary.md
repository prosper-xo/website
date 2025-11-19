# Codebase Summary

## Project Structure
- **`src/app`:** Next.js App Router directory containing all page routes (`/`, `/welcome`, `/why-prosper`, etc.).
- **`src/components`:** Reusable UI components organized by type (layout, ui, features).
- **`src/styles`:** Global styles, Tailwind configuration, and component-specific CSS modules.
- **`src/content`:** Markdown/MDX files for blog posts (processed by Contentlayer).
- **`public/assets`:** Static assets (images, fonts, icons) migrated from the legacy site.
- **`cline_docs`:** Project documentation and guidelines.

## Key Components & Interactions
- **`RootLayout` (`src/app/layout.tsx`):** Wraps the entire application, providing the global font (Poppins/Timber) and common layout elements.
- **`Header` & `Footer`:** Persistent navigation elements present on all pages except the splash page (conditionally rendered or controlled via layout groups).
- **`TerminalVideo`:** Custom video player component used on the splash page (`/`) and `/why-prosper`.
- **`ShareModalClient`:** Handles social sharing functionality with a modal overlay.

## Data Flow
- **Blog System:**
    1.  **Decap CMS (`/admin`):** Users edit content, which commits changes to `.mdx` files in `src/content/posts`.
    2.  **Contentlayer:** Watches or builds these `.mdx` files -> generates type-safe JSON data (in `.contentlayer/generated`).
    3.  **Next.js:** Consumes this data in `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` to render pages at build time (SSG).
- **Static Pages:** Most pages (`/welcome`, `/ethos`, etc.) are static, importing images and assets directly for optimal performance.

## External Dependencies
- **Next.js 14:** Core framework.
- **Tailwind CSS:** Utility styling.
- **Contentlayer:** MDX processing for the blog.
- **Decap CMS:** Content management for the blog (admin panel at `/admin`).

## Recent Significant Changes
- **Migration Completed:** The entire site has been successfully converted from Jekyll to Next.js 14.
- **Testing & Verification:** Unit tests established for core components; visual and interactive features verified.
- **Documentation:** Updated to reflect the production-ready state of the codebase.