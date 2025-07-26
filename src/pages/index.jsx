import Layout from "./Layout.jsx";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { getCurrentPageFromUrl, parsePathname } from '../utils/routeUtils';
import { useEffect, useState } from 'react';

const PAGES = {
    
    Home: Home,
    
    Contact: Contact,
    
    Gallery: Gallery,
    
}

function _getCurrentPage(url) {
    return parsePathname(url);
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
                {/* Handle any other routes by showing the appropriate page based on URL */}
                <Route path="*" element={<DynamicRoute />} />
            </Routes>
        </Layout>
    );
}

// Component to handle dynamic routing based on URL
function DynamicRoute() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    // Render the appropriate component based on the current page
    switch (currentPage) {
        case 'Contact':
            return <Contact />;
        case 'Gallery':
            return <Gallery />;
        case 'Home':
        default:
            return <Home />;
    }
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}