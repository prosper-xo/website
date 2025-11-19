# Prosper XO - Deployment Guide

**Version:** 1.0  
**Last Updated:** November 7, 2025  
**Target Platform:** Netlify  
**Framework:** Next.js 14+

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Environment Setup](#environment-setup)
4. [Netlify Configuration](#netlify-configuration)
5. [Deployment Steps](#deployment-steps)
6. [Custom Domain Setup](#custom-domain-setup)
7. [SSL/HTTPS Configuration](#ssl-https-configuration)
8. [Post-Deployment Verification](#post-deployment-verification)
9. [Troubleshooting](#troubleshooting)
10. [Rollback Procedures](#rollback-procedures)
11. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Prerequisites

### Required Accounts
- ✅ **GitHub Account** - Repository hosting
- ✅ **Netlify Account** - Deployment platform
- ✅ **Google Analytics** - Analytics tracking (optional but recommended)
- ✅ **Domain Registrar Access** - For custom domain setup (if applicable)

### Local Requirements
- ✅ **Node.js** - v18.0.0 or higher
- ✅ **npm** - v9.0.0 or higher
- ✅ **Git** - Latest version

### Repository Requirements
- ✅ Code pushed to GitHub repository
- ✅ All sensitive data removed from repository
- ✅ `.gitignore` properly configured
- ✅ `.env.example` template created

---

## Pre-Deployment Checklist

### Code Quality Checks

```bash
# 1. Type checking
npm run type-check

# 2. Linting
npm run lint

# 3. Run all tests
npm run test

# 4. Build production bundle
npm run build

# 5. Test production build locally
npm run start
```

**All commands must succeed without errors before proceeding.**

### Critical Verifications

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Blog posts display properly
- [ ] Images load and optimize correctly
- [ ] CMS admin panel accessible at `/cms`
- [ ] Mobile responsive design works
- [ ] No console errors in browser
- [ ] All links are working (internal and external)
- [ ] Forms submit correctly (if applicable)
- [ ] Analytics tracking configured
- [ ] SEO metadata complete on all pages
- [ ] Favicon loads correctly
- [ ] Social sharing preview cards work

### Performance Checks

- [ ] Lighthouse Performance Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Bundle size optimized (< 200 kB per page)

### Security Checks

- [ ] No API keys or secrets in repository
- [ ] `.env` files not committed
- [ ] Security headers configured in `netlify.toml`
- [ ] HTTPS will be enforced
- [ ] Content Security Policy configured

---

## Environment Setup

### 1. Create `.env.local` for Local Testing

Copy the example file:

```bash
cp .env.example .env.local
```

### 2. Configure Environment Variables

Edit `.env.local` with your values:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-E00NWTHP4Q

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Prosper XO
```

### 3. Test with Environment Variables

```bash
# Start development server
npm run dev

# Verify analytics are working in browser console
```

---

## Netlify Configuration

### Option 1: Deploy via Netlify Web UI (Recommended for First Deploy)

#### Step 1: Connect Repository

1. Log in to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select the repository: `your-username/prosper-xo-website`
6. Approve the installation

#### Step 2: Configure Build Settings

**Build Settings:**
```
Base directory: (leave empty)
Build command: npm run build
Publish directory: .next
```

**Advanced Build Settings:**
- Click **"Show advanced"**
- Add **Node version:**
  - Key: `NODE_VERSION`
  - Value: `18.0.0`

#### Step 3: Add Environment Variables

1. Before deploying, click **"Add environment variables"**
2. Add the following variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_GA_ID` | `G-E00NWTHP4Q` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Your production URL |
| `NEXT_PUBLIC_SITE_NAME` | `Prosper XO` | Site name for metadata |
| `NODE_VERSION` | `18.0.0` | Node.js version |
| `NPM_VERSION` | `9.0.0` | npm version |

**Important:** 
- Use your staging URL initially (e.g., `https://prosper-xo.netlify.app`)
- Update to production URL after custom domain setup

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (typically 2-5 minutes)
3. Monitor the build logs for errors

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Deploy to production
netlify deploy --prod

# Or deploy to preview first
netlify deploy
```

---

## Deployment Steps

### Initial Deployment

#### 1. Build Verification

Before deploying, verify your production build:

```bash
# Clean build
rm -rf .next .contentlayer

# Fresh build
npm run build

# Test production server
npm run start

# Open http://localhost:3000 and verify everything works
```

#### 2. Push to GitHub

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Production-ready build: Next.js conversion complete"

# Push to main branch (or your production branch)
git push origin main
```

#### 3. Monitor Netlify Build

1. Go to your Netlify dashboard
2. Navigate to **"Deploys"** tab
3. Watch the build progress in real-time
4. Check the build log for any errors or warnings

#### 4. Verify Deploy Preview

Once build completes:

1. Click on the deploy preview URL (e.g., `https://random-id.netlify.app`)
2. Test all critical functionality
3. Verify analytics are working
4. Check CMS admin access

### Subsequent Deployments

Netlify auto-deploys when you push to your repository:

```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push origin main

# Netlify automatically detects and deploys
```

#### Deploy Previews

For testing before merging to main:

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Push to GitHub:
   ```bash
   git push origin feature/your-feature
   ```

3. Create a Pull Request on GitHub

4. Netlify automatically creates a deploy preview with a unique URL

5. Test the preview before merging

---

## Custom Domain Setup

### Prerequisites

- Domain registered and accessible
- DNS management access
- SSL certificate will be auto-generated by Netlify

### Step 1: Add Domain in Netlify

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `prosperxo.com`)
4. Click **"Verify"**

### Step 2: Configure DNS

Netlify will provide DNS configuration instructions. You have two options:

#### Option A: Use Netlify DNS (Recommended)

1. Click **"Use Netlify DNS"**
2. Netlify will provide nameserver addresses
3. Update nameservers at your domain registrar:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
4. Wait for DNS propagation (can take 24-48 hours)

#### Option B: Keep External DNS

Add these records to your DNS provider:

**For apex domain (prosperxo.com):**
```
Type: A
Name: @ (or leave blank)
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

**Verification:**
```bash
# Check DNS propagation
nslookup prosperxo.com

# Or use online tools
# https://www.whatsmydns.net/
```

### Step 3: Configure Domain Settings

1. In Netlify, go to **Domain settings**
2. Set **Primary domain** (e.g., `https://prosperxo.com`)
3. Enable **"Force HTTPS"** (redirect HTTP to HTTPS)
4. Enable **"Force WWW"** or **"Force non-WWW"** as preferred

### Step 4: Update Environment Variables

Update the site URL in Netlify environment variables:

```
NEXT_PUBLIC_SITE_URL=https://prosperxo.com
```

Then trigger a new deploy:
```bash
# In Netlify UI: Deploys → Trigger deploy → Deploy site
```

---

## SSL/HTTPS Configuration

Netlify provides free automatic SSL certificates via Let's Encrypt.

### Automatic SSL Setup

1. After adding your custom domain, Netlify automatically provisions an SSL certificate
2. This typically takes 5-30 minutes
3. You'll see **"HTTPS enabled"** when ready

### Force HTTPS

In Netlify:
1. Go to **Domain settings** → **HTTPS**
2. Enable **"Force HTTPS"**
3. All HTTP requests will redirect to HTTPS

### Verify SSL Certificate

```bash
# Check certificate
curl -vI https://prosperxo.com

# Or use online tools
# https://www.ssllabs.com/ssltest/
```

---

## Post-Deployment Verification

### Automated Checks

```bash
# Check if site is live
curl -I https://your-domain.com

# Check specific pages
curl https://your-domain.com/welcome
curl https://your-domain.com/blog
```

### Manual Verification Checklist

#### Site Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] All pages display without errors
- [ ] Blog listing shows posts
- [ ] Individual blog posts load
- [ ] CMS admin accessible at `/cms`
- [ ] Images load and are optimized
- [ ] Videos play correctly
- [ ] Forms submit successfully
- [ ] Mobile navigation works

#### Performance
- [ ] Run Lighthouse audit (target score > 90)
- [ ] Check Core Web Vitals
- [ ] Test loading speed from different locations
- [ ] Verify CDN is serving assets

#### SEO & Metadata
- [ ] Check social media preview cards (use [Facebook Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Verify `robots.txt` is accessible
- [ ] Check `sitemap.xml`
- [ ] Test canonical URLs
- [ ] Verify meta descriptions on all pages

#### Analytics
- [ ] Google Analytics tracking working
- [ ] Real-time data shows in GA dashboard
- [ ] Page views recorded correctly
- [ ] Events tracking (if configured)

#### Security
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Security headers present (check with [SecurityHeaders.com](https://securityheaders.com/))
- [ ] Content Security Policy working
- [ ] No mixed content warnings

#### CMS
- [ ] Login to CMS admin at `/cms`
- [ ] Create a test blog post
- [ ] Verify post appears on blog listing
- [ ] Test post editing
- [ ] Test draft functionality

### Browser Testing

Test in multiple browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Device Testing

- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

---

## Troubleshooting

### Common Issues and Solutions

#### Build Fails

**Symptom:** Netlify build fails with errors

**Solutions:**

1. **Check build logs in Netlify:**
   - Look for the first error message
   - Common issues: dependency problems, TypeScript errors

2. **Verify local build works:**
   ```bash
   npm run build
   ```

3. **Clear Netlify cache:**
   - In Netlify UI: Site settings → Build & deploy → Clear cache and retry deploy

4. **Check Node version:**
   - Verify `NODE_VERSION` environment variable is set to `18.0.0`

5. **Dependency issues:**
   ```bash
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

#### Site Not Loading

**Symptom:** 404 errors or blank pages

**Solutions:**

1. **Check publish directory:**
   - Verify in `netlify.toml`: `publish = ".next"`

2. **Check redirects:**
   - Review redirect rules in `netlify.toml`

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

4. **Check build output:**
   - Verify `.next` directory was created during build

#### Images Not Loading

**Symptom:** Broken images or 404s for assets

**Solutions:**

1. **Check image paths:**
   - All images should be in `/public/assets/`
   - Reference as `/assets/...` not `/public/assets/...`

2. **Verify Next.js Image optimization:**
   - Check `next.config.js` image configuration

3. **Check file extensions:**
   - Case-sensitive in production (use lowercase)

#### CMS Login Issues

**Symptom:** Can't access or login to CMS

**Solutions:**

1. **Enable Netlify Identity:**
   - Site settings → Identity → Enable Identity

2. **Check CMS config:**
   - Verify `cms/config.yml` is correctly configured

3. **Invite users:**
   - Identity → Invite users
   - Check spam folder for invitation email

4. **Clear browser cache and cookies**

#### Analytics Not Working

**Symptom:** No data in Google Analytics

**Solutions:**

1. **Verify GA_ID:**
   - Check environment variable is set correctly
   - Format: `G-XXXXXXXXXX`

2. **Check browser console:**
   - Look for GA script loading errors

3. **Disable ad blockers:**
   - Test with ad blockers disabled

4. **Wait for data:**
   - GA can take 24-48 hours to show data

#### DNS/Domain Issues

**Symptom:** Domain not resolving or SSL errors

**Solutions:**

1. **Check DNS propagation:**
   ```bash
   nslookup your-domain.com
   ```

2. **Verify DNS records:**
   - A record: `75.2.60.5`
   - CNAME record: `your-site.netlify.app`

3. **Wait for propagation:**
   - DNS changes can take 24-48 hours

4. **Force SSL renewal:**
   - Domain settings → HTTPS → Renew certificate

#### Performance Issues

**Symptom:** Slow loading times

**Solutions:**

1. **Enable Netlify CDN:**
   - Automatically enabled, verify in headers

2. **Optimize images:**
   - Use Next.js Image component
   - Verify formats: WebP, AVIF

3. **Check bundle size:**
   ```bash
   npm run build
   # Look at build output for bundle sizes
   ```

4. **Enable compression:**
   - Verify in `netlify.toml`: `compress = true`

---

## Rollback Procedures

### Emergency Rollback

If critical issues occur after deployment:

#### Method 1: Netlify UI (Fastest)

1. Go to **Deploys** tab
2. Find the last known good deploy
3. Click the three dots (⋮)
4. Select **"Publish deploy"**
5. Confirm rollback

**This takes effect immediately** (usually < 1 minute)

#### Method 2: Git Revert

1. Find the commit to revert to:
   ```bash
   git log --oneline
   ```

2. Revert to that commit:
   ```bash
   git revert HEAD
   # Or specific commit
   git revert <commit-hash>
   ```

3. Push to trigger new deploy:
   ```bash
   git push origin main
   ```

### Rollback Verification

After rollback:

1. **Clear CDN cache:**
   - Deploys → Clear cache

2. **Test critical paths:**
   - Homepage
   - Blog
   - Navigation
   - CMS admin

3. **Monitor logs:**
   - Check for any new errors

### Post-Rollback Actions

1. **Investigate the issue:**
   - Review build logs
   - Check error reports
   - Test locally

2. **Document the problem:**
   - Create GitHub issue
   - Note symptoms and cause

3. **Fix and test:**
   - Fix the issue locally
   - Test thoroughly
   - Deploy to preview first

4. **Redeploy when ready:**
   - Merge PR
   - Monitor deployment

---

## Monitoring & Maintenance

### Daily Monitoring

#### Automated Monitoring

Set up monitoring tools:

1. **Netlify:**
   - Deploys → View deploy logs
   - Analytics → Performance metrics

2. **Google Analytics:**
   - Real-time dashboard
   - Check traffic patterns

3. **Uptime Monitor** (Optional):
   - UptimeRobot
   - Pingdom
   - StatusCake

#### Manual Checks

- [ ] Check site is accessible
- [ ] Verify no console errors
- [ ] Test critical user flows
- [ ] Check analytics data
- [ ] Monitor CMS functionality

### Weekly Maintenance

- [ ] Review analytics trends
- [ ] Check for broken links
- [ ] Review security updates
- [ ] Test backup/restore procedures
- [ ] Update dependencies if needed:
  ```bash
  npm outdated
  npm audit
  ```

### Monthly Maintenance

- [ ] Full site audit
- [ ] Performance testing
- [ ] Security scanning
- [ ] Content review
- [ ] Backup verification
- [ ] Update documentation
- [ ] Review and optimize images
- [ ] Check for 404 errors in logs

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update minor/patch versions
npm update

# Major version updates (test thoroughly!)
npm install <package>@latest

# Security updates
npm audit fix

# Test after updates
npm run build
npm run test
```

### Performance Monitoring

Track these metrics in Google Analytics:

- **Page Load Time:** Target < 3s
- **First Contentful Paint:** Target < 1.5s
- **Largest Contentful Paint:** Target < 2.5s
- **Time to Interactive:** Target < 3.5s
- **Cumulative Layout Shift:** Target < 0.1

### Security Monitoring

- [ ] Regular security audits:
  ```bash
  npm audit
  ```

- [ ] Monitor Netlify security alerts
- [ ] Check for vulnerable dependencies
- [ ] Review access logs for suspicious activity
- [ ] Keep Node.js version updated

---

## Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Contentlayer Documentation](https://contentlayer.dev/docs)
- [Decap CMS Documentation](https://decapcms.org/docs/)

### Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [SecurityHeaders.com](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

### Support
- **Netlify Support:** support@netlify.com
- **Project Issues:** GitHub Issues in your repository
- **Community:** Netlify Community Forum

---

## Conclusion

This deployment guide covers the complete process of deploying Prosper XO to Netlify. Follow each section carefully, and refer to the troubleshooting section if issues arise.

**Remember:**
- Always test locally before deploying
- Use deploy previews for testing changes
- Monitor deployments and quickly rollback if needed
- Keep documentation updated
- Regular maintenance ensures optimal performance

**Next Steps:**
1. Review the [Migration Plan](./MIGRATION_PLAN.md)
2. Complete the pre-deployment checklist
3. Execute deployment following this guide
4. Perform post-deployment verification
5. Set up monitoring and maintenance schedule

---

*Last updated: November 7, 2025*