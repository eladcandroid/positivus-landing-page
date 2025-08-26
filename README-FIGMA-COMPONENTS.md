# Positivus Landing Page Components

This project contains React components built with TypeScript and Tailwind CSS, generated from a Figma design for a digital marketing agency landing page.

## Components Overview

### Core Components

- **`LandingPage`** - Main container component that assembles the full landing page
- **`NavigationBar`** - Responsive navigation header with logo and menu items
- **`HeroSection`** - Hero section with headline, description, CTA button and illustration
- **`LogoSection`** - Client logos/company showcase section
- **`Logo`** - Reusable logo component with Positivus branding
- **`Button`** - Flexible button component with variants and sizes

## Features

- **TypeScript** - Full type safety with proper interfaces
- **Tailwind CSS** - Utility-first styling with responsive design
- **Component Architecture** - Modular, reusable components
- **Brand Consistency** - Uses Space Grotesk font and brand colors
- **Responsive Design** - Mobile-first approach with breakpoint variations

## Design System

### Colors
- Primary: `#191A23` (Dark)
- Accent: `#B9FF66` (Lime Green) 
- Secondary: `#7ED321` (Green)
- Background: `#FFFFFF` (White)

### Typography
- Font Family: Space Grotesk
- Heading: 60px/Medium
- Body: 20px/Regular
- Navigation: 20px/Regular

### Components Structure

```
components/
├── Button.tsx          # Primary/Secondary button variants
├── Logo.tsx           # Brand logo component
├── NavigationBar.tsx  # Main navigation with logo & menu
├── HeroSection.tsx    # Hero content with illustration
├── LogoSection.tsx    # Client logos showcase
├── LandingPage.tsx    # Main page container
└── index.ts          # Component exports
```

## Usage

```tsx
import { LandingPage } from './components';

function App() {
  return <LandingPage />;
}
```

Or use individual components:

```tsx
import { NavigationBar, HeroSection, Button } from './components';

function CustomPage() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

## Component Props

### Button
- `variant?: "primary" | "secondary"` - Button style
- `size?: "sm" | "md" | "lg"` - Button size
- `children: React.ReactNode` - Button content
- `onClick?: () => void` - Click handler

### Logo  
- `className?: string` - Additional CSS classes

### NavigationBar
- `className?: string` - Additional CSS classes

### HeroSection
- `className?: string` - Additional CSS classes

### LogoSection
- `className?: string` - Additional CSS classes

All components are built with accessibility in mind and follow React best practices.