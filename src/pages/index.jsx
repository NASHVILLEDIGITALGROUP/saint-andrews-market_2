import Layout from "./Layout.jsx";

import Home from "./Home";

import Contact from "./Contact";

import Gallery from "./Gallery";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Contact: Contact,
    
    Gallery: Gallery,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    // Handle empty path or root path
    if (!urlLastPart || urlLastPart === '') {
        return 'Home';
    }

    // Map URL paths to page names (case-insensitive)
    const urlToPageMap = {
        'home': 'Home',
        'contact': 'Contact',
        'gallery': 'Gallery'
    };

    const pageName = urlToPageMap[urlLastPart.toLowerCase()];
    return pageName || 'Home';
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                {/* Catch all route - redirect to home for any unmatched routes */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}