
# Prosper XO - Next.js Conversion Technical Specification

**Version:** 1.0  
**Date:** November 7, 2025  
**Status:** Architecture Planning Phase  
**Requirement:** 100% Look & Feel Preservation

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Architecture Analysis](#current-architecture-analysis)
3. [Proposed Next.js Architecture](#proposed-nextjs-architecture)
4. [Component Hierarchy & Design](#component-hierarchy--design)
5. [Styling Strategy](#styling-strategy)
6. [Routing Structure](#routing-structure)
7. [Blog System Migration](#blog-system-migration)
8. [Asset Management Strategy](#asset-management-strategy)
9. [Interactive Features Migration](#interactive-features-migration)
10. [SEO & Metadata Strategy](#seo--metadata-strategy)
11. [Third-Party Integrations](#third-party-integrations)
12. [Testing & QA Strategy](#testing--qa-strategy)
13. [Deployment Configuration](#deployment-configuration)
14. [Phased Implementation Roadmap](#phased-implementation-roadmap)
15. [Risk Assessment & Mitigation](#risk-assessment--mitigation)
16. [100% Preservation Checklist](#100-preservation-checklist)

---

## Executive Summary

### Project Overview
This document outlines the complete technical specification for converting the Prosper XO website from its current static HTML + Jekyll architecture to a modern React/Next.js application while maintaining **100% fidelity** to the existing look, feel, and functionality.

### Key Objectives
1. ✅ **Zero Visual Regression** - Pixel-perfect preservation of all styling
2. ✅ **Feature Parity** - All current functionality maintained
3. ✅ **Performance** - Improved or maintained performance metrics
4. ✅ **Maintainability** - Enhanced developer experience
5. ✅ **Scalability** - Foundation for future enhancements

### Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + CSS Modules (for custom styles)
- **Blog:** Contentlayer (MDX support)
- **CMS:** Decap CMS (unchanged)
- **Analytics:** Google Analytics 4
- **Deployment:** Netlify
- **Package Manager:** npm

### Estimated Timeline
- **Phase 1 - Foundation:** 2-3 weeks
- **Phase 2 - Core Pages:** 3-4 weeks
- **Phase 3 - Blog Migration:** 2-3 weeks
- **Phase 4 - Testing & QA:** 2 weeks
- **Total:** 9-12 weeks (conservative estimate)

---

## Current Architecture Analysis

### File Structure
```
prosper-xo-website/
├── index.html                  # Splash page with video
├── welcome/index.html          # Main landing page
├── why-prosper/index.html      # Content page
├── team/index.html             # Team page
├── ethos/index.html            # Ethos page
├── events/index.html           # Events page
├── get-involved/index.html     # Get involved page
├── blog.html                   # Blog listing (Jekyll)
├── _posts/                     # Jekyll blog posts
├── _layouts/                   # Jekyll templates
│   ├── default.html
│   ├── post.html
│   └── blog.html
├── assets/
│   ├── css/                    # 15+ CSS files
│   │   ├── styles.css          # Main styles with rainbow gradient
│   │   ├── splash.css
│   │   ├── prosperxo_header.css
│   │   ├── prosperxo_footer.css
│   │   ├── prosperxo_share_modal.css
│   │   ├── why-prosper.css
│   │   ├── team.css
│   │   ├── ethos.css
│   │   ├── events.css
│   │   ├── get-involved.css
│   │   └── blog.css
│   ├── js/                     # Interactive features
│   │   ├── toggle-terminal-video.js
│   │   ├── hamburger-menu.js
│   │   └── prosper-id.js
│   ├── logos/
│   ├── icons/
│   ├── graphics/
│   ├── text/                   # Stylized text SVGs
│   ├── video/
│   ├── fonts/
│   └── blog/
├── cms/                        # Decap CMS
│   └── config.yml
└── _config.yml                 # Jekyll config
```

### Key Features Inventory

#### 1. Navigation System
- **Header** (2 parts):
  - Top: Logo + Social icons
  - Bottom: Text navigation (WHY PROSPER, TEAM, ETHOS, EVENTS, GET INVOLVED)
- **Hamburger Menu**: Mobile responsive with slide-out
- **Footer**: Social links, newsletter signup

#### 2. Visual Design Elements
- **Rainbow Gradient Background** (CRITICAL):
  ```css
  background-image: 
    radial-gradient(circle at 15% 20%, #ec678c 0%, transparent 40%),
    radial-gradient(circle at 85% 15%, #5d95eb 0%, transparent 45%),
    radial-gradient(circle at 15% 85%, #f3b86a 0%, transparent 45%),
    radial-gradient(circle at 85% 85%, #69d6e4 0%, transparent 50%),
    linear-gradient(135deg, #ec678c 0%, #c177c3 35%, #5d95eb 60%, 
                    #69d6e4 80%, #f3b86a 100%);
  ```
- **Custom Fonts**: Feu de camp Timber (webfont)
- **Button Variants**: Red, yellow, pink, blue with hover states
- **Stylized Text**: SVG graphics for headings
- **Custom Icons**: Social media, navigation

#### 3. Interactive Components
- **Video Player** ([`index.html`](index.html:51)):
  - Custom controls (play/pause button)
  - Muted autoplay capability
  - Click-to-pause functionality
  - Loop capability
  - Poster image support

- **Hamburger Menu** ([`assets/js/hamburger-menu.js`](assets/js/hamburger-menu.js:1)):
  - Toggle animation
  - Body scroll lock
  - Outside click closes
  - Escape key closes
  - Link click closes

- **Share Modal**:
  - Social sharing functionality
  - Modal overlay
  - Close on outside click

#### 4. Blog System
- **Jekyll Processing**: Only for blog
- **Decap CMS**: Blog post management
- **Post Format**:
  - Title, summary, tags
  - Draft status
  - Cover image
  - Publish date
  - Markdown content
- **URL Structure**: `/blog/YYYY/MM/DD/title/`

#### 5. Pages Overview

| Page | Key Features | Special Elements |
|------|--------------|------------------|
| `/` (splash) | Video player, enter button | Custom video controls |
| `/welcome` | Hero, letters, survey sections | Scrolling columns, rainbow separator |
| `/why-prosper` | Video, content sections | Embedded video player |
| `/team` | Team member cards | Hover effects, vCard downloads |
| `/ethos` | Hero image, content | Large graphics |
| `/events` | Event listings | Placeholder support |
| `/get-involved` | Forms, CTAs | Button variants |
| `/blog` | Post listing, individual posts | Jekyll integration |

#### 6. Third-Party Integrations
- **Google Analytics**: G-E00NWTHP4Q
- **Netlify Identity**: CMS authentication
- **Tailwind CDN**: Utility classes
- **External Forms**: Google Forms links

### Current Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Blog Engine**: Jekyll 4.x
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Styling**: 
  - Tailwind CSS (via CDN)
  - Custom CSS files (15+)
  - Google Fonts (Poppins)
  - Custom webfonts
- **Build**: Jekyll build process
- **Deployment**: Netlify
- **Version Control**: Git

### Performance Baseline
- **Current Metrics** (to be measured):
  - First Contentful Paint: TBD
  - Largest Contentful Paint: TBD
  - Time to Interactive: TBD
  - Total Bundle Size: TBD
  - Lighthouse Score: TBD

---

## Proposed Next.js Architecture

### Technology Choices & Rationale

#### Core Framework
**Next.js 14+ (App Router)**
- ✅ React Server Components for better performance
- ✅ Built-in image optimization
- ✅ File-based routing
- ✅ Excellent TypeScript support
- ✅ Production-ready with Netlify

#### Language
**TypeScript (Strict Mode)**
- ✅ Type safety reduces bugs
- ✅ Better IDE support
- ✅ Self-documenting code
- ✅ Easier refactoring

#### Styling Approach
**Tailwind CSS + CSS Modules**
- ✅ Tailwind for utility classes (matching current CDN usage)
- ✅ CSS Modules for complex custom styles
- ✅ Preserves existing gradient definitions
- ✅ Scoped styles prevent conflicts

#### Blog System
**Contentlayer**
- ✅ Type-safe content
- ✅ MDX support for rich content
- ✅ Works seamlessly with Decap CMS
- ✅ Zero-config integration
- ✅ Hot reload in development

### Project Structure

```
prosper-xo-nextjs/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Splash page (/)
│   │   ├── welcome/
│   │   │   └── page.tsx              # /welcome
│   │   ├── why-prosper/
│   │   │   └── page.tsx              # /why-prosper
│   │   ├── team/
│   │   │   └── page.tsx              # /team
│   │   ├── ethos/
│   │   │   └── page.tsx              # /ethos
│   │   ├── events/
│   │   │   └── page.tsx              # /events
│   │   ├── get-involved/
│   │   │   └── page.tsx              # /get-involved
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Individual post
│   │   └── not-found.tsx             # 404 page
│   │
│   ├── components/                    # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── HamburgerMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx            # Button variants
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── ShareModal.tsx
│   │   │   └── ScrollingColumns.tsx
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostContent.tsx
│   │   │   └── PostMeta.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── LetterSection.tsx
│   │       └── SurveySection.tsx
│   │
│   ├── styles/                        # Global styles
│   │   ├── globals.css               # Global + Tailwind
│   │   ├── rainbow-gradient.module.css
│   │   ├── video-player.module.css
│   │   └── typography.module.css
│   │
│   ├── lib/                           # Utilities
│   │   ├── analytics.ts
│   │   ├── contentlayer.ts
│   │   └── utils.ts
│   │
│   ├── types/                         # TypeScript types
│   │   ├── blog.ts
│   │   └── components.ts
│   │
│   └── content/                       # Blog posts (MDX)
│       └── posts/
│           └── *.mdx
│
├── public/                            # Static assets
│   ├── assets/                        # Migrated from current
│   │   ├── logos/
│   │   ├── icons/
│   │   ├── graphics/
│   │   ├── text/
│   │   ├── video/
│   │   ├── fonts/
│   │   └── favicon/
│   └── cms/                           # Decap CMS (unchanged)
│
├── contentlayer.config.ts             # Content configuration
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind configuration
├── tsconfig.json                      # TypeScript config
├── package.json
└── netlify.toml                       # Deployment config
```

### Configuration Files

#### `next.config.js`
```javascript
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Preserve existing redirects
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path(.*).html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
```

#### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'prosper-pink': '#ec678c',
        'prosper-purple': '#c177c3',
        'prosper-blue': '#5d95eb',
        'prosper-cyan': '#69d6e4',
        'prosper-orange': '#f3b86a',
      },
      backgroundImage: {
        'rainbow-gradient': 'radial-gradient(circle at 15% 20%, #ec678c 0%, transparent 40%), radial-gradient(circle at 85% 15%, #5d95eb 0%, transparent 45%), radial-gradient(circle at 15% 85%, #f3b86a 0%, transparent 45%), radial-gradient(circle at 85% 85%, #69d6e4 0%, transparent 50%), linear-gradient(135deg, #ec678c 0%, #c177c3 35%, #5d95eb 60%, #69d6e4 80%, #f3b86a 100%)',
      },
      fontFamily: {
        'timber': ['Feu de camp Timber', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

#### `contentlayer.config.ts`
```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    draft: { type: 'boolean', default: false },
    cover_image: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('posts/', ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('posts/', '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post],
});
```

---

## Component Hierarchy & Design

### Component Tree

```
App
├── RootLayout
│   ├── Header
│   │   ├── Logo
│   │   ├── SocialIcons
│   │   └── Navigation
│   │       └── HamburgerMenu
│   ├── {children} (Page Content)
│   └── Footer
│       ├── SocialIcons
│       └── NewsletterSignup
```

### Core Components Specification

#### 1. Header Component
**File:** `src/components/layout/Header.tsx`

**Props:**
```typescript
interface HeaderProps {
  currentPath?: string;
}
```

**Features:**
- Two-layer structure (header-top, header-bottom-nav)
- Sticky positioning option
- Active link highlighting
- Responsive breakpoints

**Styling Preservation:**
- Exact colors from [`assets/css/prosperxo_header.css`](assets/css/prosperxo_header.css)
- Logo sizing and positioning
- Social icon arrangement
- Navigation hover effects

#### 2. Navigation Component
**File:** `src/components/layout/Navigation.tsx`

**Links:**
- WHY PROSPER → `/why-prosper`
- TEAM → `/team`
- ETHOS → `/ethos`
- EVENTS → `/events`
- GET INVOLVED → `/get-involved`

**States:**
- Default
- Hover (with SVG swap or color change)
- Active (current page)

#### 3. HamburgerMenu Component
**File:** `src/components/layout/HamburgerMenu.tsx`

**Behavior (from [`assets/js/hamburger-menu.js`](assets/js/hamburger-menu.js:1)):**
```typescript
interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Features:
// - Three-line animation (→ X)
// - Body scroll lock when open
// - Close on link click
// - Close on outside click
// - Close on Escape key
// - Slide-out animation
```

#### 4. VideoPlayer Component
**File:** `src/components/ui/VideoPlayer.tsx`

**Props:**
```typescript
interface VideoPlayerProps {
  src: string;
  poster?: string;
  loop?: boolean;
  muted?: boolean;
  autoplay?: boolean;
  controls?: boolean; // Custom controls
}
```

**Features (from [`assets/js/toggle-terminal-video.js`](assets/js/toggle-terminal-video.js:1)):**
- Custom play/pause button
- Hide controls on play
- Show controls on pause
- Click-anywhere-to-pause
- Reset on video end
- Sound toggle

#### 5. Button Component
**File:** `src/components/ui/Button.tsx`

**Variants:**
```typescript
type ButtonVariant = 'red' | 'yellow' | 'pink' | 'blue' | 'default';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}
```

**Styling:**
- Gradient backgrounds (from CSS files)
- Hover animations
- Focus states
- Disabled states

#### 6. Footer Component
**File:** `src/components/layout/Footer.tsx`

**Features:**
- Social media links (6 platforms)
- Newsletter signup form
- Policy links
- Copyright notice

### Page Components

#### Splash Page (`app/page.tsx`)
```typescript
export default function SplashPage() {
  return (
    <>
      <VideoPlayer
        src="/assets/video/prosperxo-video-terminaltext.mp4"
        poster="/assets/placeholders/prosper-website-placeholder12.png"
        loop
        muted
      />
      <Link href="/welcome" className="enter-button">
        <EnterButton />
      </Link>
    </>
  );
}
```

#### Welcome Page (`app/welcome/page.tsx`)
- Hero section with stylized text
- Definition images
- Letter sections (3 variants)
- Survey section
- Rainbow separators
- Scrolling columns animation

#### Team Page (`app/team/page.tsx`)
- Team member cards
- Founding member section
- Hover effects
- vCard download links

---

## Styling Strategy

### Approach: Hybrid System

#### 1. Tailwind CSS (Utility Classes)
**Use for:**
- Layout (flex, grid, spacing)
- Typography (when using standard fonts)
- Basic colors and backgrounds
- Responsive design
- Common utilities

**Configuration:**
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'prosper-pink': '#ec678c',
      'prosper-purple': '#c177c3',
      'prosper-blue': '#5d95eb',
      'prosper-cyan': '#69d6e4',
      'prosper-orange': '#f3b86a',
    },
  },
}
```

#### 2. CSS Modules (Custom Styles)
**Use for:**
- Rainbow gradient background (CRITICAL)
- Complex animations
- Custom button gradients
- Video player controls
- Page-specific styling

**Example:**
```css
/* rainbow-gradient.module.css */
.rainbowBackground {
  background-image: 
    radial-gradient(circle at 15% 20%, #ec678c 0%, transparent 40%),
    radial-gradient(circle at 85% 15%, #5d95eb 0%, transparent 45%),
    radial-gradient(circle at 15% 85%, #f3b86a 0%, transparent 45%),
    radial-gradient(circle at 85% 85%, #69d6e4 0%, transparent 50%),
    linear-gradient(135deg, #ec678c 0%, #c177c3 35%, #5d95eb 60%, 
                    #69d6e4 80%, #f3b86a 100%);
  background-size: cover;
  background-attachment: fixed;
}
```

### Font Loading Strategy

#### Web Fonts
```typescript
// app/layout.tsx
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

const timber = localFont({
  src: '../public/assets/fonts/feudecamp-timber-webfont.woff2',
  variable: '--font-timber',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html className={`${timber.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### CSS Migration Checklist

| Current File | Migration Strategy | New Location |
|-------------|-------------------|--------------|
| `styles.css` | Split: Tailwind + CSS Module | `globals.css` + `rainbow-gradient.module.css` |
| `splash.css` | CSS Module | `splash.module.css` |
| `prosperxo_header.css` | CSS Module | `Header.module.css` |
| `prosperxo_footer.css` | CSS Module | `Footer.module.css` |
| `why-prosper.css` | Page-specific module | `why-prosper.module.css` |
| `team.css` | Page-specific module | `team.module.css` |
| `ethos.css` | Page-specific module | `ethos.module.css` |
| `events.css` | Page-specific module | `events.module.css` |
| `get-involved.css` | Page-specific module | `get-involved.module.css` |
| `blog.css` | CSS Module | `blog.module.css` |
| `video-player.css` | Component module | `VideoPlayer.module.css` |

### Animation Preservation

All CSS animations must be preserved exactly:
- Hover effects on buttons
- Hamburger menu transition
- Scrolling columns
- Image hover states
- Link transitions

---

## Routing Structure

### URL Mapping

| Current URL | Next.js Route | Component |
|------------|--------------|-----------|
| `/` or `/index.html` | `/` | `app/page.tsx` |
| `/welcome/` | `/welcome` | `app/welcome/page.tsx` |
| `/why-prosper/` | `/why-prosper` | `app/why-prosper/page.tsx` |
| `/team/` | `/team` | `app/team/page.tsx` |
| `/ethos/` | `/ethos` | `app/ethos/page.tsx` |
| `/events/` | `/events` | `app/events/page.tsx` |
| `/get-involved/` | `/get-involved` | `app/get-involved/page.tsx` |
| `/blog/` | `/blog` | `app/blog/page.tsx` |
| `/blog/YYYY/MM/DD/title/` | `/blog/[slug]` | `app/blog/[slug]/page.tsx` |
| `/404.html` | `/not-found` | `app/not-found.tsx` |

### Redirects Configuration

```javascript
// next.config.js
async redirects() {
  return [
    // HTML file redirects
    { source: '/index.html', destination: '/', permanent: true },
    { source: '/welcome/index.html', destination: '/welcome', permanent: true },
    { source: '/:path(.*).html', destination: '/:path*', permanent: true },
    
    // Preserve old blog URLs (if Jekyll URLs differ)
    {
      source: '/blog/:year/:month/:day/:slug',
      destination: '/blog/:slug',
      permanent: false,
    },
  ];
}
```

### Dynamic Routes

#### Blog Post Route
```typescript
// app/blog/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  
  return <PostContent post={post} />;
}
```

---

## Blog System Migration

### From Jekyll to Contentlayer

#### Current System (Jekyll)
- Posts in `_posts/` directory
- Filename format: `YYYY-MM-DD-title.md`
- Frontmatter format:
  ```yaml
  ---
  layout: post
  title: "Title"
  summary: "Summary"
  tags: [tag1, tag2]
  draft: false
  date: 2025-09-04 21:22:49 -0000
  cover_image: /path/to/image.jpg
  ---
  ```

#### New System (Contentlayer)
- Posts in `src/content/posts/` directory
- Filename format: `slug.mdx`
- Frontmatter format (same structure for compatibility):
  ```yaml
  ---
  title: "Title"
  summary: "Summary"
  tags: [tag1, tag2]
  draft: false
  date: 2025-09-04T21:22:49.000Z
  cover_image: /path/to/image.jpg
  ---
  ```

### Decap CMS Configuration Update

```yaml
# public/cms/config.yml
backend:
  name: git-gateway
  repo: prosper-xo/website
  branch: main

media_folder: "public/assets/blog/uploads"
public_folder: "/assets/blog/uploads"

collections:
  - name: "posts"
    label: "Blog Posts"
    folder: "src/content/posts"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Summary", name: "summary", widget: "text", required: false }
      - { label: "Tags", name: "tags", widget: "list", required: false }
      - { label: "Draft", name: "draft", widget: "boolean", default: false }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Cover Image", name: "cover_image", widget: "image", required: false }
      - { label: "Body", name: "body", widget: "markdown" }
```

### Migration Script

```typescript
// scripts/migrate-posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const OLD_POSTS_DIR = '_posts';
const NEW_POSTS_DIR = 'src/content/posts';

function migratePost(filename: string) {
  const content = fs.readFileSync(
    path.join(OLD_POSTS_DIR, filename),
    'utf8'
  );
  
  const { data, content: body } = matter(content);
  
  // Remove 'layout' field (not needed in Contentlayer)
  delete data.layout;
  
  // Convert Jekyll date format to ISO 8601
  if (data.date && typeof data.date === 'string') {
    data.date = new Date(data.date).toISOString();
  }
  
  // Extract slug from filename
  const slug = filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.md$/, '');
  
  // Create new MDX file
  const newContent = matter.stringify(body, data);
  fs.writeFileSync(
    path.join(NEW_POSTS_DIR, `${slug}.mdx`),
    newContent
  );
  
  console.log(`✅ Migrated: ${filename} → ${slug}.mdx`);
}

// Run migration
const files = fs.readdirSync(OLD_POSTS_DIR);
files.forEach(migratePost);
```

### Blog Components

#### PostCard Component
```typescript
// src/components/blog/PostCard.tsx
interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={post.url}>
      <article className={styles.postCard}>
        {post.cover_image && (
          <Image
            src={post.cover_image}
            alt={post.title}
            width={600}
            height={400}
          />
        )}
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <div className={styles.meta}>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
          {post.tags && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
```

---

## Asset Management Strategy

### Directory Structure
```
public/
└── assets/
    ├── logos/          # Logo files (.png, .svg)
    ├── icons/          # Social media icons (.svg)
    ├── graphics/       # Illustrations (.png, .jpg, .svg)
    ├── text/           # Stylized text SVGs
    ├── video/          # Video files (.mp4)
    ├── fonts/          # Web fonts (.woff2)
    ├── favicon/        # Favicon files
    ├── placeholders/   # Placeholder images
    └── blog/
        └── uploads/    # CMS uploaded images
```

### Image Optimization

#### Using Next.js Image Component
```typescript
import Image from 'next/image';

// Replace <img> tags with:
<Image
  src="/assets/logos/prosper-website-logo.png"
  alt="Prosper XO Logo"
  width={200}
  height={50}
  priority // For above-the-fold images
/>
```

#### SVG Handling
```typescript
// Import SVGs as React components
import Logo from '@/public/assets/logos/prosper-website-logo.svg';

// Or use Next/Image for SVGs
<Image src="/assets/icons/prosper-website-social-ig.svg" />
```

### Video Optimization

#### Current Setup
- Source: `/assets/video/prosperxo-video-terminaltext.mp4`
- Poster: `/assets/placeholders/prosper-website-placeholder12.png`

#### Optimized Setup
```typescript
<VideoPlayer
  src="/assets/video/prosperxo-video-terminaltext.mp4"
  poster="/assets/placeholders/prosper-website-placeholder12.png"
  preload="metadata" // or "none" for lazy loading
  loop
  muted
/>
```

### Asset Migration Checklist

- [ ] Copy all files from `assets/` to `public/assets/`
- [ ] Update all image paths (remove `../` relative paths)
- [ ] Convert `<img>` to `<Image>` component
- [ ] Optimize video files (consider multiple formats)
- [ ] Verify favicon files
- [ ] Test all asset links
- [ ] Set up proper MIME types

---

## Interactive Features Migration

### 1. Video Player

**Current Implementation:** [`assets/js/toggle-terminal-video.js`](assets/js/toggle-terminal-video.js:1)

**New Implementation:**
```typescript
// src/components/ui/VideoPlayer.tsx
'use client';

import { useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  loop?: boolean;
  muted?: boolean;
}

export function VideoPlayer({ src, poster, loop, muted = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false; // Enable sound on play
      videoRef.current.play();
      setShowControls(false);
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setShowControls(true);
      setIsPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePlayPause();
    }
  };

  const handleVideoEnd = () => {
    setShowControls(true);
    setIsPlaying(false);
  };

  return (
    <div className={styles.tvVideo}>
      <video
        ref={videoRef}
        poster={poster}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
        onClick={handleVideoClick}
        onEnded={handleVideoEnd}
      >
        <source src={src} type="video/mp4" />
      </video>

      {showControls && (
        <div className={styles.videoControls}>
          <button onClick={handlePlayPause} className={styles.videoButton}>
            PLAY ▶︎
          </button>
        </div>
      )}
    </div>
  );
}
```

### 2. Hamburger Menu

**Current Implementation:** [`assets/js/hamburger-menu.js`](assets/js/hamburger-menu.js:1)

**New Implementation:**
```typescript
// src/components/layout/HamburgerMenu.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './HamburgerMenu.module.css';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.secondaryNav} ${isOpen ? styles.navOpen : ''}`}
        onClick={closeMenu}
      >
        <a href="/why-prosper">WHY PROSPER</a>
        <a href="/team">TEAM</a>
        <a href="/ethos">ETHOS</a>
        <a href="/events">EVENTS</a>
        <a href="/get-involved">GET INVOLVED</a>
      </nav>

      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
    </>
  );
}
```

### 3. Share Modal

**New Implementation:**
```typescript
// src/components/ui/ShareModal.tsx
'use client';

import { useState } from 'react';
import styles from './ShareModal.module.css';

interface ShareModalProps {
  url: string;
  title: string;
}

export function ShareModal({ url, title }: ShareModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Share</button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>Share this page</h3>
            <div className={styles.shareButtons}>
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
```

### 4. Scrolling Columns Animation

**Analysis needed:** Review current implementation for exact behavior
**Migration:** Convert to React component with CSS animations or Framer Motion

---

## SEO & Metadata Strategy

### Metadata Configuration

#### Root Layout
```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://prosperxo.com'),
  title: {
    default: 'Prosper XO',
    template: '%s | Prosper XO',
  },
  description: "We're building something exciting to put artists back at the center of the industry.",
  openGraph: {
    title: 'Prosper XO',
    description: "We're building something exciting to put artists back at the center of the industry.",
    url: 'https://prosperxo.com',
    siteName: 'Prosper XO',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosper XO',
    description: "We're building something exciting to put artists back at the center of the industry.",
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicon/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicon/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
```

#### Page-Specific Metadata
```typescript
// app/welcome/page.tsx
export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
  openGraph: {
    title: 'Welcome | Prosper XO',
    url: '/welcome',
  },
};
```

#### Dynamic Blog Post Metadata
```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}
```

### Sitemap Generation

```typescript
// app/sitemap.ts
import { allPosts } from 'contentlayer/generated';

export default function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://prosperxo.com${post.url}`,
    lastModified: post.date,
  }));

  const routes = ['', '/welcome', '/why-prosper', '/team', '/ethos', '/events', '/get-involved', '/blog'].map(
    (route) => ({
      url: `https://prosperxo.com${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts];
}
```

### Robots.txt

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/cms/',
    },
    sitemap: 'https://prosperxo.com/sitemap.xml',
  };
}
```

---

## Third-Party Integrations

### 1. Google Analytics

```typescript
// lib/analytics.ts
export const GA_TRACKING_ID = 'G-E00NWTHP4Q';

export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Netlify Identity (CMS Auth)

```typescript
// app/layout.tsx
<Script
  src="https://identity.netlify.com/v1/netlify-identity-widget.js"
  strategy="afterInteractive"
/>

<Script id="netlify-identity" strategy="afterInteractive">
  {`
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/cms/";
          });
        }
      });
    }
  `}
</Script>
```

### 3. External Forms
- Keep existing Google Forms links
- Consider migrating to Next.js API routes for better control

---

## Testing & QA Strategy

### Testing Framework
- **Unit Testing**: Jest + React Testing Library
- **E2E Testing**: Playwright
- **Visual Regression**: Percy or Chromatic
- **Performance**: Lighthouse CI

### Test Categories

#### 1. Visual Regression Tests
```typescript
// tests/visual/pages.spec.ts
test.describe('Visual Regression', () => {
  test('splash page matches baseline', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('splash-page.png');
  });

  test('welcome page matches baseline', async ({ page }) => {
    await page.goto('/welcome');
    await expect(page).toHaveScreenshot('welcome-page.png');
  });
});
```

#### 2. Interactive Feature Tests
```typescript
// tests/e2e/video-player.spec.ts
test('video player controls work correctly', async ({ page }) => {
  await page.goto('/');
  
  // Click play button
  await page.click('#playPauseBtn');
  
  // Verify video is playing
  const video = page.locator('video');
  await expect(video).toHaveProperty('paused', false);
  
  // Click video to pause
  await video.click();
  await expect(video).toHaveProperty('paused', true);
});
```

#### 3. Navigation Tests
```typescript
// tests/e2e/navigation.spec.ts
test('hamburger menu works on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/welcome');
  
  // Open menu
  await page.click('.hamburger-menu');
  await expect(page.locator('.secondary-nav')).toBeVisible();
  
  // Close on link click
  await page.click('.secondary-nav a[href="/team"]');
  await expect(page).toHaveURL('/team');
});
```

#### 4. Blog System Tests
```typescript
// tests/e2e/blog.spec.ts
test('blog posts display correctly', async ({ page }) => {
  await page.goto('/blog');
  
  // Verify post cards render
  const postCards = page.locator('.post-card');
  await expect(postCards).toHaveCount.greaterThan(0);
  
  // Click on first post
  await postCards.first().click();
  
  // Verify post content loads
  await expect(page.locator('.post-content')).toBeVisible();
});
```

### 100% Preservation Validation

#### Visual Checklist (per page)
- [ ] Rainbow gradient background renders identically
- [ ] All colors match exactly (use color picker tool)
- [ ] Font sizes and weights match
- [ ] Spacing (margins, padding) matches
- [ ] Button styles and hover states match
- [ ] Image sizing and positioning match
- [ ] Animations behave identically
- [ ] Responsive breakpoints match

#### Functional Checklist
- [ ] All links navigate correctly
- [ ] Video player works identically
- [ ] Hamburger menu works identically
- [ ] Share modal works
- [ ] Forms submit correctly
- [ ] External links open correctly
- [ ] vCard downloads work
- [ ] Blog posts display correctly

### Performance Benchmarks

#### Target Metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90

#### Testing Process
1. Run Lighthouse on all major pages
2. Compare with current site metrics
3. Identify regressions
4. Optimize until targets met

---

## Deployment Configuration

### Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/:path*.html"
  to = "/:path*"
  status = 301

[[redirects]]
  from = "/blog/:year/:month/:day/:slug"
  to = "/blog/:slug"
  status = 301

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[dev]
  command = "npm run dev"
  port = 3000
  targetPort = 3000
  publish = ".next"

# Environment variables
[build.environment]
  NODE_VERSION = "18"
```

### Environment Variables

```bash
# .env.local (for local development)
NEXT_PUBLIC_GA_ID=G-E00NWTHP4Q
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.production (for Netlify)
NEXT_PUBLIC_GA_ID=G-E00NWTHP4Q
NEXT_PUBLIC_SITE_URL=https://prosperxo.com
```

### Build Optimization

```javascript
// next.config.js
const nextConfig = {
  // Output standalone for better performance
  output: 'export', // or 'standalone' depending on needs
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  // Compression
  compress: true,
  
  // Remove console.logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
```

---

## Phased Implementation Roadmap

### Phase 1: Foundation & Setup (2-3 weeks)

#### Week 1: Project Setup
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up Contentlayer
- [ ] Migrate all assets to `public/` directory
- [ ] Create base folder structure
- [ ] Set up Git repository structure
- [ ] Configure ESLint and Prettier

#### Week 2: Core Components
- [ ] Build Header component
- [ ] Build Footer component
- [ ] Build Navigation component
- [ ] Build HamburgerMenu component
- [ ] Migrate rainbow gradient styling
- [ ] Create root layout
- [ ] Set up font loading

#### Week 3: Testing & Polish
- [ ] Test responsive layouts
- [ ] Verify gradient rendering
- [ ] Test navigation on all screen sizes
- [ ] Set up testing framework
- [ ] Create component Storybook (optional)

**Deliverable:** Working shell of site with header/footer navigation

---

### Phase 2: Core Pages (3-4 weeks)

#### Week 4: Splash & Welcome Pages
- [ ] Migrate splash page (`/`)
- [ ] Build VideoPlayer component
- [ ] Test video player functionality
- [ ] Migrate welcome page (`/welcome`)
- [ ] Build Hero component
- [ ] Build ScrollingColumns component

#### Week 5: Content Pages Part 1
- [ ] Migrate why-prosper page
- [ ] Migrate team page
- [ ] Build team member card components
- [ ] Test vCard downloads
- [ ] Implement hover effects

#### Week 6: Content Pages Part 2
- [ ] Migrate ethos page
- [ ] Migrate events page
- [ ] Migrate get-involved page
- [ ] Build Button component with variants
- [ ] Test all page layouts

#### Week 7: Testing & Refinement
- [ ] Visual regression testing on all pages
- [ ] Fix styling discrepancies
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit

**Deliverable:** All main pages complete and tested

---

### Phase 3: Blog Migration (2-3 weeks)

#### Week 8: Blog Setup
- [ ] Configure Contentlayer fully
- [ ] Migrate Jekyll posts to MDX
- [ ] Update Decap CMS config
- [ ] Build blog listing page
- [ ] Build blog post page

#### Week 9: Blog Components
- [ ] Build PostCard component
- [ ] Build PostContent component
- [ ] Build PostMeta component
- [ ] Implement tag system
- [ ] Test CMS integration

#### Week 10: Blog Testing
- [ ] Test blog post creation via CMS
- [ ] Test blog post editing
- [ ] Verify all old blog URLs redirect correctly
- [ ] Test MDX rendering
- [ ] Performance testing with multiple posts

**Deliverable:** Fully functional blog system with CMS integration

---

### Phase 4: Testing, QA & Launch (2 weeks)

#### Week 11: Comprehensive Testing
- [ ] Full site regression testing
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] SEO audit
- [ ] Analytics verification

#### Week 12: Pre-Launch & Launch
- [ ] Final client review
- [ ] Address any remaining issues
- [ ] Create deployment checklist
- [ ] Set up monitoring (Sentry, LogRocket, etc.)
- [ ] Deploy to staging
- [ ] Final staging review
- [ ] Deploy to production
- [ ] Post-launch monitoring
- [ ] Create handoff documentation

**Deliverable:** Launched site with monitoring in place

---

## Risk Assessment & Mitigation

### High-Priority Risks

#### 1. Visual Regression
**Risk:** Styling doesn't match 100%  
**Probability:** High  
**Impact:** Critical  
**Mitigation:**
- Use visual regression testing tools (Percy, Chromatic)
- Take baseline screenshots of current site
- Side-by-side comparison during development
- Pixel-perfect CSS migration
- Client review at each phase

#### 2. Performance Degradation
**Risk:** New site slower than current  
**Probability:** Medium  
**Impact:** High  
**Mitigation:**
- Benchmark current site performance
- Use Next.js Image optimization
- Implement code splitting
- Lazy load non-critical components
- Regular Lighthouse audits
- Performance budgets

#### 3. Blog Migration Issues
**Risk:** Blog posts don't display correctly  
**Probability:** Medium  
**Impact:** High  
**Mitigation:**
- Thorough testing of migration script
- Manual review of migrated posts
- Fallback to current system if issues arise
- Comprehensive testing of CMS integration

#### 4. SEO Impact
**Risk:** Loss of search rankings during migration  
**Probability:** Low  
**Impact:** High  
**Mitigation:**
- Implement all redirects correctly
- Maintain URL structure where possible
- Proper meta tags and sitemaps
- Monitor search console post-launch
- Submit new sitemap to search engines

### Medium-Priority Risks

#### 5. Interactive Features Behavior
**Risk:** JavaScript features behave differently  
**Impact:** Medium  
**Mitigation:**
- Extensive E2E testing
- User acceptance testing
- Gradual rollout option

#### 6. Third-Party Integration Issues
**Risk:** Analytics or CMS stops working  
**Impact:** Medium  
**Mitigation:**
- Test integrations early
- Have rollback plan
- Documentation of all integrations

### Mitigation Strategy Summary

1. **Incremental Development**: Build and test in phases
2. **Continuous Testing**: Test at every stage
3. **Client Involvement**: Regular reviews and feedback
4. **Staging Environment**: Test everything before production
5. **Rollback Plan**: Keep current site available if needed
6. **Monitoring**: Set up error tracking and analytics immediately

---

## 100% Preservation Checklist

### Visual Elements

#### Colors
- [ ] Rainbow gradient background matches exactly
  - [ ] Pink (#ec678c)
  - [ ] Purple (#c177c3)
  - [ ] Blue (#5d95eb)
  - [ ] Cyan (#69d6e4)
  - [ ] Orange (#f3b86a)
- [ ] Button gradients match
- [ ] Text colors match
- [ ] Link colors match (default, hover, active)
- [ ] Border colors match

#### Typography
- [ ] Feu de camp Timber font loads correctly
- [ ] Poppins font loads correctly
- [ ] Font sizes match exactly
- [ ] Font weights match
- [ ] Line heights match
- [ ] Letter spacing matches
- [ ] Heading styles match
- [ ] Paragraph styles match

#### Layout & Spacing
- [ ] Page widths match
- [ ] Section padding matches
- [ ] Element margins match
- [ ] Grid layouts match
- [ ] Flex layouts match
- [ ] Responsive breakpoints match

#### Images & Graphics
- [ ] All images display correctly
- [ ] Image sizes match
- [ ] Image positioning matches
- [ ] SVG graphics render correctly
- [ ] Favicon displays correctly
- [ ] Social media thumbnails work

### Interactive Elements

#### Navigation
- [ ] Header layout matches
- [ ] Navigation links work
- [ ] Active page highlighting works
- [ ] Hover states match
- [ ] Hamburger menu works identically
  - [ ] Animation matches
  - [ ] Body scroll lock works
  - [ ] Close on outside click works
  - [ ] Close on Escape works
  - [ ] Close on link click works

#### Video Player
- [ ] Play button works
- [ ] Pause functionality works
- [ ] Sound toggle works
- [ ] Loop functionality works
- [ ] Poster image displays
- [ ] Controls hide on play
- [ ] Click-to-pause works

#### Buttons
- [ ] All button variants match
- [ ] Hover animations match
- [ ] Focus states match
- [ ] Active states match
- [ ] Click handlers work

#### Forms
- [ ] Newsletter signup works
- [ ] External form links work
- [ ] Form validation matches

### Content

#### Pages
- [ ] Splash page (`/`)
- [ ] Welcome page (`/welcome`)
- [ ] Why Prosper page (`/why-prosper`)
- [ ] Team page (`/team`)
- [ ] Ethos page (`/ethos`)
- [ ] Events page (`/events`)
- [ ] Get Involved page (`/get-involved`)
- [ ] Blog listing page (`/blog`)
- [ ] Individual blog posts
- [ ] 404 page

#### Sections
- [ ] Hero sections match
- [ ] Letter sections match
- [ ] Survey sections match
- [ ] Team member cards match
- [ ] Event listings match
- [ ] Footer matches

### Functionality

#### Links
- [ ] All internal links work
- [ ] All external links work
- [ ] Social media links work
- [ ] vCard downloads work
- [ ] PDF downloads work

#### Blog
- [ ] Blog listing displays correctly
- [ ] Blog posts display correctly
- [ ] Tags display correctly
- [ ] Dates format correctly
- [ ] Cover images display
- [ ] CMS can create posts
- [ ] CMS can edit posts
- [ ] Markdown renders correctly

#### SEO
- [ ] Meta titles match
- [ ] Meta descriptions match
- [ ] Open Graph tags work
- [ ] Twitter cards work
- [ ] Canonical URLs set
- [ ] Sitemap generates
- [ ] Robots.txt exists

#### Analytics
- [ ] Google Analytics tracking works
- [ ] Page views tracked
- [ ] Events tracked (if any)

### Performance

- [ ] First Contentful Paint ≤ current
- [ ] Largest Contentful Paint ≤ current
- [ ] Time to Interactive ≤ current
- [ ] Total Blocking Time ≤ current
- [ ] Cumulative Layout Shift ≤ current
- [ ] Lighthouse score ≥ current

### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Responsive Testing

- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Mobile Small (320px)

---

## Next Steps

### Immediate Actions

1. **Client Review