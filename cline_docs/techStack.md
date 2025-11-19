# Technology Stack

## Core Framework
- **Next.js:** 14+ (App Router)
    - Server Components for performance.
    - File-based routing for clear navigation structure.
- **React:** 18+

## Language
- **TypeScript:** Strict mode enabled for robust type safety and developer experience.

## Styling
- **Tailwind CSS:** Utility-first framework for layout, spacing, and responsive design.
- **CSS Modules:** Used for component-specific styles and complex legacy styling (e.g., rainbow gradients) to prevent global conflicts.

## Content Management
- **Contentlayer:** Type-safe content SDK that transforms MDX files into JSON data for the blog.
- **Decap CMS:** Git-based CMS for managing blog posts (maintaining existing workflow).

## Testing
- **Jest:** Test runner.
- **React Testing Library:** For testing React components in a way that resembles how they are used by end users.
- **Playwright:** For End-to-End (E2E) testing of critical user flows and cross-browser verification.

## Deployment
- **Netlify:** Platform for hosting the Next.js application (configured via `netlify.toml`).