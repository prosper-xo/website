# Preview Deployments Guide

## 🎯 Overview

Your Prosper XO website is now configured with automatic preview deployments on Netlify! This allows you to preview changes before they go live to production.

## 🚀 How It Works

### Production Deployment

- **Branch**: `main` (or your default branch)
- **URL**: https://prosperxo.com
- **When**: Automatically deployed when you merge to main

### Preview Deployments (Pull Requests)

- **Trigger**: Any pull request
- **URL**: `https://deploy-preview-[PR#]--[your-site].netlify.app`
- **When**: Automatically built for every PR
- **Purpose**: Review changes before merging

### Branch Deployments

- **Trigger**: Pushes to non-production branches (if enabled)
- **URL**: `https://[branch-name]--[your-site].netlify.app`
- **When**: Automatically built for specific branches
- **Purpose**: Test features in development

### Staging Deployment (Optional)

- **Branch**: `staging`
- **URL**: `https://staging--[your-site].netlify.app`
- **When**: Pushed to staging branch
- **Purpose**: Final testing before production

## 📝 Workflow Examples

### Example 1: Adding a New Blog Post

1. **Create a feature branch**:

   ```bash
   git checkout -b add-new-blog-post
   ```

2. **Add your blog post**:

   ```bash
   # Add your post to _posts/
   vim _posts/2025-10-08-my-new-post.md
   git add _posts/2025-10-08-my-new-post.md
   git commit -m "Add new blog post"
   git push origin add-new-blog-post
   ```

3. **Create a Pull Request** on GitHub

   - Netlify will automatically build a preview
   - You'll see a comment on your PR with the preview URL
   - Click the URL to review your changes

4. **Review and merge**:
   - Check the preview deployment
   - If everything looks good, merge the PR
   - Your changes automatically deploy to production

### Example 2: Testing Major Changes

1. **Use the staging branch**:

   ```bash
   git checkout -b staging
   # Make your changes
   git push origin staging
   ```

2. **Review on staging URL**:

   - Visit `https://staging--[your-site].netlify.app`
   - Test thoroughly

3. **Merge to main when ready**:
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```

## 🔧 Netlify Dashboard Setup

### Enable Deploy Previews

1. Go to **Netlify Dashboard** → Your Site → **Site settings**
2. Navigate to **Build & deploy** → **Deploy contexts**
3. Configure:
   - ✅ **Production branch**: `main`
   - ✅ **Deploy previews**: Automatically build deploy previews for all PRs
   - ✅ **Branch deploys**: Choose specific branches or "All branches"

### Notifications

Set up notifications to know when deploys complete:

1. **Site settings** → **Build & deploy** → **Deploy notifications**
2. Add notifications for:
   - Deploy succeeded
   - Deploy failed
   - Deploy started

You can send to:

- Slack
- Email
- GitHub (automatically comments on PRs)
- Webhook

## 📱 GitHub Integration

Netlify automatically:

- ✅ Comments on PRs with deploy preview URLs
- ✅ Shows deploy status checks
- ✅ Updates PR status (pending/success/failure)
- ✅ Prevents merging if deploy fails

## 🎨 Preview Features

### What's Different in Previews

Preview deployments use `_config_preview.yml` which:

- Uses relative URLs (works on any preview URL)
- Shows draft posts (`draft: true` in frontmatter)
- Sets `JEKYLL_ENV=preview`

### Draft Posts

In preview deployments, you can add draft posts that won't appear in production:

```yaml
---
layout: post
title: "Work in Progress Post"
draft: true
---
This post will only show in preview/staging deployments!
```

## 🐛 Troubleshooting

### Preview Deploy Failed

1. Check the deploy logs in Netlify Dashboard
2. Common issues:
   - Missing dependencies
   - Build script errors
   - Jekyll configuration issues

### Links Don't Work in Preview

- Make sure you're using `{{ post.url | relative_url }}` in templates
- Avoid hardcoded URLs like `https://prosperxo.com`
- Use relative paths for assets

### Assets Not Loading

- Check that asset paths are relative: `/assets/image.png`
- Verify assets are in the `_site/` directory after build
- Check Netlify deploy log for copy/build errors

## 📊 Deploy Contexts

| Context        | Branch/Trigger   | Config                                | URL Pattern                              |
| -------------- | ---------------- | ------------------------------------- | ---------------------------------------- |
| Production     | `main`           | `_config.yml`                         | `prosperxo.com`                          |
| Deploy Preview | Pull Requests    | `_config.yml` + `_config_preview.yml` | `deploy-preview-[#]--[site].netlify.app` |
| Branch Deploy  | Other branches   | `_config.yml` + `_config_preview.yml` | `[branch]--[site].netlify.app`           |
| Staging        | `staging` branch | `_config.yml` + `_config_preview.yml` | `staging--[site].netlify.app`            |

## 🔒 Security

### Password Protection (Optional)

You can password-protect preview deployments:

1. **Site settings** → **Access control**
2. Enable **Password Protection** for:
   - Branch deploys
   - Deploy previews
   - Leave production open

This is useful for:

- Previewing unpublished content
- Internal review before public launch
- Testing with stakeholders

## ⚡ Best Practices

1. **Always use PRs** for changes to get automatic previews
2. **Review preview URLs** before merging to main
3. **Use descriptive branch names** (they become part of preview URL)
4. **Test mobile/desktop** on preview URLs
5. **Check all blog links** work in previews
6. **Use staging for major updates** before production

## 🎯 Quick Commands

```bash
# Start feature branch
git checkout -b feature/my-feature

# Push and create preview
git push origin feature/my-feature
# → Creates PR → Netlify builds preview

# Local preview with Docker
./docker-jekyll.sh
# → Preview at http://localhost:4000

# Build locally to test
npm run build
cd _site && python -m http.server 8000
```

## 📞 Support

If you run into issues:

1. Check Netlify deploy logs
2. Review Jekyll build output
3. Test locally first with Docker
4. Check this guide's troubleshooting section

---

**Happy deploying! 🚀**
