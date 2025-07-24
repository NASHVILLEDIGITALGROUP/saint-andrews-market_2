# Saint Andrews Market - Modern Convenience Store Website

A modern, responsive website for Saint Andrews Market, a Shell gas station and convenience store located in Murfreesboro, Tennessee. Built with React, Vite, and Tailwind CSS, featuring a beautiful UI with shadcn/ui components.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive website that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Multi-page Navigation**: Home, Contact, and Gallery pages with smooth routing
- **Interactive Components**: Carousels, maps, forms, and dynamic content sections
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### Business Features
- **Location Information**: Complete address, phone, and business hours
- **Product Categories**: Visual display of all available products and services
- **Promotional Content**: Rotating carousel showcasing current promotions
- **Contact Form**: Functional contact form with email integration
- **Social Media Integration**: Direct links to Facebook, Instagram, and YouTube
- **Interactive Map**: Embedded Google Maps with directions functionality

### Technical Features
- **Component Library**: Comprehensive shadcn/ui component system
- **Custom Hooks**: Mobile detection and responsive utilities
- **Form Handling**: React Hook Form integration with validation
- **Toast Notifications**: User feedback system
- **Scroll-to-Top**: Enhanced navigation experience
- **Mobile Menu**: Collapsible navigation for mobile devices

## 🏗️ Project Structure

```
saint-andrews-market-8a301ee6/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui component library
│   │   ├── ProductCategories.jsx
│   │   ├── PromotionsCarousel.jsx
│   │   └── LocationMap.jsx
│   ├── pages/               # Main application pages
│   │   ├── Home.jsx         # Landing page with hero section
│   │   ├── Contact.jsx      # Contact form and information
│   │   ├── Gallery.jsx      # Photo gallery
│   │   ├── Layout.jsx       # Main layout with header/footer
│   │   └── index.jsx        # Routing configuration
│   ├── hooks/               # Custom React hooks
│   │   └── use-mobile.jsx   # Mobile detection hook
│   ├── lib/                 # Utility libraries
│   │   └── utils.js         # Tailwind CSS utilities
│   ├── utils/               # Application utilities
│   │   └── index.ts         # URL generation utilities
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles and CSS variables
│   └── App.css              # Application-specific styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── components.json          # shadcn/ui configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saint-andrews-market-8a301ee6
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

### Color Palette
- **Primary**: Yellow (#fbbf24) - Brand color for Shell gas station
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Various colors for product categories and UI elements

### Typography
- **Headings**: Bold, large text for hierarchy
- **Body**: Clean, readable font for content
- **Buttons**: Rounded, modern button styles

### Components
The project uses a comprehensive set of shadcn/ui components including:
- Buttons, Cards, and Forms
- Navigation menus and dropdowns
- Carousels and modals
- Toast notifications
- And many more...

## 📱 Pages Overview

### Home Page (`/`)
- **Hero Section**: Eye-catching banner with call-to-action
- **Fuel Information**: Details about Shell fuel types and quality
- **Product Categories**: Visual grid of available products and services
- **Promotions Carousel**: Rotating promotional content
- **Location Section**: Address, hours, and interactive map
- **Community Section**: Information about local community involvement

### Contact Page (`/contact`)
- **Contact Information**: Complete business details
- **Contact Form**: Functional form with email integration
- **Business Hours**: Detailed operating hours
- **Location Details**: Address and phone information

### Gallery Page (`/gallery`)
- **Photo Gallery**: Collection of store images
- **Social Media Integration**: Direct link to Instagram
- **Visual Content**: Showcasing the store environment

## 🔧 Technical Implementation

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **CSS Variables**: Custom design tokens
- **Responsive Design**: Mobile-first approach

### State Management
- **React Hooks**: useState, useEffect for local state
- **Custom Hooks**: Reusable logic (use-mobile)

### Forms
- **React Hook Form**: Form handling and validation
- **Email Integration**: Mailto links for contact form

### External Integrations
- **Google Maps**: Embedded map with directions
- **Social Media**: Facebook, Instagram, YouTube links
- **Image Storage**: Supabase storage for media assets

## 📊 Business Information

### Store Details
- **Name**: Saint Andrews Market
- **Address**: 1725 St Andrews Dr, Murfreesboro, TN 37128
- **Phone**: (615) 896-9879
- **Email**: saintandrewsmarket@gmail.com

### Operating Hours
- **Monday - Saturday**: 4 AM - 12 AM
- **Sunday**: 5 AM - 12 AM

### Services Offered
- Shell Quality Fuel (Regular, Plus, Premium)
- Fresh Food & Bakery Items
- Snacks & Beverages
- Auto Care Products
- Lottery Tickets
- ATM Services
- Tobacco Products
- Vapes
- And much more...

## 🌐 Social Media

- **Facebook**: [saintandrewscitgo](https://www.facebook.com/saintandrewscitgo)
- **Instagram**: [@saint_andrews_market](https://www.instagram.com/saint_andrews_market/)
- **YouTube**: [@SaintAndrewsMarket](https://www.youtube.com/@SaintAndrewsMarket)

## 🛠️ Development

### Code Quality
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (via Tailwind CSS)
- **TypeScript**: Type safety for utilities

### Performance
- **Vite**: Fast development and optimized builds
- **Image Optimization**: Optimized images and lazy loading
- **Code Splitting**: Automatic code splitting by routes

### Accessibility
- **Semantic HTML**: Proper HTML structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 👨‍💻 Development Team

**Developed by**: [Nashville Digital Group](https://nashvilledigitalgroup.com/)

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a private project for Saint Andrews Market. For any questions or support, please contact the development team at Nashville Digital Group.

---

**Visit Saint Andrews Market**: 1725 St Andrews Dr, Murfreesboro, TN 37128  
**Call us**: (615) 896-9879  
**Hours**: Mon-Sat 4 AM-12 AM, Sun 5 AM-12 AM