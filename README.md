# 🐠 Nemo Aquarium Store – React.js E-Commerce Website

A modern, responsive, animated frontend e-commerce website for **Nemo Aquarium Store**, built with React.js, Vite, and CSS3, reproducing the UI reference designs closely.

---

## 🌟 Features Overview

- **Frontend-Only Architecture**: 100% frontend technology stack — zero backend, zero database, zero online payment gateway required.
- **WhatsApp Direct Ordering**: Compiles clean, itemized WhatsApp order messages with customer details, product quantities, and price breakdowns.
- **Complete 40-Product Catalog**: Realistic aquarium livestock, rimless glass tanks, filtration systems, nutrition, and live plants across 7 categories.
- **Interactive Shop**: Real-time keyword search, category filter chips, interactive price range slider (`₹200` to `₹30,000`), stock availability filters, sorting, and pagination.
- **Product Details Showcase**: Multi-angle image gallery with thumbnail switcher, tabs for full description, specifications, and water care instructions.
- **Shopping Cart & Wishlist**: Powered by React Context API with persistent `localStorage` synchronization.
- **Aquarium Care Guide**: Step-by-step manuals on tank setup, water quality, and Betta fish care with an interactive modal reader.
- **Contact & Showroom Location**: Embedded Google Maps with one-click directions, formatted visiting hours table, and validated contact form.
- **Fluid Responsive Design**: Tailored breakpoints for mobile phones (360px+), tablets (768px+), laptops, and desktop monitors.
- **Subtle Aquatic Animations**: Floating bubbles, swimming tropical fish keyframes, card hover lift, and `@media (prefers-reduced-motion: reduce)` accessibility compliance.

---

## 🎨 Design System & Colors

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Aqua** | `#159EAA` | Brand primary, action highlights, buttons |
| **Deep Ocean** | `#123D4A` | Hero sections, headers, footer, dark text |
| **Fresh Green** | `#72BFA3` | Success badges, WhatsApp action accents |
| **Soft Background** | `#F3FAF9` | Page background, card secondary surfaces |
| **Pure White** | `#FFFFFF` | Card backgrounds, inputs, modals |
| **Dark Text** | `#263B42` | Primary readable typography |
| **Accent Coral** | `#E2583E` | Sale badges, discount tags, wishlist heart |

---

## 📂 Project Structure

```
nemo_website/
├── public/
│   ├── favicon.svg              # Custom clownfish SVG icon
│   └── images/                  # Categorized local aquarium images
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── AnnouncementBar.jsx # Rotating top offers bar
│   │       ├── FloatingBubbles.jsx # Aquatic floating bubble particles
│   │       ├── Footer.jsx          # Multi-column deep ocean footer
│   │       ├── Layout.jsx          # Master app shell
│   │       ├── Navbar.jsx          # Header with mobile sliding drawer
│   │       ├── ProductCard.jsx     # Reusable animated product card
│   │       ├── ScrollToTop.jsx     # Route change scroll reset
│   │       └── WhatsAppButton.jsx  # Floating & inline WhatsApp actions
│   ├── config/
│   │   └── storeConfig.js          # Central store phone, WhatsApp & maps config
│   ├── context/
│   │   ├── CartContext.jsx         # Cart state & LocalStorage sync
│   │   └── WishlistContext.jsx     # Wishlist state & LocalStorage sync
│   ├── data/
│   │   ├── careGuidesData.js       # Aquarium care manuals & quick tips
│   │   ├── categoriesData.js       # 7 product categories
│   │   ├── productsData.js         # Full 40-product dataset
│   │   └── testimonialsData.js     # Customer reviews
│   ├── pages/
│   │   ├── AboutPage.jsx           # inrto.png
│   │   ├── CareGuidePage.jsx       # home page.png
│   │   ├── CartPage.jsx            # shopping cart.png
│   │   ├── ContactPage.jsx         # contact details.png
│   │   ├── HomePage.jsx            # main page.png
│   │   ├── NotFoundPage.jsx        # 404 ocean error page
│   │   ├── ProductDetailPage.jsx   # cart product.png
│   │   ├── ShopPage.jsx            # collection.png
│   │   └── WishlistPage.jsx        # my _wishlist.png
│   ├── styles/
│   │   ├── animations.css          # CSS keyframes & reduced-motion rules
│   │   ├── index.css               # Global base styles, resets, utilities
│   │   └── variables.css           # Design tokens and geometry
│   ├── App.jsx                     # Route definitions
│   └── main.jsx                    # React 18 DOM root
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation & Development
1. Open your terminal in the `nemo_website` folder:
   ```bash
   npm install
   ```
2. Start the local Vite development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Production Build
To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 📱 Pages & UI Mockup Reference Mapping

1. **Home Page** (`/`): Implements `main page.png` (Hero, Categories, Featured Products, Special Offers banners, Best Sellers, Why Choose Us, Care Teaser, Testimonials, Map).
2. **Shop Page** (`/shop`): Implements `collection.png` (Search, Category chips, Price range slider, Availability filter, Sorting, 40-product grid, Pagination).
3. **Product Details** (`/product/:id`): Implements `cart product.png` (Image gallery with thumbnails, Specs table, Water care instructions, Quantity picker, Add to Cart, Buy Now, WhatsApp Enquiry, Related Products).
4. **Shopping Cart** (`/cart`): Implements `shopping cart.png` (Item cards, quantity modifiers, Order Summary card, WhatsApp order compiler, Call Shop, Empty cart state).
5. **Contact Us** (`/contact`): Implements `contact details.png` (3 quick-contact cards, Store address, embedded Google Map, Directions action, Opening hours table, Social links, Validated contact form).
6. **About Us** (`/about`): Implements `inrto.png` (Hero banner, Introduction, Our Story showroom photo, What We Offer cards, Core standards, CTA banner).
7. **Aquarium Care Guide** (`/care-guide`): Implements `home page.png` (Featured guide, 6 categorized articles, Interactive modal reader, Quick tips, Contact an Expert CTA).
8. **Wishlist** (`/wishlist`): Implements `my _wishlist.png` (Saved items grid, Remove button, Add to Cart button, Empty state with custom aquarium SVG illustration).
# nemoaqua
 shop application
