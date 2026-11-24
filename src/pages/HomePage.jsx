import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  Droplet, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Star, 
  MapPin, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import FloatingBubbles from '../components/common/FloatingBubbles';
import ProductCard from '../components/common/ProductCard';
import { CATEGORIES } from '../data/categoriesData';
import { PRODUCTS } from '../data/productsData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { STORE_CONFIG } from '../config/storeConfig';
import './HomePage.css';

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <FloatingBubbles count={14} />
        
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>Premium Aquarium & Aquatic Life Store</span>
            </div>
            
            <h1 className="hero-title">
              Bring Your Aquarium <br />
              <span className="hero-title-highlight">to Life</span>
            </h1>
            
            <p className="hero-description">
              Discover vibrant exotic fish, crystal-clear rimless tanks, high-grade quiet filtration, and expert guidance to build your thriving aquatic paradise.
            </p>
            
            <div className="hero-cta-group">
              <Link to="/shop" className="btn btn-primary hero-btn">
                <ShoppingBag size={16} />
                <span>Shop Collection</span>
              </Link>
              <Link to="/care-guide" className="btn hero-btn-secondary">
                <BookOpen size={16} />
                <span>Care Guide</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY SECTION */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Explore Categories</span>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Browse everything from healthy exotic livestock to professional equipment and live aquascaping plants.
            </p>
          </div>

          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="category-card"
              >
                <div className="category-img-wrapper">
                  <img src={cat.image} alt={cat.name} className="category-img" loading="lazy" />
                  <div className="category-overlay" />
                </div>
                <div className="category-info">
                  <h3 className="category-name">{cat.name}</h3>
                  <span className="category-count">{cat.itemCount} items</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Hand-Picked Selections</span>
              <h2 className="section-title">Featured Products</h2>
            </div>
            <Link to="/shop" className="see-all-link">
              <span>View All 40 Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIAL OFFERS PROMOTIONAL BANNERS */}
      <section className="section promo-banners-section">
        <div className="container">
          <div className="promo-banners-grid">
            {/* Banner 1: Live Fish Discount */}
            <div className="promo-banner-card teal-banner">
              <div className="promo-content">
                <span className="promo-tag">Special Offers</span>
                <h3 className="promo-title">Up to 25% OFF on Live Fish & Aquascapes</h3>
                <p className="promo-desc">
                  Select from healthy acclimated Bettas, Neon Tetras, and live tissue-culture plants.
                </p>
                <Link to="/shop?category=Aquarium+Fish" className="btn btn-sm btn-ocean promo-btn">
                  <span>Shop Live Fish</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="promo-visual">
                <img
                  src="https://images.unsplash.com/photo-1534043464124-3be32fe00099?auto=format&fit=crop&w=400&q=80"
                  alt="Betta fish special offer"
                  className="promo-img animate-swim"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Banner 2: Complete Tank Kits */}
            <div className="promo-banner-card green-banner">
              <div className="promo-content">
                <span className="promo-tag">Complete Tank Sets</span>
                <h3 className="promo-title">Ultra-White Rimless Glass Aquariums</h3>
                <p className="promo-desc">
                  Low-iron 6mm crystal glass tanks with German silicone. Perfect for home & office.
                </p>
                <Link to="/shop?category=Aquariums+%26+Tanks" className="btn btn-sm btn-ocean promo-btn">
                  <span>Explore Tanks</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="promo-visual">
                <img
                  src="https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=400&q=80"
                  alt="Rimless glass aquarium kit"
                  className="promo-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEST SELLING PRODUCTS SECTION */}
      <section className="section best-sellers-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Hobbyist Favorites</span>
              <h2 className="section-title">Best Selling Products</h2>
            </div>
            <Link to="/shop" className="see-all-link">
              <span>Explore All</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">The Nemo Promise</span>
            <h2 className="section-title">Why Choose Nemo Aquarium Store?</h2>
            <p className="section-subtitle">
              We care about the health of your aquatic pets just as much as you do.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-title">100% Healthy Livestock</h3>
              <p className="feature-desc">
                Every fish undergoes careful quarantine and feeding protocols before leaving our store to ensure vibrant health.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Droplet size={28} />
              </div>
              <h3 className="feature-title">Free Water Testing & Advice</h3>
              <p className="feature-desc">
                Bring your aquarium water sample or message us on WhatsApp for free water quality analysis and parameters advice.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="feature-title">Tested Premium Gear</h3>
              <p className="feature-desc">
                We only stock reliable filters, shatterproof heaters, and plant-growth lights that our own aquascapers use and trust.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <MessageCircle size={28} />
              </div>
              <h3 className="feature-title">Direct WhatsApp Support</h3>
              <p className="feature-desc">
                Get video previews of your fish before dispatch, instant advice, and fast local doorstep delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AQUARIUM CARE TIPS TEASER */}
      <section className="section care-teaser-section">
        <div className="container">
          <div className="care-teaser-box">
            <div className="care-teaser-content">
              <span className="section-badge light">Aquarium Guide</span>
              <h2 className="care-teaser-title">New to Fishkeeping? We've Got You Covered.</h2>
              <p className="care-teaser-desc">
                Learn the golden rules of nitrogen cycle, safe water acclimatization, proper feeding schedules, and weekly maintenance to keep your tank thriving.
              </p>
              <div className="care-teaser-bullets">
                <div className="bullet-item">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>Nitrogen Cycle Explained Simply</span>
                </div>
                <div className="bullet-item">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>Ideal Water Temperatures & pH for Popular Fish</span>
                </div>
                <div className="bullet-item">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>How to Prevent Algae & Cloudy Water</span>
                </div>
              </div>
              <Link to="/care-guide" className="btn btn-primary btn-lg" style={{ marginTop: '16px' }}>
                <BookOpen size={18} />
                <span>Read Full Aquarium Care Guide</span>
              </Link>
            </div>

            <div className="care-teaser-img-box">
              <img
                src="https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=700&q=80"
                alt="Aquarium Care and Aquascaping"
                className="care-teaser-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Happy Hobbyists</span>
            <h2 className="section-title">Customer Testimonials</h2>
            <p className="section-subtitle">
              Read what fellow fishkeepers say about our livestock health, fast WhatsApp response, and quality products.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <h4 className="testimonial-headline">"{item.title}"</h4>
                <p className="testimonial-comment">{item.comment}</p>
                <div className="testimonial-author">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div>
                    <span className="author-name">{item.name}</span>
                    <span className="author-location">{item.location} • {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. STORE LOCATION TEASER & DIRECT CONTACT */}
      <section className="section store-teaser-section">
        <div className="container">
          <div className="store-teaser-card">
            <div className="store-teaser-info">
              <span className="section-badge">Visit Our Showroom</span>
              <h2 className="store-teaser-title">Experience Our Live Aquariums In Person</h2>
              <p className="store-teaser-text">
                Drop by our store to view hundreds of swimming tropical fish, hand-pick your favorite Betta or Discus, and explore live planted aquascapes in person.
              </p>

              <div className="teaser-contact-rows">
                <div className="teaser-row">
                  <MapPin size={20} className="teaser-icon" />
                  <div>
                    <strong>Store Address:</strong>
                    <p>{STORE_CONFIG.address.fullAddress}</p>
                  </div>
                </div>

                <div className="teaser-row">
                  <Phone size={20} className="teaser-icon" />
                  <div>
                    <strong>Call Us:</strong>
                    <p><a href={`tel:${STORE_CONFIG.phone.tel}`}>{STORE_CONFIG.phone.display}</a></p>
                  </div>
                </div>
              </div>

              <div className="teaser-action-buttons">
                <a
                  href={STORE_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={18} />
                  <span>Get Directions</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="store-teaser-map">
              <iframe
                title="Nemo Aquarium Store Location"
                src={STORE_CONFIG.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
