# CasaLink

A modern real estate marketplace built with React and Firebase

## Overview

CasaLink is a full-featured real estate platform that enables users to list and discover properties for rent or sale. Built with Vite and Firebase v9, it offers a seamless experience for property listing, geolocation mapping, and user authentication.

## Features

- 🏠 Property Listings (Rent/Sale)
- 🔍 Interactive Map Integration
- 🎯 Special Offer Listings
- 📸 Multiple Image Uploads
- 🔐 User Authentication
- 📍 Geolocation Services
- 🎨 Modern UI/UX Design

## Tech Stack

- **Frontend Framework:** React with Vite
- **Backend Services:** Firebase v9
  - Authentication (Email/Password & Google OAuth)
  - Cloud Firestore
  - Storage
- **Map Integration:** Leaflet.js
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js 14.18+ or 16+
- npm or yarn
- Firebase account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/CasaLink.git
cd CasaLink

```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Configure environment variables Create a .env.local file: \

   ```.env

   VITE_FIREBASE_API_KEY=your-api-key \
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

## Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Tasks

- [x] Migrate from Create React App to Vite
  - [x] Install Vite and required plugins
  - [x] Update configuration files
  - [x] Modify environment variables (REACT*APP* to VITE\_)
  - [x] Update import statements
  - [x] Test and verify all features
- [x] Update outdated dependencies
  - [x] Resolve SVG handling with Vite
  - [ ] Update PostCSS dependencies
  - [ ] Resolve any compatibility issues
- [ ] UI/UX Improvements
  - [ ] Refactor Header into a standalone component
  - [ ] Implement dynamic page titles with proper routing logic
  - [ ] Add responsive hamburger menu for mobile navigation
  - [ ] Integrate modern UI framework (DaisyUI/Tailwind)
- [ ] Map Integration Enhancement
  - [ ] Improve property location visualization on map
  - [ ] Add clustering for multiple properties
  - [ ] Implement better map interaction features
- [ ] Performance Optimization
  - [x] Utilize Vite's fast refresh
  - [x] Improve build times
  - [ ] Optimize asset loading

### Firebase Setup

1. Create a project in Firebase Console
2. Enable Authentication

   - Set up Email/Password sign-in
   - Configure Google OAuth

3. Set up Cloud Firestore
4. Enable Storage for images

## Contributing

# Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

# License

This project is licensed under the MIT License - see the LICENSE file for details

# Contact

Umit Hayim - @umthym
Project Link: https://github.com/UmtHym/CasaLink
