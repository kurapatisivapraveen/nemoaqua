import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Droplet, 
  Heart, 
  Award, 
  Users, 
  ArrowRight, 
  ShoppingBag, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';
import FloatingBubbles from '../components/common/FloatingBubbles';
import { CATEGORIES } from '../data/categoriesData';
import { STORE_CONFIG } from '../config/storeConfig';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page page-wrapper">
      {/* 1. HERO BANNER (inrto.png) */}
      <section className="about-hero">
        <FloatingBubbles count={12} />
        <div className="container about-hero-container">
          <span className="badge badge-aqua" style={{ background: 'rgba(255,255,255,0.18)', color: '#FFFFFF' }}>
            Our Passion for Aquatics
          </span>
          <h1 className="about-hero-title">About Nemo Aquarium Store</h1>
          <p className="about-hero-subtitle">
            Dedicated to helping hobbyists, families, and aquascapers create thriving underwater ecosystems with healthy livestock and premium equipment.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">About Us</span>
        </nav>

        {/* 2. INTRODUCTION SECTION (inrto.png) */}
        <section className="about-intro-section">
          <div className="intro-text-block text-center">
            <span className="section-badge">Welcome to Nemo</span>
            <h2 className="about-section-heading">Bringing the Beauty of the Ocean to Your Home</h2>
            <p className="intro-lead">
              Founded by passionate aquarium hobbyists, Nemo Aquarium Store was established with a singular vision: to provide healthy, ethically sourced aquatic life paired with honest, reliable advice. Whether you are setting up your child's very first nano tank or designing an international-grade aquascape, we are here with you every step of the journey.
            </p>
          </div>
        </section>

        {/* 3. OUR STORY SECTION (inrto.png) */}
        <section className="our-story-section card">
          <div className="story-grid">
            <div className="story-image-box">
              <img
                src="https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=800&q=80"
                alt="Nemo Aquarium Showroom Tank Gallery"
                className="story-img"
              />
              <div className="story-badge-overlay">
                <span className="overlay-number">10+</span>
                <span className="overlay-text">Years of Fishkeeping Experience</span>
              </div>
            </div>

            <div className="story-content">
              <span className="section-badge">Our Journey</span>
              <h2 className="story-title">Crafting Underwater Living Art</h2>
              <p className="story-paragraph">
                What began as a personal fascination with marine biotope reefs and freshwater planted aquascapes has grown into one of the most trusted specialty aquarium destinations in the city.
              </p>
              <p className="story-paragraph">
                We observed that many commercial pet stores sold fish without proper quarantine or care instructions, leading to preventable losses for beginners. We chose a different path: every species in our showroom undergoes dedicated quarantine protocols, receives varied nutrition, and is only handed to customers once fully acclimated and healthy.
              </p>

              <div className="story-key-points">
                <div className="story-point">
                  <CheckCircle2 size={18} className="point-icon" />
                  <span>Ethically sourced livestock from certified breeders</span>
                </div>
                <div className="story-point">
                  <CheckCircle2 size={18} className="point-icon" />
                  <span>Strict multi-stage quarantine facility</span>
                </div>
                <div className="story-point">
                  <CheckCircle2 size={18} className="point-icon" />
                  <span>Lifelong WhatsApp support for all our customers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE OFFER SECTION (inrto.png) */}
        <section className="what-we-offer-section">
          <div className="section-header text-center">
            <span className="section-badge">Catalog Highlights</span>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Everything required to establish and maintain a pristine aquarium environment.
            </p>
          </div>

          <div className="offer-cards-grid">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="offer-card card"
              >
                <div className="offer-thumb-wrapper">
                  <img src={cat.image} alt={cat.name} className="offer-thumb" />
                </div>
                <div className="offer-details">
                  <h3 className="offer-title">{cat.name}</h3>
                  <p className="offer-desc">{cat.description}</p>
                  <span className="offer-explore-link">
                    <span>Browse Collection</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. WHY CHOOSE US (4 Feature Cards matching inrto.png) */}
        <section className="about-why-us-section">
          <div className="section-header text-center">
            <span className="section-badge">Core Standards</span>
            <h2 className="section-title">Why Choose Us?</h2>
          </div>

          <div className="about-features-grid">
            <div className="about-feature-box card">
              <div className="feature-icon aqua">
                <ShieldCheck size={26} />
              </div>
              <h4>Quarantined Livestock</h4>
              <p>
                Every fish is observed and fed premium diets for at least 7 days before display, preventing disease transmission.
              </p>
            </div>

            <div className="about-feature-box card">
              <div className="feature-icon ocean">
                <Droplet size={26} />
              </div>
              <h4>Water Conditioning Guidance</h4>
              <p>
                We test your water parameters for free and provide customized acclimation instructions for your specific tank.
              </p>
            </div>

            <div className="about-feature-box card">
              <div className="feature-icon green">
                <Award size={26} />
              </div>
              <h4>Tested Equipment Only</h4>
              <p>
                We do not sell fragile unbranded pumps or heaters. Everything on our shelves has been tested in our own showroom.
              </p>
            </div>

            <div className="about-feature-box card">
              <div className="feature-icon aqua">
                <MessageCircle size={26} />
              </div>
              <h4>Direct Owner Chat</h4>
              <p>
                Connect directly with our fishkeeping experts over WhatsApp for emergency troubleshooting and advice.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION BANNER (inrto.png) */}
        <section className="about-cta-section">
          <div className="about-cta-box card">
            <div className="about-cta-content text-center">
              <h2>Ready to Start Your Underwater Journey?</h2>
              <p>
                Explore our 40+ curated aquatic products or speak directly with our team on WhatsApp today.
              </p>
              <div className="about-cta-buttons">
                <Link to="/shop" className="btn btn-primary btn-lg">
                  <ShoppingBag size={18} />
                  <span>Explore Products</span>
                </Link>
                <Link to="/contact" className="btn btn-ocean btn-lg">
                  <Phone size={18} />
                  <span>Contact Our Showroom</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
