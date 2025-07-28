// Utility functions for robust route handling

export function getCurrentPageFromUrl() {
    const pathname = window.location.pathname;
    return parsePathname(pathname);
}

export function parsePathname(pathname) {
    // Simple and direct path mapping
    const pathMap = {
        '/': 'Home',
        '/home': 'Home',
        '/contact': 'Contact',
        '/gallery': 'Gallery'
    };
    
    // Remove trailing slash for consistency
    const cleanPath = pathname.replace(/\/$/, '');
    
    return pathMap[cleanPath] || 'Home';
}

export function isValidRoute(pathname) {
    const validRoutes = ['/', '/home', '/contact', '/gallery'];
    const cleanPath = pathname.replace(/\/$/, '');
    return validRoutes.includes(cleanPath);
}

export function getPageComponent(pageName) {
    const pageComponents = {
        'Home': 'Home',
        'Contact': 'Contact',
        'Gallery': 'Gallery'
    };
    
    return pageComponents[pageName] || 'Home';
} 