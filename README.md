# Modern Web Project Template

A modern web project template using EJS templating, Tailwind CSS, and webpack for bundling.

## Features

- **EJS Templating Engine**
  - Reusable components and partials
  - Layout system with header/footer
  - Dynamic content rendering
  
- **Modern CSS Setup**
  - Tailwind CSS integration
  - PostCSS processing
  - Custom theme configuration
  - Responsive design utilities

- **JavaScript Architecture**
  - Modular component system
  - jQuery integration
  - ES6+ features support

- **Development Workflow**
  - Webpack bundling
  - Hot module replacement
  - Development server
  - Production builds

## Project Structure

├── src/
│   ├── css/
│   │   └── main.css       # Main stylesheet with Tailwind imports
│   ├── js/
│   │   ├── components/    # JavaScript components
│   │   └── main.js        # Main JavaScript entry
│   └── views/
│       ├── components/    # Reusable EJS components
│       ├── pages/         # Page templates
│       └── partials/      # Layout partials
├── package.json           # Node packages
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
└── webpack.config.js      # Webpack configuration

## Getting Started

1. Install dependencies:

npm install

2. Start development server with hot reloa:

npm run dev

3. Builds project for production:

npm run build

## Production Build

The production build process:

- Minifies JavaScript and CSS
- Optimizes assets
- Generates HTML from EJS templates
- Creates a dist directory with deployable files