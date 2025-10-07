# Build Process Documentation

## 🎯 Overview

This project combines a **static HTML website** with a **Jekyll-powered blog**. The build process ensures that:

- ✅ Your static site (`/welcome`, `/team`, etc.) remains completely untouched
- ✅ Jekyll only adds the blog functionality at `/blog/`
- ✅ All assets and routes work correctly

## 🏗️ How the Build Works

### Step 1: Copy Static Site

All your existing static files are copied to the `_site/` directory:

```bash
rsync -av [static files] _site/
```

### Step 2: Build Jekyll Blog

Jekyll then runs and adds ONLY the blog files to `_site/`:

```bash
bundle exec jekyll build
```

Jekyll's `keep_files` configuration ensures it doesn't overwrite the static files that were copied in Step 1.

### Step 3: Build Posts Index

The posts index JSON is generated for any dynamic blog features:

```bash
npm run build:posts
```

## 📁 Directory Structure

```
/
├── _site/                    # Final output (published to Netlify)
│   ├── index.html           # Your static homepage
│   ├── welcome/             # Your static pages
│   ├── team/
│   ├── blog/                # Jekyll-generated blog
│   │   ├── index.html       # Blog index
│   │   └── 2025/09/04/...   # Individual posts
│   └── assets/              # All assets
├── _posts/                   # Blog post source files
├── _layouts/                 # Jekyll templates
└── blog.html                # Blog index source
```

## 🚀 Deployment

### Netlify Configuration

```toml
[build]
  publish = "_site"
  command = "bundle install && npm install && npm run build"
```

This ensures:

1. Ruby gems are installed
2. Node packages are installed
3. The build script runs
4. The `_site/` directory is published

## ✅ What Gets Preserved

Your entire static site remains untouched:

- `/` - Splash page with video
- `/welcome/` - Main site
- `/team/` - Team page
- `/events/` - Events page
- `/why-prosper/` - Why Prosper page
- All other static routes
- All assets (images, CSS, JS, fonts, etc.)

## 📝 What Gets Added

Jekyll adds:

- `/blog/` - Blog index page
- `/blog/YYYY/MM/DD/title/` - Individual blog posts
- RSS feed
- Sitemap (blog entries)

## 🔧 Local Development

### Run the full build:

```bash
npm run build
```

### Test locally:

```bash
cd _site
python3 -m http.server 8000
```

### Or use Docker for Jekyll:

```bash
./docker-jekyll.sh
```

## ⚠️ Important Notes

1. **Never run `jekyll build --destination .`** - This would overwrite your static site!
2. **Always publish `_site/`** on Netlify, not the root directory
3. **The `keep_files` list in `_config.yml`** protects your static files
4. **Blog posts go in `_posts/`** with Jekyll naming: `YYYY-MM-DD-title.md`

## 🐛 Troubleshooting

### Static routes return 404

- Check that `_site/` contains your static files
- Verify `keep_files` list in `_config.yml` includes the route
- Ensure build script copied files correctly

### Blog doesn't work

- Check that `blog.html` is being processed
- Verify `_posts/` directory has posts with correct frontmatter
- Check Jekyll build logs for errors

### Assets not loading

- Verify `assets/` directory is in `_site/`
- Check that asset paths are relative (not absolute)
- Ensure `keep_files` includes `assets`
