# Netlify Deployment Guide

## Issues Fixed

1. **Updated Next.js Configuration**: Fixed deprecated `next export` command
2. **Added Netlify Configuration**: Created `netlify.toml` with proper build settings
3. **Fixed Image Optimization**: Added proper domain configuration for external images
4. **Updated Redirects**: Enhanced `_redirects` file for better SPA routing
5. **Added Node Version**: Created `.nvmrc` for consistent Node.js version

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (or use `.nvmrc`)

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=out
```

### Option 3: Drag and Drop

1. Run `npm run build` locally
2. Drag the `out` folder to Netlify's deploy area

## Configuration Files Added

- `netlify.toml`: Netlify build configuration
- `.nvmrc`: Node.js version specification
- Updated `_redirects`: Proper SPA routing
- Updated `next.config.js`: Fixed for static export
- Updated `package.json`: Removed deprecated export command

## Build Process

The project now uses:

- `npm run build` (instead of the deprecated `next build && next export`)
- Static export with `output: 'export'` in Next.js config
- Proper image optimization for external domains
- Correct asset paths for static hosting

## Troubleshooting

If you still have issues:

1. Check Netlify build logs for specific errors
2. Ensure Node.js version 18 is used
3. Verify all static files are in the `out` directory
4. Check that `_redirects` file is in the `public` folder
