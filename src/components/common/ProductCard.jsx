import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Check, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { STORE_CONFIG } from '../../config/storeConfig';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isAdded, setIsAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-card-top">
        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="card-badge-discount">{product.discount}% OFF</span>
        )}

        {/* Wishlist Toggle Button */}
        <button
          className={`card-wishlist-btn ${isFavorited ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={18} fill={isFavorited ? '#E2583E' : 'none'} color={isFavorited ? '#E2583E' : '#607982'} />
        </button>

        {/* Product Image with Hover Zoom */}
        <Link to={`/product/${product.id}`} className="product-image-link">
          <img
            src={product.image}
            alt={product.name}
            className="product-img"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="product-card-body">
        <span className="product-category-tag">{product.category}</span>
        
        <h3 className="product-card-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        {/* Star Rating */}
        <div className="product-rating">
          <div className="stars">
            <Star size={14} className="star-filled" fill="#FFB800" color="#FFB800" />
            <span className="rating-score">{product.rating}</span>
          </div>
          <span className="reviews-count">({product.reviewsCount})</span>
          <span className="stock-status-pill">{product.availability}</span>
        </div>

        {/* Pricing */}
        <div className="product-card-pricing">
          <span className="selling-price">
            {STORE_CONFIG.currency}{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="original-price">
              {STORE_CONFIG.currency}{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className={`btn-add-cart ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdded}
          aria-label={`Add ${product.name} to shopping cart`}
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
  );
}
