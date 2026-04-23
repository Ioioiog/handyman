# Curaçao Handyman - Premium Website

A futuristic, high-conversion website for Curaçao Handyman built with Next.js, featuring luxury UI/UX design inspired by Apple and Tesla.

## 🚀 Features

- **Premium Design**: Dark mode with glassmorphism, neon accents, and smooth animations
- **High Conversion**: Multiple WhatsApp CTAs, floating button, and optimized user flow
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Modern Tech Stack**: Next.js 14, Tailwind CSS, Framer Motion, TypeScript
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button component
│   │   ├── Section.tsx      # Section wrapper component
│   │   └── ServiceCard.tsx  # Service card with 3D effects
│   └── sections/
│       ├── Navbar.tsx       # Sticky navigation bar
│       ├── Hero.tsx         # Hero section with animated background
│       ├── Services.tsx     # Services grid
│       ├── WhyChooseUs.tsx  # Features with parallax
│       ├── Reviews.tsx      # Animated review carousel
│       ├── CTA.tsx          # Call-to-action section
│       ├── Footer.tsx       # Footer with links
│       └── FloatingWhatsApp.tsx  # Floating WhatsApp button
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎨 Design Features

### Color Palette
- **Primary**: Deep navy/black (#0B0F1A)
- **Accent**: Yellow (#FFC300)
- **Neon Blue**: #00D9FF
- **Neon Green**: #25D366 (WhatsApp)
- **Neon Purple**: #B537F2

### Key Components

1. **Hero Section**: Fullscreen with animated gradient background, trust badges, and dual CTAs
2. **Services Grid**: 6 interactive cards with 3D hover effects
3. **Why Choose Us**: Feature cards with parallax scrolling effects
4. **Reviews**: Animated carousel with 5-star ratings
5. **CTA Section**: High-contrast section with glowing effects
6. **Floating WhatsApp**: Always-visible contact button with pulse animation

## 📱 Customization

### Update Contact Information

Edit the WhatsApp number and phone number in:
- `components/sections/Navbar.tsx`
- `components/sections/Hero.tsx`
- `components/sections/CTA.tsx`
- `components/sections/FloatingWhatsApp.tsx`
- `components/sections/Footer.tsx`

Replace `59991234567` with your actual WhatsApp number (country code + number, no spaces or symbols).

### Update Services

Edit the services array in `components/sections/Services.tsx` to add, remove, or modify services.

### Update Reviews

Edit the reviews array in `components/sections/Reviews.tsx` to add your actual customer reviews.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## 📄 License

This project is created for Curaçao Handyman. All rights reserved.

## 🤝 Support

For support or questions, contact us via WhatsApp or email.
