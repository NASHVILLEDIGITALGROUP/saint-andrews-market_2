#!/bin/bash

echo "🚀 Deploying Saint Andrews Market to Render..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Go to https://dashboard.render.com/"
    echo "2. Create new Static Site"
    echo "3. Connect GitHub repository: NASHVILLEDIGITALGROUP/saint-andrews-market_2"
    echo "4. Build Command: npm install && npm run build"
    echo "5. Publish Directory: dist"
    echo "6. Add custom domain: collegeplace.net"
    echo "7. Configure DNS in Wix"
    echo ""
    echo "📋 Configuration files included:"
    echo "✅ render.yaml - Render configuration"
    echo "✅ public/_redirects - SPA routing"
    echo "✅ public/.htaccess - Apache fallback"
    echo "✅ public/web.config - IIS fallback"
    echo ""
    echo "🔗 Your site will be available at:"
    echo "   https://collegeplace.net"
    echo "   https://collegeplace.net/contact"
    echo "   https://collegeplace.net/gallery"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 