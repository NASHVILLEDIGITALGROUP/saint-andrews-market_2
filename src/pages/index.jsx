import Layout from "./Layout.jsx";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { getCurrentPageFromLocation } from '../utils/routeUtils';
import { useEffect, useState } from 'react';

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('Home');
    
    // Update current page based on location
    useEffect(() => {
        const page = getCurrentPageFromLocation(location);
        setCurrentPage(page);
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