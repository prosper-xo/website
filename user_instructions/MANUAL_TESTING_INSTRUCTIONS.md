# Manual Testing Instructions for Prosper XO Performance Testing

This document provides step-by-step instructions for completing the manual testing portions of Phase 3 (Performance Testing and Optimization).

---

## Prerequisites

Before starting, ensure:
- ✅ Production server is running (`npm run start`)
- ✅ Server is accessible at `http://localhost:3000`
- ✅ You have Chrome browser installed
- ✅ You have access to mobile devices (optional but recommended)

---

## Part 1: Running Lighthouse Audits

### Step 1: Open Chrome DevTools

1. Navigate to `http://localhost:3000` in Chrome browser
2. Right-click anywhere on the page
3. Select "Inspect" (or press `Cmd+Option+I` on Mac, `Ctrl+Shift+I` on Windows)
4. Click the "Lighthouse" tab in DevTools

### Step 2: Configure Lighthouse

1. **Mode**: Select "Navigation"
2. **Categories**: Check all four boxes:
   - ☑️ Performance
   - ☑️ Accessibility
   - ☑️ Best Practices
   - ☑️ SEO
3. **Device**: Select "Desktop" first (we'll run mobile separately)
4. **Throttling**: Leave as default

### Step 3: Run Audits on Key Pages

Run Lighthouse on each of these pages and record the scores:

#### Pages to Test:

1. **Splash Page** - `http://localhost:3000/`
2. **Welcome Page** - `http://localhost:3000/welcome`
3. **Blog Listing** - `http://localhost:3000/blog`
4. **Blog Post** - `http://localhost:3000/blog/test-post-from-cms-admin-panel`
5. **Team Page** - `http://localhost:3000/team`
6. **Why Prosper** - `http://localhost:3000/why-prosper`
7. **Events** - `http://localhost:3000/events`
8. **Ethos** - `http://localhost:3000/ethos`
9. **Get Involved** - `http://localhost:3000/get-involved`

#### For Each Page:

1. Navigate to the page URL
2. Click "Analyze page load" in Lighthouse
3. Wait for the audit to complete (30-60 seconds)
4. Record the scores:
   - Performance: __/100
   - Accessibility: __/100
   - Best Practices: __/100
   - SEO: __/100
5. Click "View Treemap" to see bundle breakdown (optional)
6. Note any critical issues in "Opportunities" or "Diagnostics"

### Step 4: Run Mobile Audits

1. Change Device to "Mobile" in Lighthouse settings
2. Repeat audits for at least these key pages:
   - Splash page (`/`)
   - Welcome page (`/welcome`)
   - Blog listing (`/blog`)

### Step 5: Document Results

Create a file `docs/LIGHTHOUSE_RESULTS.md` with your findings:

```markdown
# Lighthouse Audit Results

## Desktop Results

### Splash Page (/)
- Performance: __/100
- Accessibility: __/100
- Best Practices: __/100
- SEO: __/100
- **Core Web Vitals:**
  - LCP: __ s
  - CLS: __
  - TBT: __ ms

[Repeat for each page]

## Mobile Results

[Same format for mobile tests]

## Issues Found

### Critical Issues
- [List any issues with score impact > 10 points]

### Minor Issues
- [List issues with score impact < 10 points]

## Recommendations
- [Your recommendations based on findings]
```

---

## Part 2: Cross-Browser Testing

### Browsers to Test

Test the site in these browsers:

1. ✅ Chrome (already tested via Lighthouse)
2. ⬜ Firefox (latest version)
3. ⬜ Safari (macOS only)
4. ⬜ Edge (latest version)

### Pages to Test in Each Browser

Test at minimum:
- Splash page (`/`)
- Welcome page (`/welcome`)
- Blog page (`/blog`)
- One content page (your choice)

### What to Check

For each browser, verify:

#### Visual Rendering
- [ ] Rainbow gradient background displays correctly
- [ ] Images load properly
- [ ] SVG text graphics render correctly
- [ ] Custom fonts load (Feu de camp Timber, Poppins)
- [ ] Colors match across browsers
- [ ] Layout is consistent

#### Interactive Features
- [ ] Video player controls work
- [ ] Hamburger menu opens/closes
- [ ] Navigation links work
- [ ] Buttons are clickable
- [ ] Social media links open
- [ ] Forms function correctly (if any)

#### Console Errors
- [ ] Open browser console (F12)
- [ ] Note any errors or warnings
- [ ] Check if errors affect functionality

### Documenting Browser Issues

If you find browser-specific issues, document them:

```markdown
## Browser: [Browser Name]

### Issue: [Brief Description]
- **Severity:** Critical / High / Medium / Low
- **Page:** [Page where issue occurs]
- **Description:** [Detailed description]
- **Steps to Reproduce:**
  1. [Step 1]
  2. [Step 2]
- **Expected:** [What should happen]
- **Actual:** [What actually happens]
- **Screenshot:** [Attach if possible]
```

---

## Part 3: Mobile Device Testing

### Real Device Testing (Recommended)

If you have access to mobile devices, test on:

1. **iOS Device** (iPhone)
   - Test in Safari
   - Test in Chrome (if installed)
   
2. **Android Device**
   - Test in Chrome
   - Test in Samsung Internet (if available)

### Mobile Testing Checklist

For each device:

#### Visual & Layout
- [ ] Site is responsive
- [ ] Text is readable (not too small)
- [ ] Images scale correctly
- [ ] No horizontal scrolling
- [ ] Navigation is usable
- [ ] Hamburger menu works

#### Touch Interactions
- [ ] Buttons are easily tappable (min 48x48px)
- [ ] Links work with touch
- [ ] Scrolling is smooth
- [ ] Pinch-to-zoom works (if enabled)
- [ ] No accidental clicks

#### Performance
- [ ] Pages load quickly (< 3 seconds)
- [ ] Animations are smooth
- [ ] Video plays correctly
- [ ] No lag when scrolling

#### Functionality
- [ ] All links work
- [ ] Navigation works
- [ ] Video player works
- [ ] Social links open correctly

### Chrome DevTools Mobile Emulation (Alternative)

If you don't have physical devices:

1. Open Chrome DevTools (`Cmd+Option+I` or `Ctrl+Shift+I`)
2. Click the device toolbar icon (or press `Cmd+Shift+M` / `Ctrl+Shift+M`)
3. Select device from dropdown:
   - iPhone 12 Pro
   - iPhone SE
   - Samsung Galaxy S20
   - iPad Air
4. Test in both portrait and landscape orientations
5. Check "Responsive" mode with various screen sizes

---

## Part 4: Accessibility Testing

### Keyboard Navigation Test

1. **Close all other browsers/tabs**
2. Navigate to `http://localhost:3000`
3. **Use only keyboard** (no mouse):
   - Press `Tab` to navigate forward
   - Press `Shift+Tab` to navigate backward
   - Press `Enter` to activate links/buttons
   - Press `Esc` to close modals

### Keyboard Testing Checklist

- [ ] Can reach all interactive elements with Tab
- [ ] Focus indicator is visible on all elements
- [ ] Tab order is logical (top to bottom, left to right)
- [ ] Can open hamburger menu with keyboard
- [ ] Can close hamburger menu with keyboard (Esc)
- [ ] Can activate all buttons with Enter
- [ ] Can navigate all links with Tab + Enter
- [ ] No keyboard traps (can always Tab away)

### Screen Reader Testing (Optional)

If you have access to screen readers:

**macOS (VoiceOver):**
1. Press `Cmd+F5` to enable VoiceOver
2. Navigate the site with VoiceOver on
3. Verify all content is announced
4. Check image alt text is read
5. Verify heading structure makes sense

**Windows (NVDA - Free):**
1. Download NVDA from nvaccess.org
2. Install and launch NVDA
3. Navigate the site
4. Verify content is properly announced

### Color Contrast Check

1. Use Chrome DevTools Lighthouse (already includes contrast check)
2. Or use online tool: https://webaim.org/resources/contrastchecker/
3. Test key color combinations:
   - Text on rainbow gradient background
   - Button text on button backgrounds
   - Link colors vs. background

---

## Part 5: Network Performance Testing

### Using Chrome DevTools Network Tab

1. Open Chrome DevTools
2. Click "Network" tab
3. Navigate to each page
4. Record these metrics:

#### Metrics to Record

| Page | Requests | Total Size | Load Time | DOMContentLoaded | Load |
|------|----------|------------|-----------|------------------|------|
| `/` | | | | | |
| `/welcome` | | | | | |
| `/blog` | | | | | |

### Network Throttling Test

1. In Network tab, find the throttling dropdown (says "No throttling")
2. Select "Slow 3G"
3. Test key pages:
   - Splash page
   - Welcome page
   - Blog page
4. **Target:** Pages should load in < 3 seconds on Slow 3G

### Cache Testing

1. **First Load:**
   - Clear cache: DevTools → Network → Check "Disable cache"
   - Hard refresh: `Cmd+Shift+R` or `Ctrl+Shift+R`
   - Record load time

2. **Cached Load:**
   - Uncheck "Disable cache"
   - Refresh page normally (`Cmd+R` or `Ctrl+R`)
   - Record load time
   - Should be significantly faster

---

## Part 6: Video Performance Testing

### Video Player Testing

Test the video player on the splash page:

1. **Autoplay Behavior:**
   - [ ] Video loads correctly
   - [ ] Poster image shows before play
   - [ ] Controls are visible

2. **Playback:**
   - [ ] Play button works
   - [ ] Pause button works
   - [ ] Seek bar works
   - [ ] Volume control works
   - [ ] Fullscreen works

3. **Performance:**
   - [ ] Video doesn't block page load
   - [ ] No stuttering during playback
   - [ ] Acceptable quality

4. **Mobile:**
   - [ ] Video plays on mobile devices
   - [ ] Controls are touch-friendly
   - [ ] No orientation issues

---

## Part 7: SEO Verification

### Meta Tags Check

For each page, view page source (`Cmd+U` or `Ctrl+U`) and verify:

1. **Title Tag:**
   ```html
   <title>Page Title | Prosper XO</title>
   ```
   - [ ] Present
   - [ ] Unique per page
   - [ ] Under 60 characters

2. **Meta Description:**
   ```html
   <meta name="description" content="...">
   ```
   - [ ] Present
   - [ ] Unique per page
   - [ ] 120-160 characters

3. **Open Graph Tags:**
   ```html
   <meta property="og:title" content="...">
   <meta property="og:description" content="...">
   <meta property="og:image" content="...">
   <meta property="og:url" content="...">
   ```
   - [ ] All present
   - [ ] Correct values

4. **Twitter Cards:**
   ```html
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="...">
   <meta name="twitter:description" content="...">
   <meta name="twitter:image" content="...">
   ```
   - [ ] All present
   - [ ] Correct values

### Social Media Preview Testing

Test how pages look when shared:

1. **Facebook Debugger:**
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter page URL
   - Click "Debug"
   - Verify preview looks correct

2. **Twitter Card Validator:**
   - Visit: https://cards-dev.twitter.com/validator
   - Enter page URL
   - Verify preview looks correct

3. **LinkedIn Post Inspector:**
   - Visit: https://www.linkedin.com/post-inspector/
   - Enter page URL
   - Verify preview looks correct

---

## Part 8: Console Error Investigation

### Checking Console Errors

1. Open browser console in Chrome
2. Navigate to each page
3. Look for errors (red text)
4. Document each error:

```markdown
### Console Error: [Error Type]
- **Page:** [Page URL]
- **Error Message:** [Full error message]
- **Impact:** [Does it affect functionality?]
- **Frequency:** [Every load / Sometimes / Rare]
- **Possible Cause:** [Your analysis]
```

### Known Issues

These errors are already known and may be environment-specific:

1. **ERR_CONNECTION_REFUSED**
   - Likely related to external services
   - Check if it persists in production

2. **400 Bad Request**
   - Third-party script issue
   - Monitor in production environment

---

## Part 9: Form Testing (if applicable)

If there are any forms on the site:

### Form Functionality
- [ ] All form fields are accessible
- [ ] Labels are associated with inputs
- [ ] Required fields are marked
- [ ] Validation works correctly
- [ ] Error messages are clear
- [ ] Success messages appear
- [ ] Form submits correctly

### Form Accessibility
- [ ] Can navigate forms with Tab
- [ ] Error messages announced to screen readers
- [ ] Required fields have aria-required
- [ ] Input types are semantic (email, tel, etc.)

---

## Reporting Template

### Quick Summary Report

After completing all tests, create a summary:

```markdown
# Manual Testing Summary - [Date]

## Overall Status: ✅ Pass / ⚠️ Issues Found / ❌ Critical Issues

## Test Results

### Lighthouse Scores (Average)
- Performance: __/100
- Accessibility: __/100
- Best Practices: __/100
- SEO: __/100

### Cross-Browser Compatibility
- Chrome: ✅ / ⚠️ / ❌
- Firefox: ✅ / ⚠️ / ❌
- Safari: ✅ / ⚠️ / ❌
- Edge: ✅ / ⚠️ / ❌

### Mobile Testing
- iOS: ✅ / ⚠️ / ❌
- Android: ✅ / ⚠️ / ❌

### Accessibility
- Keyboard Navigation: ✅ / ⚠️ / ❌
- Screen Reader: ✅ / ⚠️ / ❌ / N/A
- Color Contrast: ✅ / ⚠️ / ❌

### Performance
- Desktop Load Time: __ seconds
- Mobile Load Time: __ seconds
- Slow 3G Load Time: __ seconds

## Critical Issues
[List any critical issues that must be fixed before launch]

## Non-Critical Issues
[List issues that can be addressed post-launch]

## Recommendations
[Your recommendations for improvements]

## Sign-Off
- Tester Name: __________
- Date: __________
- Approved for Launch: Yes / No (with fixes)
```

---

## Questions or Issues?

If you encounter any problems during testing:

1. Document the issue clearly
2. Include screenshots if possible
3. Note the browser, device, and OS
4. Try to reproduce the issue
5. Add to the issue list in your report

---

## Next Steps After Testing

Once all manual testing is complete:

1. Compile all test results
2. Create a comprehensive test report
3. Fix any critical issues found
4. Re-test after fixes
5. Prepare for deployment

---

**Good luck with testing! The site is already in excellent shape based on automated analysis.**