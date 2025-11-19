# Pre-Deployment Checklist

**Project:** Prosper XO Next.js Website  
**Version:** 1.0  
**Last Updated:** November 7, 2025  

---

## Overview

This checklist ensures all critical aspects of the Prosper XO website are verified before production deployment. Complete ALL items before proceeding with deployment.

**Instructions:**
- Work through each section systematically
- Check off items as completed
- Document any issues found
- Do NOT proceed to deployment if any critical items fail
- Items marked with 🔴 are CRITICAL - must pass
- Items marked with 🟡 are IMPORTANT - should pass
- Items marked with 🟢 are RECOMMENDED - nice to have

---

## 1. Code Quality & Build

### 1.1 Build Process 🔴 CRITICAL

```bash
# Clean previous builds
rm -rf .next .contentlayer node_modules
npm install
```

- [ ] **Dependencies install without errors**
  ```bash
  npm install
  ```
  - Expected: All packages installed successfully
  - No peer dependency warnings for critical packages

- [ ] **TypeScript type checking passes**
  ```bash
  npm run type-check
  ```
  - Expected: No type errors
  - All types properly defined

- [ ] **ESLint passes without errors**
  ```bash
  npm run lint
  ```
  - Expected: No linting errors
  - Warnings are acceptable if documented

- [ ] **Production build succeeds**
  ```bash
  npm run build
  ```
  - Expected: Build completes successfully
  - No compilation errors
  - Build time < 5 minutes
  - Bundle size warnings reviewed

- [ ] **Production server starts**
  ```bash
  npm run start
  ```
  - Expected: Server starts on port 3000
  - No startup errors

### 1.2 Test Suite 🔴 CRITICAL

- [ ] **All tests pass**
  ```bash
  npm run test
  ```
  - Expected: 0 failing tests
  - All test suites pass

- [ ] **Test coverage meets minimum requirements**
  ```bash
  npm run test:coverage
  ```
  - Expected coverage:
    - Statements: > 80%
    - Branches: > 75%
    - Functions: > 80%
    - Lines: > 80%

### 1.3 Code Repository 🔴 CRITICAL

- [ ] **All changes committed**
  ```bash
  git status
  ```
  - Expected: Working tree clean
  - No uncommitted changes

- [ ] **On correct branch**
  ```bash
  git branch --show-current
  ```
  - Expected: `main` or your production branch

- [ ] **Latest code pulled**
  ```bash
  git pull origin main
  ```
  - Expected: Already up to date

- [ ] **No merge conflicts**
  - All conflicts resolved
  - Code reviewed and approved

### 1.4 Dependencies 🟡 IMPORTANT

- [ ] **No critical security vulnerabilities**
  ```bash
  npm audit
  ```
  - Expected: 0 high/critical vulnerabilities
  - Moderate/low vulnerabilities documented

- [ ] **Dependencies up to date**
  ```bash
  npm outdated
  ```
  - Review outdated packages
  - Plan updates for post-deployment

---

## 2. Functionality Testing

### 2.1 Core Pages 🔴 CRITICAL

Test all pages load without errors:

- [ ] **Homepage (`/`)**
  - Loads without errors
  - Video player works
  - Enter button functional
  - No console errors

- [ ] **Welcome page (`/welcome`)**
  - All sections display
  - Images load correctly
  - Scrolling columns work
  - Links functional

- [ ] **Why Prosper (`/why-prosper`)**
  - Content displays correctly
  - Videos/media work
  - No broken elements

- [ ] **Team page (`/team`)**
  - All team members display
  - Images load
  - vCard downloads work
  - Hover effects work

- [ ] **Ethos page (`/ethos`)**
  - Hero image loads
  - Content displays correctly
  - No layout issues

- [ ] **Events page (`/events`)**
  - Event listings display
  - Images load
  - Links work
  - No broken content

- [ ] **Get Involved (`/get-involved`)**
  - Forms display correctly
  - CTAs work
  - Links functional
  - No JavaScript errors

- [ ] **Blog listing (`/blog`)**
  - Posts display in grid
  - Pagination works (if applicable)
  - Filters work (if applicable)
  - Images load

- [ ] **Individual blog posts**
  - Post content renders
  - Images display
  - Markdown formatting correct
  - Share buttons work
  - Navigation works

### 2.2 Navigation 🔴 CRITICAL

- [ ] **Header navigation**
  - All menu items clickable
  - Links go to correct pages
  - Active state shows correctly
  - Logo links to homepage

- [ ] **Hamburger menu (mobile)**
  - Opens/closes correctly
  - All links functional
  - Smooth animation
  - Closes on link click
  - Closes on outside click
  - Closes on Escape key

- [ ] **Footer navigation**
  - All links functional
  - Social icons work
  - Newsletter signup works
  - Contact links correct

### 2.3 Interactive Features 🔴 CRITICAL

- [ ] **Video player**
  - Plays/pauses correctly
  - Controls work
  - Loop functions
  - Autoplay behaves correctly
  - Mute/unmute works

- [ ] **Forms**
  - All form fields work
  - Validation functions
  - Submit works
  - Error messages display
  - Success messages show

- [ ] **Modals/Overlays**
  - Open correctly
  - Close correctly
  - Outside click closes
  - Escape key closes
  - No scroll issues

- [ ] **Share functionality**
  - Share buttons work
  - Social links correct
  - Share modal functions
  - No errors on share

### 2.4 CMS Admin 🔴 CRITICAL

- [ ] **CMS accessible at `/cms`**
  - Page loads without errors
  - Netlify Identity widget loads

- [ ] **Can login to CMS**
  - Authentication works
  - Redirects correctly after login

- [ ] **Can view blog posts**
  - All posts visible
  - Correct metadata shown
  - Draft status correct

- [ ] **Can edit blog posts**
  - Editor loads
  - Can make changes
  - Changes save correctly
  - Preview works

- [ ] **Can create new post**
  - New post form loads
  - All fields functional
  - Can save draft
  - Can publish

- [ ] **Media library works**
  - Can upload images
  - Can select existing images
  - Images display correctly

---

## 3. Performance

### 3.1 Page Load Times 🟡 IMPORTANT

Test with production build (`npm run start`):

- [ ] **Homepage loads < 2 seconds**
- [ ] **Content pages load < 2 seconds**
- [ ] **Blog listing loads < 2 seconds**
- [ ] **Blog posts load < 2 seconds**

### 3.2 Bundle Size 🟡 IMPORTANT

Check build output:

- [ ] **Page bundle sizes acceptable**
  - Homepage: < 150 kB
  - Content pages: < 150 kB
  - Blog pages: < 150 kB

- [ ] **Shared chunks optimized**
  - Framework bundle: < 200 kB
  - Vendor bundle: < 100 kB

### 3.3 Lighthouse Audit 🟡 IMPORTANT

Run Lighthouse in Chrome DevTools (Incognito mode):

- [ ] **Performance score > 90**
- [ ] **Accessibility score > 90**
- [ ] **Best Practices score > 90**
- [ ] **SEO score > 90**

Key metrics:
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Cumulative Layout Shift < 0.1

---

## 4. Responsive Design

### 4.1 Mobile Testing 🔴 CRITICAL

Test on mobile devices or DevTools device emulation:

**Phone (375x667):**
- [ ] Layout correct
- [ ] Navigation works
- [ ] Images load and fit
- [ ] Text readable
- [ ] Buttons accessible
- [ ] Forms usable

**Tablet (768x1024):**
- [ ] Layout adapts correctly
- [ ] Navigation works
- [ ] Images scale properly
- [ ] All features functional

### 4.2 Desktop Testing 🔴 CRITICAL

**Laptop (1366x768):**
- [ ] Full layout displays
- [ ] No horizontal scroll
- [ ] Images scaled properly

**Desktop (1920x1080):**
- [ ] Layout centered or full-width as designed
- [ ] No pixelation
- [ ] All elements visible

### 4.3 Browser Testing 🟡 IMPORTANT

Test in multiple browsers:

- [ ] **Chrome (latest)**
  - All features work
  - Styling correct
  - No console errors

- [ ] **Firefox (latest)**
  - All features work
  - Styling correct
  - No console errors

- [ ] **Safari (latest)**
  - All features work
  - Styling correct
  - No console errors

- [ ] **Edge (latest)**
  - All features work
  - Styling correct
  - No console errors

- [ ] **Mobile Safari (iOS)**
  - All features work
  - Touch interactions work
  - No layout issues

- [ ] **Chrome Mobile (Android)**
  - All features work
  - Touch interactions work
  - No layout issues

---

## 5. SEO & Metadata

### 5.1 Meta Tags 🔴 CRITICAL

Check each page has:

- [ ] **Title tag**
  - Unique per page
  - Under 60 characters
  - Descriptive

- [ ] **Meta description**
  - Unique per page
  - 150-160 characters
  - Compelling

- [ ] **Open Graph tags**
  - og:title
  - og:description
  - og:image
  - og:url
  - og:type

- [ ] **Twitter Card tags**
  - twitter:card
  - twitter:title
  - twitter:description
  - twitter:image

### 5.2 Social Sharing 🟡 IMPORTANT

Test preview cards:

- [ ] **Facebook preview**
  - Use [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Image displays correctly
  - Title and description correct

- [ ] **Twitter preview**
  - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Card displays correctly
  - Image shows properly

- [ ] **LinkedIn preview**
  - Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
  - Preview looks good

### 5.3 Technical SEO 🔴 CRITICAL

- [ ] **robots.txt accessible**
  - Located at `/robots.txt`
  - Contains correct directives
  - Allows search engines

- [ ] **sitemap.xml accessible**
  - Located at `/sitemap.xml`
  - Contains all pages
  - Valid XML format

- [ ] **Canonical URLs correct**
  - Each page has canonical tag
  - Points to correct URL
  - HTTPS protocol

- [ ] **No duplicate content**
  - Each page unique
  - No multiple URLs for same content

### 5.4 Structured Data 🟢 RECOMMENDED

- [ ] **Schema.org markup** (if applicable)
  - Organization schema
  - BlogPosting schema
  - Person schema (team page)

---

## 6. Analytics & Tracking

### 6.1 Google Analytics 🔴 CRITICAL

- [ ] **GA tracking code present**
  - Check page source for GA script
  - Measurement ID correct: `G-E00NWTHP4Q`

- [ ] **Real-time tracking works**
  - Open GA Real-Time view
  - Visit site
  - See activity in GA

- [ ] **Page views tracked**
  - Visit multiple pages
  - Verify in GA Real-Time
  - Correct page titles show

- [ ] **Events tracked** (if configured)
  - Test event triggers
  - Verify in GA Real-Time

### 6.2 Console Verification 🟡 IMPORTANT

Open browser console:

- [ ] **No GA errors**
  - No 404s for GA script
  - No GA console errors
  - Tracking calls successful

---

## 7. Security

### 7.1 HTTPS 🔴 CRITICAL

- [ ] **SSL certificate valid**
  - No certificate warnings
  - Valid for domain
  - Not expired

- [ ] **HTTP redirects to HTTPS**
  - Test: `http://yoursite.com`
  - Redirects to `https://yoursite.com`

- [ ] **No mixed content warnings**
  - All assets served over HTTPS
  - No insecure images/scripts

### 7.2 Security Headers 🟡 IMPORTANT

Test with [SecurityHeaders.com](https://securityheaders.com/):

- [ ] **Content-Security-Policy present**
- [ ] **X-Frame-Options present**
- [ ] **X-Content-Type-Options present**
- [ ] **Referrer-Policy present**
- [ ] **Permissions-Policy present**

### 7.3 Sensitive Data 🔴 CRITICAL

- [ ] **No API keys in client code**
  - Check browser DevTools
  - View page source
  - No exposed secrets

- [ ] **Environment variables secure**
  - `.env` files not in repository
  - Secrets in Netlify only
  - Public vars prefixed `NEXT_PUBLIC_`

- [ ] **No sensitive data in Git**
  - Check Git history
  - No credentials committed
  - `.gitignore` working correctly

---

## 8. Assets & Media

### 8.1 Images 🔴 CRITICAL

- [ ] **All images load**
  - No broken images (404s)
  - All paths correct
  - No missing assets

- [ ] **Image optimization working**
  - WebP/AVIF formats generated
  - Responsive images load
  - Next.js Image component used

- [ ] **Image sizes appropriate**
  - No unnecessarily large images
  - Optimized for web
  - Compressed properly

### 8.2 Fonts 🟡 IMPORTANT

- [ ] **Custom fonts load**
  - Feu de camp Timber loads
  - No FOUT (Flash of Unstyled Text)
  - Fallback fonts specified

- [ ] **Font files accessible**
  - Webfont files load
  - Correct CORS headers
  - No 404s

### 8.3 Other Assets 🟡 IMPORTANT

- [ ] **Favicon loads**
  - All sizes present
  - ICO file works
  - PNG files work
  - Displays in browser tab

- [ ] **Videos load**
  - All video files accessible
  - Correct format support
  - No buffering issues

- [ ] **SVGs render correctly**
  - All SVG graphics display
  - No rendering issues
  - Colors correct

---

## 9. Environment Configuration

### 9.1 Environment Variables 🔴 CRITICAL

In Netlify Dashboard (or `.env.production`):

- [ ] **NEXT_PUBLIC_GA_ID set**
  - Value: `G-E00NWTHP4Q`
  
- [ ] **NEXT_PUBLIC_SITE_URL set**
  - Production URL (e.g., `https://prosperxo.com`)
  
- [ ] **NEXT_PUBLIC_SITE_NAME set**
  - Value: `Prosper XO`

- [ ] **NODE_VERSION set**
  - Value: `18.0.0`

- [ ] **All required vars present**
  - No missing variables
  - All values correct

### 9.2 Build Configuration 🔴 CRITICAL

In Netlify (or `netlify.toml`):

- [ ] **Build command correct**
  - Command: `npm run build`

- [ ] **Publish directory correct**
  - Directory: `.next`

- [ ] **Node version correct**
  - Version: `18.0.0`

- [ ] **Redirects configured**
  - HTML redirects working
  - URL structure preserved

---

## 10. Content & Copy

### 10.1 Content Accuracy 🟡 IMPORTANT

- [ ] **All text correct**
  - No typos
  - Grammar correct
  - Terminology consistent

- [ ] **All links work**
  - Internal links correct
  - External links open
  - No 404s

- [ ] **Contact information current**
  - Email addresses correct
  - Social links current
  - Phone numbers correct (if any)

### 10.2 Legal & Compliance 🟡 IMPORTANT

- [ ] **Privacy policy accessible**
  - Link in footer
  - Content up to date

- [ ] **Terms of use accessible**
  - Link available
  - Content current

- [ ] **Cookie consent** (if applicable)
  - Banner displays correctly
  - Preferences saved

---

## 11. Accessibility

### 11.1 Basic Accessibility 🟡 IMPORTANT

- [ ] **Color contrast sufficient**
  - Text readable
  - WCAG AA compliance
  - Test with contrast checker

- [ ] **Images have alt text**
  - All images have descriptive alt
  - Decorative images use alt=""

- [ ] **Keyboard navigation works**
  - Can tab through all links
  - Focus visible
  - No keyboard traps

- [ ] **Skip to content link present**
  - Hidden until focused
  - Works correctly

### 11.2 ARIA & Semantics 🟢 RECOMMENDED

- [ ] **Semantic HTML used**
  - Proper heading hierarchy
  - Landmarks used (nav, main, footer)
  - Lists structured correctly

- [ ] **ARIA labels present** (where needed)
  - Buttons labeled
  - Forms labeled
  - Complex widgets labeled

---

## 12. Backup & Rollback

### 12.1 Backups 🔴 CRITICAL

- [ ] **Git repository backed up**
  - Latest code pushed to GitHub
  - All branches synchronized
  - Tags created if needed

- [ ] **Content backed up**
  - Blog posts exported
  - Images backed up
  - CMS config saved

- [ ] **Environment vars documented**
  - All variables listed
  - Values recorded securely

### 12.2 Rollback Plan 🔴 CRITICAL

- [ ] **Previous deploy identified**
  - Know which deploy to rollback to
  - Have deploy ID ready

- [ ] **Rollback procedure documented**
  - Steps written down
  - Team knows how to rollback
  - Contact info available

---

## 13. Post-Deployment Preparation

### 13.1 Monitoring Setup 🟡 IMPORTANT

- [ ] **Uptime monitoring ready**
  - Service configured (if using)
  - Alerts set up

- [ ] **Error tracking ready**
  - Know how to check Netlify logs
  - Browser console monitoring plan

- [ ] **Analytics dashboard ready**
  - GA dashboard accessible
  - Real-time view bookmarked

### 13.2 Communication Plan 🟡 IMPORTANT

- [ ] **Team notified of deployment**
  - Schedule communicated
  - Roles assigned
  - Contact info shared

- [ ] **Stakeholders informed**
  - Maintenance window announced
  - Timeline shared

- [ ] **Status updates planned**
  - Update schedule defined
  - Communication channels ready

---

## 14. Final Verification

### 14.1 Production Build Test 🔴 CRITICAL

**DO THIS LAST before deploying:**

```bash
# Complete clean build
rm -rf .next .contentlayer node_modules
npm install
npm run build
npm run start
```

Then test:

- [ ] **Site loads at localhost:3000**
- [ ] **Click through all pages**
- [ ] **Test all interactive features**
- [ ] **Check console for errors**
- [ ] **Verify performance is good**
- [ ] **Test mobile view**

### 14.2 Sign-Off 🔴 CRITICAL

- [ ] **Technical lead approval**
  - Name: ________________
  - Date: ________________

- [ ] **Project manager approval**
  - Name: ________________
  - Date: ________________

- [ ] **All critical items complete**
  - Review entire checklist
  - All 🔴 items checked

---

## Checklist Summary

### Completion Status

Count your checkmarks:

- **Critical items (🔴):** ____ / ____ complete
- **Important items (🟡):** ____ / ____ complete
- **Recommended items (🟢):** ____ / ____ complete

### Go / No-Go Decision

**PROCEED WITH DEPLOYMENT if:**
- ✅ ALL Critical items (🔴) complete
- ✅ > 90% Important items (🟡) complete
- ✅ Technical and PM sign-off obtained

**DO NOT PROCEED if:**
- ❌ Any Critical items incomplete
- ❌ < 80% Important items complete
- ❌ Sign-offs not obtained

---

## Issues Found

**Document any issues discovered during checklist completion:**

| # | Issue | Severity | Status | Resolution |
|---|-------|----------|--------|------------|
| 1 |       |          |        |            |
| 2 |       |          |        |            |
| 3 |       |          |        |            |

---

## Notes

**Additional notes or observations:**

---

## Next Steps

After completing this checklist:

1. ✅ **All items checked** → Proceed to [Deployment Guide](./DEPLOYMENT_GUIDE.md)
2. ❌ **Items failed** → Fix issues and re-run checklist
3. 📝 **Document lessons learned** for next deployment

---

**Checklist completed by:** ________________  
**Date:** ________________  
**Time:** ________________

---

*This checklist should be completed before EVERY production deployment.*