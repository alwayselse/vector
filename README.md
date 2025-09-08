# Vector Data Science Club Website

A modern, responsive single-page website for the Vector Data Science Club at Ramaiah University of Applied Sciences, built with React, Vite, and Tailwind CSS.

## Features

- **Modern Dark Theme**: Charcoal background with monospace font (Fira Code)
- **Responsive Design**: Mobile-first approach that works on all screen sizes
- **Single File Architecture**: All components contained in App.jsx
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Comprehensive Sections**: Header, Hero, Offerings, Team, and Footer

## Project Structure

```
vector_club/
├── src/
│   ├── App.jsx          # Main application component (single file)
│   ├── index.css        # Tailwind CSS imports and Google Fonts
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS preprocessing
- **Fira Code**: Monospace font from Google Fonts

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup and Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
Access the application at: http://localhost:5173/

## Website Sections

### 1. Header
- Sticky navigation with university and club logos
- Responsive layout with proper branding

### 2. Hero Section
- Eye-catching title with gradient text
- Compelling description of the club
- Call-to-action button

### 3. What We Offer
- 8 core offerings in responsive grid layout:
  - Resume Building
  - Guest Lectures  
  - Career Prep
  - Workshops
  - Networking
  - Hands-on Projects
  - Leadership
  - Certification

### 4. Core Team
- Three member profiles with placeholders
- Social media links (LinkedIn, GitHub)
- Responsive card layout

### 5. Footer
- Social media links for the club
- Copyright information

## Customization

### Colors
The website uses a dark theme with these primary colors:
- Background: `stone-900` (#1c1917)
- Cards: `stone-800` (#292524)
- Text: White and gray variants
- Accents: Purple, blue, and gradient combinations

### Fonts
- Primary: Fira Code (monospace)
- Fallbacks: Menlo, Consolas, monospace

### Responsive Breakpoints
- Mobile: Base styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

## Deployment

The project builds to a `dist/` folder that can be deployed to any static hosting service:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build
5. Submit a pull request

## License

© 2024 Vector Data Science Club - RUAS. All Rights Reserved.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
