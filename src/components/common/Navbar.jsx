import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Compass 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { STORE_CONFIG } from '../../config/storeConfig';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  
  const { totalCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchModal(false);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Care Guide', path: '/care-guide' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container nav-container">
          {/* Mobile menu trigger */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="site-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-icon-wrapper">
              {/* Aquatic icon */}
              <svg viewBox="0 0 36 36" fill="none" className="logo-svg">
                <circle cx="18" cy="18" r="18" fill="#159EAA" />
                <path d="M26 18C26 22 20 25.5 15 24C11.5 22.8 9 20.8 7 18C9 15.2 11.5 13.2 15 12C20 10.5 26 14 26 18Z" fill="#FF7A3D" />
                <path d="M8 18L3 13C4.8 16.5 4.8 19.5 3 23L8 18Z" fill="#E2583E" />
                <path d="M17 12.5C19 15 19 21 17 23.5C15 23 15 13 17 12.5Z" fill="#FFFFFF" />
                <circle cx="23" cy="16.5" r="1.5" fill="#123D4A" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-title">Nemo</span>
              <span className="logo-subtitle">Aquarium Store</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Search Bar */}
          <form className="nav-search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search fish, tanks, filters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="nav-search-input"
            />
            <button type="submit" className="nav-search-btn" aria-label="Search">
              <Search size={18} />
            </button>
          </form>

          {/* User Utility Actions (Search, Wishlist, Cart) */}
          <div className="nav-actions">
            {/* Mobile search button */}
            <button
              className="action-icon-btn mobile-search-btn"
              onClick={() => setShowSearchModal(true)}
              aria-label="Search products"
            >
              <Search size={21} />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="action-icon-btn wishlist-btn"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart size={21} />
              {wishlistCount > 0 && (
                <span className="action-badge badge-wishlist">{wishlistCount}</span>
              )}
            </Link>

            {/* Shopping Cart Link */}
            <Link
              to="/cart"
              className="action-icon-btn cart-btn"
              aria-label={`Shopping cart with ${totalCount} items`}
            >
              <ShoppingCart size={21} />
              {totalCount > 0 && (
                <span className="action-badge badge-cart">{totalCount}</span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Search Modal */}
      {showSearchModal && (
        <div className="mobile-search-overlay" onClick={() => setShowSearchModal(false)}>
          <div className="mobile-search-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="mobile-search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                autoFocus
                placeholder="Search fish, tanks, food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="button" 
                className="close-search-btn"
                onClick={() => setShowSearchModal(false)}
              >
                <X size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-header">
            <Link to="/" className="site-logo" onClick={() => setMobileMenuOpen(false)}>
              <div className="logo-icon-wrapper">
                <svg viewBox="0 0 36 36" fill="none" className="logo-svg">
                  <circle cx="18" cy="18" r="18" fill="#159EAA" />
                  <path d="M26 18C26 22 20 25.5 15 24C11.5 22.8 9 20.8 7 18C9 15.2 11.5 13.2 15 12C20 10.5 26 14 26 18Z" fill="#FF7A3D" />
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-title">Nemo</span>
                <span className="logo-subtitle">Aquarium Store</span>
              </div>
            </Link>
            <button 
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="drawer-search">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search all products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" aria-label="Search">
                <Search size={18} />
              </button>
            </form>
          </div>

          <ul className="drawer-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'drawer-nav-link active' : 'drawer-nav-link'
                  }
                >
                  <span>{link.name}</span>
                  <Compass size={16} className="link-arrow" />
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-nav-link"
              >
                <span>My Wishlist ({wishlistCount})</span>
                <Heart size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-nav-link"
              >
                <span>Shopping Cart ({totalCount})</span>
                <ShoppingCart size={16} />
              </NavLink>
            </li>
          </ul>

          <div className="drawer-contact-box">
            <p className="contact-box-title">Need help choosing fish?</p>
            <a href={`tel:${STORE_CONFIG.phone.tel}`} className="btn btn-sm btn-ocean drawer-btn">
              <Phone size={15} />
              <span>Call Us: {STORE_CONFIG.phone.display}</span>
            </a>
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-whatsapp drawer-btn"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
