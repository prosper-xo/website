#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️  Building Prosper XO website with Jekyll blog...');

try {
  // Step 1: Clean _site directory
  console.log('🧹 Cleaning _site directory...');
  if (fs.existsSync('_site')) {
    fs.rmSync('_site', { recursive: true });
  }
  fs.mkdirSync('_site');

  // Step 2: Copy all static site files to _site
  console.log('📦 Copying static site files...');
  
  const excludeDirs = [
    '_site', 'node_modules', 'vendor', '.git', 
    '_posts', '_layouts', '_includes', '.bundle',
    'scripts'
  ];
  
  const excludeFiles = [
    'Gemfile', 'Gemfile.lock', '_config.yml', 
    'docker-jekyll.sh', '.gitignore'
  ];

  const items = fs.readdirSync('.');
  
  for (const item of items) {
    if (item.startsWith('.') && item !== '.nojekyll') continue;
    if (excludeDirs.includes(item)) continue;
    if (excludeFiles.includes(item)) continue;
    
    const src = path.join('.', item);
    const dest = path.join('_site', item);
    
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      copyDir(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  // Step 3: Build Jekyll blog
  console.log('📝 Building Jekyll blog...');
  execSync('bundle exec jekyll build', { stdio: 'inherit' });

  // Step 4: Build posts index
  console.log('📊 Building posts index...');
  execSync('node scripts/build-posts.js', { stdio: 'inherit' });

  console.log('✅ Build complete! Site is ready in _site/');
  console.log('📁 Blog available at /blog/');
  console.log('🏠 Static site preserved at root');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
