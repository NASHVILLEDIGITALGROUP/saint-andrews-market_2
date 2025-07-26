import Layout from "./Layout.jsx";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { getCurrentPageFromUrl } from '../utils/routeUtils';
import { useEffect, useState } from 'react';

const PAGES = {
    Home: Home,
    Contact: Contact,
    Gallery: Gallery,
}

function _getCurrentPage(url) {
    // Simple path to page mapping
    const pathMap = {
        '/': 'Home',
        '/home': 'Home',
        '/contact': 'Contact',
        '/gallery': 'Gallery'
    };
    return pathMap[url] || 'Home';
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(_getCurrentPage(location.pathname));
    
    // Handle page refresh and initial load
    useEffect(() => {
        const pageFromUrl = getCurrentPageFromUrl();
        setCurrentPage(pageFromUrl);
    }, [location.pathname]);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                {/* Redirect any unknown routes to home */}
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