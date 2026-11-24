import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Trash2, 
  ShoppingCart, 
  Check, 
  ArrowLeft, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../config/storeConfig';
import './WishlistPage.css';

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist, wishlistCount } = useWishlist();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((item) => addToCart(item, 1));
  };

  return (
    <div className="wishlist-page page-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">My Wishlist</span>
        </nav>

        {/* Page Header */}
        <div className="wishlist-header">
          <div>
            <h1 className="wishlist-title">My Wishlist</h1>
            <p className="wishlist-subtitle">
              {wishlistCount > 0
                ? `You have saved ${wishlistCount} ${wishlistCount === 1 ? 'item' : 'items'} to your personal wishlist.`
                : 'Keep track of your favorite fish, aquariums, and equipment.'}
            </p>
          </div>

          {wishlistCount > 0 && (
            <div className="wishlist-header-actions">
              <button className="btn btn-outline btn-sm" onClick={handleAddAllToCart}>
                <ShoppingCart size={15} />
                <span>Add All to Cart</span>
              </button>
              <button className="clear-wishlist-btn" onClick={clearWishlist}>
                <Trash2 size={15} />
                <span>Clear Wishlist</span>
              </button>
            </div>
          )}
        </div>

        {wishlistCount > 0 ? (
          /* ACTIVE WISHLIST GRID (my _wishlist.png) */
          <div className="wishlist-content-area">
            <div className="wishlist-grid">
              {wishlistItems.map((product) => {
                const isAdded = !!addedItems[product.id];
                return (
                  <div key={product.id} className="wishlist-card card">
                    <div className="wishlist-card-image-box">
                      {product.discount > 0 && (
                        <span className="wishlist-discount-badge">{product.discount}% OFF</span>
                      )}
                      <Link to={`/product/${product.id}`} className="wishlist-img-link">
                        <img src={product.image} alt={product.name} className="wishlist-img" />
                      </Link>
                    </div>

                    <div className="wishlist-card-body">
                      <span className="wishlist-category-tag">{product.category}</span>
                      
                      <h3 className="wishlist-product-title">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>

                      <div className="wishlist-pricing-row">
                        <span className="wishlist-price">
                          {STORE_CONFIG.currency}{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="wishlist-original-price">
                            {STORE_CONFIG.currency}{product.originalPrice}
                          </span>
                        )}
                        <span className="wishlist-stock-pill">{product.availability}</span>
                      </div>

                      {/* Card Actions: Remove from Wishlist & Add to Cart */}
                      <div className="wishlist-card-actions">
                        <button
                          className="remove-wishlist-btn"
                          onClick={() => removeFromWishlist(product.id)}
                          aria-label={`Remove ${product.name} from wishlist`}
                        >
                          <Trash2 size={15} />
                          <span>Remove from Wishlist</span>
                        </button>

                        <button
                          className={`btn btn-primary wishlist-add-cart-btn ${isAdded ? 'added' : ''}`}
                          onClick={() => handleAddToCart(product)}
                          disabled={isAdded}
                        >
                          {isAdded ? (
                            <>
                              <Check size={16} />
                              <span>Added to Cart!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={16} />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="wishlist-footer-bar">
              <Link to="/shop" className="btn btn-outline">
                <ArrowLeft size={16} />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          /* EMPTY WISHLIST STATE (matches my _wishlist.png exactly) */
          <div className="empty-wishlist-box card">
            <div className="aquarium-illustration">
              {/* Cute Aquarium Illustration SVG */}
              <svg viewBox="0 0 240 160" fill="none" className="aquarium-svg">
                {/* Tank outline */}
                <rect x="20" y="20" width="200" height="120" rx="14" fill="#EBF8F9" stroke="#159EAA" strokeWidth="4" />
                {/* Water line */}
                <path d="M22 36 Q 70 30, 120 36 T 218 36 L 218 136 Q 120 136, 22 136 Z" fill="#D3F2F4" opacity="0.6" />
                {/* Sand bottom */}
                <path d="M22 122 Q 80 118, 140 124 T 218 120 L 218 136 L 22 136 Z" fill="#E6D3A3" />
                {/* Plant 1 */}
                <path d="M45 125 Q 35 90, 50 65 Q 55 90, 50 125 Z" fill="#72BFA3" />
                <path d="M52 125 Q 65 95, 55 75 Q 45 95, 48 125 Z" fill="#44A684" />
                {/* Plant 2 */}
                <path d="M190 125 Q 200 90, 185 70 Q 180 95, 186 125 Z" fill="#72BFA3" />
                {/* Little swimming clownfish */}
                <g transform="translate(105, 75)">
                  <ellipse cx="15" cy="0" rx="18" ry="11" fill="#FF7A3D" />
                  <path d="M33 0 L 44 -9 L 41 0 L 44 9 Z" fill="#E2583E" />
                  <path d="M12 -11 C 16 -6, 16 6, 12 11 C 9 8, 9 -8, 12 -11 Z" fill="#FFFFFF" />
                  <circle cx="5" cy="-2" r="2" fill="#123D4A" />
                </g>
                {/* Floating bubbles */}
                <circle cx="110" cy="55" r="3" fill="#FFFFFF" opacity="0.8" />
                <circle cx="116" cy="45" r="2" fill="#FFFFFF" opacity="0.6" />
                <circle cx="140" cy="50" r="4" fill="#FFFFFF" opacity="0.7" />
              </svg>
            </div>

            <h2 className="empty-wishlist-title">Your wishlist is feeling a little empty</h2>
            <p className="empty-wishlist-text">
              Save your favorite live fish, tanks, and accessories to this wishlist as you browse so you can review them anytime or add them directly to your order.
            </p>

            <Link to="/shop" className="btn btn-primary btn-lg">
              <ShoppingBag size={18} />
              <span>Explore Products</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
