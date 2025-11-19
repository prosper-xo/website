# Testing Strategy

This document outlines the testing strategy for the Prosper XO website, focusing on End-to-End (E2E) testing to ensure critical user flows function correctly across different devices and browsers.

## Overview

We use a layered testing approach:
*   **Unit Testing:** Jest + React Testing Library (for individual components and utility functions).
*   **End-to-End (E2E) Testing:** Playwright (for verifying full user journeys and critical features).

## End-to-End (E2E) Testing with Playwright

We utilize **Playwright** for our E2E test suite due to its reliability, cross-browser support (Chromium, Firefox, WebKit), and powerful tooling (codegen, trace viewer).

### 1. Test Environment
*   **Local:** Tests run against the local development server (usually `http://localhost:3000`).
*   **CI/CD:** Tests are configured to run in headless mode on CI pipelines (e.g., GitHub Actions).

### 2. Browser & Device Coverage
Tests are configured to run on:
*   **Desktop:** Chrome, Firefox, Safari.
*   **Mobile:** Emulated Mobile Chrome (Pixel 5) and Mobile Safari (iPhone 12).

### 3. Directory Structure
All E2E tests are located in the `tests` directory at the project root to keep them separate from unit tests (`__tests__` directories inside `src`).

```
/
├── tests/
│   ├── navigation.spec.ts    # Header, Footer, Hamburger menu
│   ├── home.spec.ts          # Splash page, video player
│   ├── content.spec.ts       # Static pages (Ethos, Team, Why Prosper)
│   └── interactivity.spec.ts # User interactions (Modals, Forms)
├── playwright.config.ts      # Main configuration
└── package.json              # Test scripts
```

## Test Plan & Critical User Flows

The following scenarios are prioritized for automated testing:

### A. Navigation
*   **Goal:** Ensure users can navigate the site effectively.
*   **Tests:**
    *   Verify all Header links route to the correct pages.
    *   Verify Footer social links and navigation links are present and correct.
    *   **Mobile:** Verify Hamburger menu opens/closes and links function correctly.

### B. Home / Splash Page
*   **Goal:** Verify the "first impression" experience.
*   **Tests:**
    *   Check that the `TerminalVideo` component loads.
    *   Verify video controls (Play/Pause) function (if interactive).
    *   Verify the "Enter Site" or main CTA buttons are visible and clickable.

### C. Content Pages
*   **Goal:** Ensure critical information is accessible.
*   **Pages:** `/ethos`, `/team`, `/why-prosper`.
*   **Tests:**
    *   Verify page title (H1) renders correctly.
    *   Verify key sections/images load (no broken images).
    *   Check for accessibility violations (basic axe-core checks via Playwright if added).

### D. Blog
*   **Goal:** Verify the dynamic content pipeline.
*   **Tests:**
    *   **Listing:** Verify the blog index (`/blog`) renders a list of posts.
    *   **Detail:** Click a post and verify the individual blog post page loads with title and content.
    *   **Navigation:** Verify "Back to Blog" links work.

### E. Interactivity
*   **Goal:** Verify user actions beyond navigation.
*   **Tests:**
    *   **Share Modal:** Trigger the "Share" button and verify the modal appears with social options.
    *   **Forms:** Check that "Join the Movement" or contact links/forms render correctly (e.g., mailto links or embedded forms).

### F. Responsiveness
*   **Goal:** Verify layout stability.
*   **Tests:**
    *   **Desktop:** Ensure grid layouts display in multiple columns.
    *   **Mobile:** Ensure grid layouts collapse to single column.
    *   Check for horizontal scrolling issues (elements overflowing the viewport).

## Implementation Guide

### 1. Installation
Run the following command to install Playwright and its browsers:
```bash
npm init playwright@latest
```
*   Select **TypeScript**.
*   Put your E2E tests in **tests**.
*   Add a GitHub Actions workflow? (User preference, usually Yes).
*   Install Playwright browsers (Yes).

### 2. Configuration (`playwright.config.ts`)
Ensure the `webServer` block is configured to start your Next.js app:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 3. Running Tests
*   Run all tests: `npx playwright test`
*   Run UI mode (interactive): `npx playwright test --ui`
*   Debug tests: `npx playwright test --debug`
*   View report: `npx playwright show-report`
