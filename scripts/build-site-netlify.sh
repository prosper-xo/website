#!/bin/bash

set -e  # Exit on error

echo "🏗️  Building Prosper XO website with Jekyll blog..."

# Step 1: Clean _site directory
echo "🧹 Cleaning _site directory..."
rm -rf _site
mkdir -p _site

# Step 2: Copy all static site files to _site (using cp instead of rsync)
echo "📦 Copying static site files..."

# Copy all files and directories except the excluded ones
find . -maxdepth 1 -mindepth 1 \
  ! -name '_site' \
  ! -name 'node_modules' \
  ! -name 'vendor' \
  ! -name '.git' \
  ! -name '_posts' \
  ! -name '_layouts' \
  ! -name '_includes' \
  ! -name 'Gemfile' \
  ! -name 'Gemfile.lock' \
  ! -name '_config.yml' \
  ! -name 'docker-jekyll.sh' \
  ! -name 'scripts' \
  ! -name '.bundle' \
  -exec cp -r {} _site/ \;

# Step 3: Build Jekyll blog (this will add blog files to _site)
echo "📝 Building Jekyll blog..."
if [ -n "$JEKYLL_CONFIG" ]; then
  echo "Using custom Jekyll config: $JEKYLL_CONFIG"
  bundle exec jekyll build --config "$JEKYLL_CONFIG"
else
  bundle exec jekyll build
fi

# Step 4: Build posts index
echo "📊 Building posts index..."
cd _site && npm run build:posts

echo "✅ Build complete! Site is ready in _site/"
echo "📁 Blog available at /blog/"
echo "🏠 Static site preserved at root"
