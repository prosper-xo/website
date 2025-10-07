# Netlify Dashboard Configuration Fix

## 🚨 The Problem

Your Netlify dashboard has settings that are **overriding** the `netlify.toml` file. The deploy log shows:

```
Custom publish path detected. Proceeding with the specified path: 'cms'
```

This is wrong! It should be `_site`, not `cms`.

## ✅ How to Fix It

### Step 1: Go to Netlify Dashboard

1. Go to [app.netlify.com](https://app.netlify.com)
2. Select your **prosper-xo/website** site
3. Click **Site configuration** (or **Site settings**)

### Step 2: Update Build Settings

1. Go to **Build & deploy** → **Continuous deployment** → **Build settings**
2. You'll see a section that looks like this:

   ```
   Base directory: ___________
   Build command: ___________
   Publish directory: cms  ⚠️ THIS IS WRONG!
   ```

3. **Update these settings:**

   - **Base directory**: Leave empty or set to `/`
   - **Build command**: `bundle install && npm install && npm run build`
   - **Publish directory**: `_site` ⬅️ **CHANGE THIS!**

4. Click **Save**

### Step 3: Clear Build Cache (Recommended)

1. In **Build & deploy** → **Continuous deployment**
2. Click **Clear build cache** button
3. This ensures no old configurations are cached

### Step 4: Trigger New Deploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Or just push a new commit:
   ```bash
   git commit --allow-empty -m "Trigger Netlify rebuild with correct settings"
   git push origin test/jekyll-deploy
   ```

## 🎯 Correct Settings Summary

| Setting               | Value                                            |
| --------------------- | ------------------------------------------------ |
| **Base directory**    | (empty) or `/`                                   |
| **Build command**     | `bundle install && npm install && npm run build` |
| **Publish directory** | `_site`                                          |
| **Node version**      | 18                                               |
| **Ruby version**      | 2.7.2                                            |

## 📋 Additional Checks

### Environment Variables (Optional)

In **Site configuration** → **Environment variables**, you can optionally add:

- `NODE_VERSION`: `18`
- `RUBY_VERSION`: `2.7.2`

(These are already in netlify.toml, so this is just for extra clarity)

### Deploy Contexts

In **Build & deploy** → **Deploy contexts**:

- ✅ **Production branch**: `main`
- ✅ **Deploy previews**: Any pull request against your production branch/branch deploys
- ✅ **Branch deploys**: All (or select specific branches)

## 🔍 How to Verify

After you fix the settings and trigger a new deploy, check the build log:

### ✅ Good Signs:

```
Base directory: /
Build command: bundle install && npm install && npm run build
Publish directory: _site
Using Ruby version 2.7.2
Configuration file: /opt/build/repo/_config.yml
Destination: /opt/build/repo/_site
```

### ❌ Bad Signs:

```
Custom publish path detected. Proceeding with the specified path: 'cms'  ⬅️ WRONG!
mise /opt/build/repo/cms/mise.toml  ⬅️ WRONG!
```

## 🎉 After the Fix

Once the settings are correct, your deploys should:

1. ✅ Use Ruby 2.7.2 (from .ruby-version)
2. ✅ Build Jekyll site
3. ✅ Copy all files to `_site/`
4. ✅ Publish `_site/` directory
5. ✅ Make site available at prosperxo.com

## 💡 Why Did This Happen?

When you initially set up the site on Netlify, you might have:

1. Selected a base template or starter
2. Manually configured the build settings in the UI
3. Had old settings from a previous configuration

The UI settings **always override** the `netlify.toml` file unless you clear them!

## 🔄 Alternative: Use netlify.toml Only

If you want `netlify.toml` to be the source of truth:

1. In Netlify Dashboard → **Build settings**
2. **Clear all fields** (leave them empty)
3. Make sure you have a valid `netlify.toml` in your repo
4. Netlify will then read from `netlify.toml` instead

---

**Follow these steps and your next deploy should work! 🚀**
