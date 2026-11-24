import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  ExternalLink 
} from 'lucide-react';
import { STORE_CONFIG } from '../../config/storeConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Column 1: Store Info & Bio */}
        <div className="footer-col footer-about">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <svg viewBox="0 0 36 36" fill="none" width="34" height="34">
                <circle cx="18" cy="18" r="18" fill="#159EAA" />
                <path d="M26 18C26 22 20 25.5 15 24C11.5 22.8 9 20.8 7 18C9 15.2 11.5 13.2 15 12C20 10.5 26 14 26 18Z" fill="#FF7A3D" />
                <circle cx="23" cy="16.5" r="1.5" fill="#123D4A" />
              </svg>
            </div>
            <div className="footer-logo-text">
              <span className="footer-logo-title">Nemo</span>
              <span className="footer-logo-subtitle">Aquarium Store</span>
            </div>
          </Link>
          <p className="footer-bio">
            Your trusted local destination for vibrant aquatic life, custom tanks, specialized filtration systems, and expert guidance for all fishkeepers.
          </p>
          <div className="footer-address">
            <MapPin size={18} className="footer-icon-accent" />
            <div>
              <p>{STORE_CONFIG.address.street}</p>
              <p>{STORE_CONFIG.address.area}, {STORE_CONFIG.address.city} - {STORE_CONFIG.address.pincode}</p>
              <a 
                href={STORE_CONFIG.maps.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-directions-link"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop All Products</Link></li>
            <li><Link to="/about">About Our Store</Link></li>
            <li><Link to="/care-guide">Aquarium Care Guide</Link></li>
            <li><Link to="/wishlist">My Wishlist</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/contact">Contact & Store Location</Link></li>
          </ul>
        </div>

        {/* Column 3: Shop Categories */}
        <div className="footer-col footer-categories-col">
          <h4 className="footer-col-title">Product Categories</h4>
          <ul className="footer-links-list">
            <li><Link to="/shop?category=Aquarium+Fish">Live Aquarium Fish</Link></li>
            <li><Link to="/shop?category=Aquariums+%26+Tanks">Glass Tanks & Aquariums</Link></li>
            <li><Link to="/shop?category=Filters+%26+Motors">Filters & Motors</Link></li>
            <li><Link to="/shop?category=Fish+Food">Fish Food & Pellets</Link></li>
            <li><Link to="/shop?category=Decorations+%26+Plants">Decorations & Live Plants</Link></li>
            <li><Link to="/shop?category=Water+Care+%26+Medicines">Water Care & Conditioners</Link></li>
            <li><Link to="/shop?category=Aquarium+Accessories">Aquarium Accessories</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Hours */}
        <div className="footer-col footer-customer-care-col">
          <h4 className="footer-col-title">Customer Care</h4>
          <ul className="footer-contact-list">
            <li>
              <a href={`tel:${STORE_CONFIG.phone.tel}`} className="footer-contact-item">
                <Phone size={17} className="footer-icon-accent" />
                <div>
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">{STORE_CONFIG.phone.display}</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <MessageCircle size={17} className="footer-icon-accent green" />
                <div>
                  <span className="contact-label">WhatsApp Order & Chat</span>
                  <span className="contact-value">{STORE_CONFIG.whatsapp.display}</span>
                </div>
              </a>
            </li>
            <li>
              <a href={STORE_CONFIG.email.mailto} className="footer-contact-item">
                <Mail size={17} className="footer-icon-accent" />
                <div>
                  <span className="contact-label">Email Support</span>
                  <span className="contact-value">{STORE_CONFIG.email.display}</span>
                </div>
              </a>
            </li>
          </ul>

          <div className="footer-hours">
            <div className="hours-header">
              <Clock size={16} className="footer-icon-accent" />
              <span>Store Visiting Hours</span>
            </div>
            <p className="hours-text">Mon - Sat: 10:00 AM - 9:00 PM</p>
            <p className="hours-text">Sunday: 11:00 AM - 7:30 PM</p>
          </div>

          <div className="footer-socials">
            <span className="socials-label">Follow Us:</span>
            <div className="social-icons">
              <a href={STORE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={STORE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={STORE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} Nemo Aquarium Store. All rights reserved.</p>
          <p className="footer-disclaimer">
            Orders placed via WhatsApp / Phone. No online card payments required.
          </p>
        </div>
      </div>
    </footer>
  );
}
