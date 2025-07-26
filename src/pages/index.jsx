import Layout from "./Layout.jsx";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Function to get current page from pathname
function getCurrentPageFromPathname(pathname) {
    const pathMap = {
        '/': 'Home',
        '/home': 'Home',
        '/contact': 'Contact',
        '/gallery': 'Gallery'
    };
    
    const cleanPath = pathname.replace(/\/$/, '');
    return pathMap[cleanPath] || 'Home';
}

// Component that renders the correct page based on the current route
function PageRenderer() {
    const location = useLocation();
    const currentPage = getCurrentPageFromPathname(location.pathname);
    
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
            <PageRenderer />
        </Router>
    );
}