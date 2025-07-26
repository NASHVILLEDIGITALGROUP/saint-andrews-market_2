// Utility functions for robust route handling

export function getCurrentPageFromUrl() {
    const pathname = window.location.pathname;
    return parsePathname(pathname);
}

export function parsePathname(pathname) {
    // Remove trailing slash and clean the path
    let cleanPath = pathname.replace(/\/$/, '');
    
    // Split and get the last meaningful part
    const parts = cleanPath.split('/').filter(part => part !== '');
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart) {
        return 'Home';
    }
    
    // Map URL parts to page names
    const pageMap = {
        'home': 'Home',
        'contact': 'Contact',
        'gallery': 'Gallery'
    };
    
    return pageMap[lastPart.toLowerCase()] || 'Home';
}

export function isValidRoute(pathname) {
    const validRoutes = ['/', '/home', '/contact', '/gallery'];
    return validRoutes.includes(pathname) || validRoutes.includes(pathname.replace(/\/$/, ''));
}

export function getPageComponent(pageName) {
    const pageComponents = {
        'Home': 'Home',
        'Contact': 'Contact',
        'Gallery': 'Gallery'
    };
    
    return pageComponents[pageName] || 'Home';
} 