# 🚀 Render + Wix Deployment Guide

## Your Setup
- **Hosting**: Render (Static Site)
- **Domain**: Wix (collegeplace.net)
- **Issue**: SPA routing not working (404 errors on refresh)

## Solution Overview

### Option 1: Render Configuration (Recommended)
Use Render's built-in SPA routing support with `render.yaml`

### Option 2: Hash Router (Immediate Fix)
Use hash routing that works without server configuration

## Option 1: Render Configuration Setup

### 1. Create Render Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository: `NASHVILLEDIGITALGROUP/saint-andrews-market_2`

### 2. Configure Build Settings
- **Name**: `saint-andrews-market`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment**: `Static Site`

### 3. Enable SPA Routing
In your Render service settings:
1. Go to "Settings" → "Redirects and Rewrites"
2. Add redirect rule:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Type**: `Rewrite`

### 4. Custom Domain Setup
1. In Render settings, add custom domain: `collegeplace.net`
2. Update your Wix DNS settings:
   - **Type**: CNAME
   - **Name**: `@` or leave blank
   - **Value**: `your-render-app.onrender.com`

## Option 2: Hash Router (Immediate Fix)

If you want to use the hash router version I created:

### 1. Deploy Current Build
The current build uses HashRouter and will work immediately:
- URLs: `https://collegeplace.net/#/contact`, `https://collegeplace.net/#/gallery`
- No server configuration needed
- Works immediately after deployment

### 2. Switch Back to Clean URLs Later
Once Render is configured, you can switch back to BrowserRouter for clean URLs.

## Render-Specific Configuration Files

### `render.yaml` (Auto-deployment)
```yaml
services:
  - type: web
    name: saint-andrews-market
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### `public/_redirects` (Fallback)
```
/*    /index.html   200
```

## Step-by-Step Deployment

### 1. Connect GitHub to Render
1. Go to Render Dashboard
2. Click "New +" → "Static Site"
3. Connect GitHub repository
4. Select `saint-andrews-market_2`

### 2. Configure Build
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Auto-Deploy**: Enabled

### 3. Add Custom Domain
1. Go to "Settings" → "Custom Domains"
2. Add: `collegeplace.net`
3. Follow DNS instructions

### 4. Configure DNS in Wix
1. Go to Wix Domain Manager
2. Add DNS record:
   - **Type**: CNAME
   - **Name**: `@`
   - **Value**: `your-render-app.onrender.com`

## Testing After Deployment

1. **Test direct access**: `https://collegeplace.net/contact`
2. **Test page refresh**: Refresh while on `/contact`
3. **Test navigation**: Use browser back/forward buttons
4. **Test bookmarking**: Bookmark any page

## Expected Results

After proper configuration:
- ✅ Direct URL access works
- ✅ Page refresh works
- ✅ Browser navigation works
- ✅ Bookmarking works
- ✅ Sharing links works
- ✅ No 404 errors

## Troubleshooting

### If 404 errors persist:
1. Check Render service logs
2. Verify redirect rules are configured
3. Clear browser cache
4. Check DNS propagation (can take 24-48 hours)

### If domain doesn't work:
1. Verify DNS settings in Wix
2. Check Render custom domain configuration
3. Wait for DNS propagation

## Support

- **Render Support**: [help.render.com](https://help.render.com/)
- **Wix Support**: [support.wix.com](https://support.wix.com/)

## Next Steps

1. **Deploy to Render** using the configuration above
2. **Configure custom domain** in Render
3. **Update Wix DNS** settings
4. **Test all routes** thoroughly

The routing issue will be completely resolved once Render is properly configured! 🎉 