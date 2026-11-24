import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  ShoppingBag, 
  MessageCircle, 
  Phone, 
  ArrowLeft, 
  ShieldCheck, 
  Info,
  User,
  MapPin,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG, getCartOrderWhatsAppUrl } from '../config/storeConfig';
import './CartPage.css';

export default function CartPage() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    totalCount, 
    totalAmount 
  } = useCart();

  // Optional customer details for the WhatsApp message
  const [customerName, setCustomerName] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  // Generate WhatsApp order URL
  const whatsAppOrderUrl = getCartOrderWhatsAppUrl(cartItems, totalAmount, {
    name: customerName.trim(),
    address: deliveryArea.trim(),
  });

  return (
    <div className="cart-page page-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">Shopping Cart</span>
        </nav>

        {/* Page Title */}
        <div className="cart-header">
          <h1 className="cart-title">Your Shopping Cart</h1>
          <p className="cart-subtitle">
            {cartItems.length > 0
              ? `You have ${totalCount} ${totalCount === 1 ? 'item' : 'items'} in your cart. Review items before submitting your order.`
              : 'Your cart is currently empty.'}
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-layout-grid">
            {/* LEFT COLUMN: Cart Items List */}
            <div className="cart-items-column">
              <div className="cart-items-list">
                {cartItems.map((item) => {
                  const itemSubtotal = item.price * item.quantity;
                  return (
                    <div key={item.id} className="cart-item-card">
                      <Link to={`/product/${item.id}`} className="cart-item-image-box">
                        <img src={item.image} alt={item.name} className="cart-item-img" />
                      </Link>

                      <div className="cart-item-details">
                        <div className="cart-item-title-row">
                          <span className="cart-item-category">{item.category}</span>
                          <h3 className="cart-item-title">
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                          </h3>
                        </div>

                        <div className="cart-item-price-row">
                          <span className="cart-item-unit-price">
                            {STORE_CONFIG.currency}{item.price} each
                          </span>
                        </div>

                        <div className="cart-item-actions-row">
                          {/* Quantity Selector */}
                          <div className="cart-qty-control">
                            <button
                              className="cart-qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="cart-qty-val">{item.quantity}</span>
                            <button
                              className="cart-qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          {/* Subtotal for this item */}
                          <div className="cart-item-subtotal">
                            <span className="subtotal-label">Subtotal:</span>
                            <span className="subtotal-amount">
                              {STORE_CONFIG.currency}{itemSubtotal}
                            </span>
                          </div>

                          {/* Remove Button */}
                          <button
                            className="cart-remove-btn"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={16} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions under list */}
              <div className="cart-table-footer">
                <Link to="/shop" className="btn btn-outline continue-shopping-btn">
                  <ArrowLeft size={16} />
                  <span>Continue Shopping</span>
                </Link>
                <button className="clear-cart-text-btn" onClick={clearCart}>
                  <Trash2 size={15} />
                  <span>Clear Entire Cart</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Order Summary (as in shopping cart.png) */}
            <div className="cart-summary-column">
              <div className="order-summary-card card">
                <h3 className="summary-title">Order Summary</h3>

                <div className="summary-row">
                  <span className="summary-label">Items Subtotal:</span>
                  <span className="summary-val">
                    {STORE_CONFIG.currency}{totalAmount}
                  </span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Shipping / Delivery:</span>
                  <span className="summary-val shipping-badge">TBC</span>
                </div>
                <p className="shipping-note">
                  *Calculated based on your delivery location upon confirmation.
                </p>

                <div className="summary-divider" />

                <div className="summary-total-row">
                  <span className="total-label">Estimated Total:</span>
                  <span className="total-amount">
                    {STORE_CONFIG.currency}{totalAmount}
                  </span>
                </div>

                {/* Optional Customer Details for WhatsApp Order */}
                <div className="customer-details-accordion">
                  <button
                    className="toggle-details-btn"
                    onClick={() => setShowDetailsForm(!showDetailsForm)}
                  >
                    <span>{showDetailsForm ? '− Hide Delivery Details' : '+ Add Name & Address (Optional)'}</span>
                  </button>

                  {showDetailsForm && (
                    <div className="customer-fields-box">
                      <div className="field-group">
                        <label>Your Name:</label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                      </div>
                      <div className="field-group">
                        <label>Delivery Area / Landmark:</label>
                        <input
                          type="text"
                          placeholder="e.g. Besant Nagar, Chennai"
                          value={deliveryArea}
                          onChange={(e) => setDeliveryArea(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Order Buttons */}
                <div className="summary-buttons-stack">
                  <a
                    href={whatsAppOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg order-btn-whatsapp"
                  >
                    <MessageCircle size={20} />
                    <span>Order via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${STORE_CONFIG.phone.tel}`}
                    className="btn btn-ocean btn-lg order-btn-call"
                  >
                    <Phone size={20} />
                    <span>Call Shop</span>
                  </a>
                </div>

                {/* Disclaimer note matching UI mockup */}
                <div className="summary-disclaimer">
                  <Info size={16} className="disclaimer-icon" />
                  <p>
                    <strong>Note:</strong> Availability and final order details will be confirmed by the shop before processing. No online card payment required upfront.
                  </p>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="cart-guarantee-box">
                <div className="guarantee-item">
                  <ShieldCheck size={18} className="guarantee-icon" />
                  <span>Live Fish Arrival Guarantee</span>
                </div>
                <div className="guarantee-item">
                  <Sparkles size={18} className="guarantee-icon" />
                  <span>Free Expert Acclimation Guidance</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* EMPTY CART STATE */
          <div className="empty-cart-view card">
            <div className="empty-cart-graphic">
              <ShoppingBag size={58} className="empty-bag-icon" />
            </div>
            <h2 className="empty-cart-title">Your Shopping Cart is Empty</h2>
            <p className="empty-cart-text">
              Looks like you haven't added any aquatic life or accessories yet. Explore our vibrant tropical fish, rimless tanks, and filtration equipment!
            </p>
            <div className="empty-cart-actions">
              <Link to="/shop" className="btn btn-primary btn-lg">
                <ShoppingBag size={20} />
                <span>Explore Products</span>
              </Link>
              <Link to="/" className="btn btn-outline btn-lg">
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
