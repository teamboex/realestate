# Day Dream Realtors - Real Estate Agent Website

A professional one-page website for Niza Kareem, a RERA-registered real estate agent in Kottayam, Kerala.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Layout**: Clean, modern design with blue & gray color palette
- **RERA Compliance**: Prominent display of RERA certificate number
- **Contact Integration**: Direct phone and WhatsApp links
- **Property Showcase**: Featured properties with enquiry buttons
- **Contact Form**: Lead generation form with validation
- **Google Maps**: Location embed for Kottayam, Kerala
- **Mobile Floating Buttons**: Sticky WhatsApp and Call buttons for mobile users

## Sections

1. **Header/Navbar** - Logo, navigation links, mobile menu
2. **Hero Section** - Name, RERA certificate, tagline, action buttons
3. **About Me** - Bio with RERA details and professional information
4. **Featured Properties** - Grid of sample properties with enquiry buttons
5. **RERA Registration** - Certificate details and trust-building content
6. **Contact Section** - Contact info, form, and Google Maps
7. **Footer** - Copyright and quick contact links

## Technology Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd krishna-sanjay-real-estate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Contact Information

Update the following files with your actual contact details:

- `components/Hero.tsx` - Phone number and WhatsApp link
- `components/About.tsx` - RERA certificate details
- `components/Contact.tsx` - Contact form and information
- `components/Footer.tsx` - Footer contact details

### Property Images

Replace the Unsplash image URLs in `components/Properties.tsx` with your actual property images.

### Google Maps

Update the Google Maps embed URL in `components/Contact.tsx` with the correct coordinates for your location.

## Agent Information

- **Name**: Krishna Sanjay
- **RERA Certificate**: K-RERA/AG/0138/2025
- **Phone**: 6282106265
- **Email**: krishnasanjay68@gmail.com
- **Location**: Mulanthuruthy, Ernakulam, Kerala

## License

This project is created for Krishna Sanjay's real estate business.
