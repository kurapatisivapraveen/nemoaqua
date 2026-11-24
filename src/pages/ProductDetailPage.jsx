import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Zap, 
  MessageCircle, 
  Heart, 
  Check, 
  ShieldCheck, 
  Truck, 
  Droplet, 
  HelpCircle,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { PRODUCTS } from '../data/productsData';
import { STORE_CONFIG, getProductEnquiryUrl } from '../config/storeConfig';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/common/ProductCard';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Find product by id
  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  }, [id]);

  // Gallery images array
  const galleryImages = useMemo(() => {
    if (!product) return [];
    // Secondary angle and environmental view
    const secondaryImg = product.category === 'Aquarium Fish'
      ? 'https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=700&q=80'
      : 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=700&q=80';
    const tertiaryImg = 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=700&q=80';

    return [product.image, secondaryImg, tertiaryImg];
  }, [product]);

  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // 'description' | 'specs' | 'care'
  const [isAdded, setIsAdded] = useState(false);

  // Reset states when URL product id changes
  useEffect(() => {
    if (galleryImages.length > 0) {
      setActiveImage(galleryImages[0]);
    }
    setQuantity(1);
    setActiveTab('description');
    setIsAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, galleryImages]);

  if (!product) {
    return (
      <div className="container page-wrapper text-center" style={{ padding: '80px 20px' }}>
        <h2>Product Not Found</h2>
        <p style={{ margin: '16px 0 24px', color: 'var(--color-muted-text)' }}>
          The product you are looking for does not exist in our catalog.
        </p>
        <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  // Related products from same category (excluding current product)
  const relatedProducts = PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Handlers
  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="product-detail-page page-wrapper">
      <div className="container">
        {/* Breadcrumb Hierarchy */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>
          <span>/</span>
          <span className="current">{product.name}</span>
        </nav>

        {/* Main Product Showcase Layout */}
        <div className="product-showcase-grid">
          {/* LEFT: Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              {product.discount > 0 && (
                <span className="gallery-discount-badge">{product.discount}% OFF</span>
              )}
              <button
                className={`gallery-wishlist-btn ${isFavorited ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
              >
                <Heart size={20} fill={isFavorited ? '#E2583E' : 'none'} color={isFavorited ? '#E2583E' : '#607982'} />
              </button>
              <img
                src={activeImage}
                alt={product.name}
                className="main-display-image"
              />
            </div>

            {/* Thumbnail selector */}
            <div className="thumbnails-row">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail-btn ${activeImage === img ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${product.name} angle ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details & Purchase Actions */}
          <div className="product-info-panel">
            <div className="product-meta-header">
              <span className="category-pill">{product.category}</span>
              <span className="stock-pill">{product.availability}</span>
            </div>

            <h1 className="product-title">{product.name}</h1>

            {/* Reviews & Star Rating */}
            <div className="rating-row">
              <div className="star-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#FFB800' : 'none'}
                    color="#FFB800"
                  />
                ))}
              </div>
              <span className="rating-val">{product.rating} / 5</span>
              <span className="reviews-text">({product.reviewsCount} customer reviews)</span>
            </div>

            {/* Pricing Section */}
            <div className="price-box">
              <div className="price-row">
                <span className="current-price">
                  {STORE_CONFIG.currency}{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="original-price-crossed">
                    {STORE_CONFIG.currency}{product.originalPrice}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="discount-tag-pill">{product.discount}% OFF</span>
                )}
              </div>
              <p className="price-subtext">Inclusive of all local taxes. Pay on WhatsApp or Cash/UPI on Delivery.</p>
            </div>

            {/* Short Description */}
            <p className="product-short-desc">
              {product.shortDescription}
            </p>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <span className="quantity-label">Quantity:</span>
              <div className="quantity-control">
                <button
                  className="qty-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleQuantityChange(1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Cart, Buy Now, WhatsApp Enquiry */}
            <div className="action-buttons-group">
              <button
                className={`btn btn-primary btn-lg action-btn ${isAdded ? 'added' : ''}`}
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? (
                  <>
                    <Check size={20} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                className="btn btn-ocean btn-lg action-btn"
                onClick={handleBuyNow}
              >
                <Zap size={20} />
                <span>Buy Now</span>
              </button>

              <a
                href={getProductEnquiryUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg action-btn"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="detail-trust-features">
              <div className="trust-item">
                <ShieldCheck size={20} className="trust-icon" />
                <div>
                  <strong>Health Guarantee</strong>
                  <span>Quarantined & disease-free livestock</span>
                </div>
              </div>
              <div className="trust-item">
                <Truck size={20} className="trust-icon" />
                <div>
                  <strong>Careful Delivery</strong>
                  <span>Oxygenated packaging for live fish</span>
                </div>
              </div>
              <div className="trust-item">
                <Droplet size={20} className="trust-icon" />
                <div>
                  <strong>Water Tested</strong>
                  <span>Acclimated to balanced freshwater/marine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed / Accordion Information: Description, Specifications, Care */}
        <div className="product-info-tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              className={`tab-btn ${activeTab === 'care' ? 'active' : ''}`}
              onClick={() => setActiveTab('care')}
            >
              Care Instructions
            </button>
          </div>

          <div className="tab-body card">
            {/* 1. Full Description */}
            {activeTab === 'description' && (
              <div className="tab-pane fade-in">
                <h3 className="tab-pane-title">About {product.name}</h3>
                <p className="tab-text">{product.fullDescription}</p>
                <div className="tab-highlights">
                  <h4>Why Hobbyists Love This:</h4>
                  <ul>
                    <li>Hand-selected by our in-house aquatic specialists.</li>
                    <li>Sourced from sustainable and ethical breeders & manufacturers.</li>
                    <li>Backed by 100% replacement guarantee if damaged or stressed during transit.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 2. Specifications Table */}
            {activeTab === 'specs' && (
              <div className="tab-pane fade-in">
                <h3 className="tab-pane-title">Technical Specifications</h3>
                <div className="specs-table-wrapper">
                  <table className="specs-table">
                    <tbody>
                      {Object.entries(product.specs).map(([key, val]) => (
                        <tr key={key}>
                          <td className="spec-key">{key}</td>
                          <td className="spec-val">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Care & Maintenance Instructions */}
            {activeTab === 'care' && (
              <div className="tab-pane fade-in">
                <h3 className="tab-pane-title">Recommended Care & Parameters</h3>
                <div className="care-grid">
                  <div className="care-card">
                    <span className="care-card-icon">🌡️</span>
                    <h4>Temperature & pH</h4>
                    <p>{product.specs['Water Temp'] || '24°C - 28°C'} | {product.specs['pH Range'] || '6.5 - 7.5'}</p>
                  </div>
                  <div className="care-card">
                    <span className="care-card-icon">🏠</span>
                    <h4>Minimum Tank Volume</h4>
                    <p>{product.specs['Min Tank Size'] || product.specs['Dimensions'] || '10+ Gallons recommended'}</p>
                  </div>
                  <div className="care-card">
                    <span className="care-card-icon">🥣</span>
                    <h4>Feeding & Diet</h4>
                    <p>{product.specs['Diet'] || 'Feed high quality pellets or flakes 1-2 times daily in small amounts.'}</p>
                  </div>
                </div>

                <div className="care-tip-box">
                  <strong>Nemo Store Pro Tip:</strong>
                  <p>
                    Always float the transport bag in your aquarium for 20 minutes to equalize temperature, then slowly introduce aquarium water before releasing livestock. Never pour transit water into your display aquarium!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="related-header">
              <h2 className="related-title">Related Products in {product.category}</h2>
              <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="see-all-link">
                <span>View More</span>
                <ChevronRight size={18} />
              </Link>
            </div>
            <div className="related-products-grid">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
