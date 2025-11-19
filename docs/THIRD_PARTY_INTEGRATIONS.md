# Third-Party Integrations - Prosper XO

This document outlines all third-party services integrated into the Prosper XO website.

## Overview

The following third-party services are integrated:
- Google Analytics 4 (for website analytics)
- Netlify Identity Widget (for CMS authentication)
- External links to Google Forms (for surveys)
- Social media links (Instagram, TikTok, X/Twitter, LinkedIn, YouTube)

---

## Google Analytics 4

### Implementation
- **Package**: `@next/third-parties` (v14)
- **Tracking ID**: `G-E00NWTHP4Q`
- **Location**: [`src/app/layout.tsx`](../src/app/layout.tsx)

### How It Works
Google Analytics is integrated using Next.js's recommended approach with the `@next/third-parties/google` package. This provides:
- Automatic page view tracking
- Optimized script loading
- Better performance than manual script injection

### Code Example
```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

// In the layout body
<GoogleAnalytics gaId="G-E00NWTHP4Q" />
```

### Verification
- Check browser Network tab for requests to `googletagmanager.com`
- Google Analytics dashboard will show real-time data
- Use Google Analytics Debugger extension for detailed tracking

---

## Netlify Identity Widget

### Implementation
- **Purpose**: CMS (Decap CMS) authentication
- **Location**: [`src/app/layout.tsx`](../src/app/layout.tsx)
- **Script URL**: `https://identity.netlify.com/v1/netlify-identity-widget.js`

### How It Works
The Netlify Identity Widget is loaded in the `<head>` and provides authentication for the Decap CMS admin panel at `/cms`.

### Code Example
```typescript
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

### Testing
1. Navigate to `/cms` in your browser
2. Click "Login with Netlify Identity"
3. Authenticate with your Netlify account
4. You should be redirected to the CMS admin panel

---

## External Links and Forms

### Google Forms (Survey Links)
Located on the `/welcome` page:
- **Artist Survey**: `https://forms.gle/14LM4yptHkYyJiGdA`
- **Venue Survey**: `https://forms.gle/fEw3hWdYoLfSobPy7`
- **Brand Survey**: `https://forms.gle/nMoYZT6Eb5v1i7Vh7`
- **Fan Survey**: `https://forms.gle/qY3A2TAucn7S5p1t6`

All links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"` for security.

### Beta Signup
- **Location**: `/get-involved` page
- **Link**: Internal route to `/beta-signup`

### Social Media Links
Located in the footer ([`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx)):
- **Instagram**: `https://instagram.com/prosperxo`
- **TikTok**: `https://www.tiktok.com/@prosper_xo_`
- **X (Twitter)**: `https://x.com/prosperxoxoxo`
- **LinkedIn**: `https://www.linkedin.com/company/prosper-xo/`
- **YouTube**: `https://youtube.com/@prosperxo`

### Email Links (mailto:)
Team page includes email links for team members:
- `mailto:gabe@prosperxo.com`
- `mailto:lauren@prosperxo.com`
- `mailto:devin@prosperxo.com`
- `mailto:team@prosperxo.com`

---

## Environment Variables

### Setup
A `.env.example` file has been created in the project root with the following structure:

```env
# Google Analytics
# Get your tracking ID from Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Add other public environment variables here as needed
```

### Notes
- The Google Analytics ID is currently hardcoded in the layout (not sensitive)
- For production deployments, consider using environment variables
- `.env.local` is already in `.gitignore` to prevent committing secrets

---

## Performance Considerations

### Script Loading Strategy
- **Google Analytics**: Uses Next.js `@next/third-parties` for optimized loading
- **Netlify Identity**: Loaded with `strategy="afterInteractive"` to prevent blocking
- All external links use proper `rel="noopener noreferrer"` for security

### Best Practices
1. Scripts are loaded after page is interactive (`afterInteractive`)
2. External links open in new tabs to preserve user session
3. No blocking scripts that could impact page load performance
4. Social media icons use optimized SVG images

---

## Testing Checklist

- [x] Google Analytics loads correctly (check Network tab)
- [x] Netlify Identity Widget loads for CMS authentication
- [x] Survey links (Google Forms) open correctly
- [x] Social media links work and open in new tabs
- [x] Email links (mailto:) work correctly
- [x] Beta signup link navigates correctly
- [x] No console errors related to third-party scripts
- [x] All links have proper security attributes

---

## Troubleshooting

### Google Analytics Not Tracking
1. Check browser Network tab for requests to `googletagmanager.com`
2. Verify tracking ID is correct: `G-E00NWTHP4Q`
3. Check Google Analytics Real-Time reports
4. Ensure ad blockers are not blocking analytics

### Netlify Identity Issues
1. Verify Netlify site has Identity enabled
2. Check browser console for errors
3. Ensure you're testing on the correct domain (localhost or production)
4. Try clearing browser cache and cookies

### External Links Not Working
1. Verify URLs are correct and not expired (especially Google Forms)
2. Check for browser popup blockers
3. Ensure links have proper `target="_blank"` attribute

---

## Maintenance

### Regular Tasks
- **Monthly**: Verify all external links are still valid
- **Quarterly**: Review Google Analytics data and tracking
- **As Needed**: Update survey links if forms change
- **As Needed**: Update social media links if handles change

### Updating Services

#### To Update Google Analytics ID:
1. Edit [`src/app/layout.tsx`](../src/app/layout.tsx)
2. Change the `gaId` prop in `<GoogleAnalytics gaId="G-E00NWTHP4Q" />`

#### To Update Survey Links:
1. Edit [`src/app/welcome/page.tsx`](../src/app/welcome/page.tsx)
2. Update the `href` attributes in the survey button `<Link>` components

#### To Update Social Media Links:
1. Edit [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx)
2. Update the `socialLinks` array

---

## Additional Resources

- [Next.js Third-Party Libraries Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Decap CMS Documentation](https://decapcms.org/docs/intro/)

---

## Security Notes

- All external links use `rel="noopener noreferrer"` to prevent tabnabbing
- No API keys or secrets are committed to the repository
- Google Analytics tracking is public information and not sensitive
- Netlify Identity handles authentication securely via OAuth