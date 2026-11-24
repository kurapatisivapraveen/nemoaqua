import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Instagram, 
  Facebook, 
  Youtube, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { STORE_CONFIG, getWhatsAppUrl } from '../config/storeConfig';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'General Enquiry',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validate form fields on the frontend
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormSubmitted(true);
  };

  // Convert contact form content to a WhatsApp message for instant delivery
  const handleSendToWhatsApp = () => {
    const message = `*ENQUIRY FROM WEBSITE - NEMO AQUARIUM STORE*\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email}\n• *Topic:* ${formData.topic}\n• *Message:* ${formData.message}`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="contact-page page-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">Contact Us</span>
        </nav>

        {/* Header Section (contact details.png) */}
        <div className="contact-header text-center">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Welcome to Nemo Aquarium Store. We are always happy to help with livestock availability, custom tank setups, and expert fishkeeping advice.
          </p>
        </div>

        {/* 3 TOP CONTACT CARDS (contact details.png) */}
        <div className="contact-cards-grid">
          {/* Card 1: Call Us */}
          <div className="contact-card">
            <div className="contact-card-icon-box aqua-bg">
              <Phone size={28} />
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-desc">Speak directly with our showroom team.</p>
            <a href={`tel:${STORE_CONFIG.phone.tel}`} className="contact-card-link">
              {STORE_CONFIG.phone.display}
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="contact-card">
            <div className="contact-card-icon-box green-bg">
              <MessageCircle size={28} />
            </div>
            <h3 className="contact-card-title">WhatsApp</h3>
            <p className="contact-card-desc">Fast replies, live fish photos & delivery orders.</p>
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link green-text"
            >
              {STORE_CONFIG.whatsapp.display}
            </a>
          </div>

          {/* Card 3: Email Us */}
          <div className="contact-card">
            <div className="contact-card-icon-box mint-bg">
              <Mail size={28} />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-desc">For commercial inquiries and support.</p>
            <a href={STORE_CONFIG.email.mailto} className="contact-card-link">
              {STORE_CONFIG.email.display}
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION: Store Address, Map, Opening Hours (contact details.png) */}
        <div className="contact-info-grid">
          {/* Address Box */}
          <div className="info-box address-box card">
            <div className="info-box-header">
              <MapPin size={22} className="info-icon" />
              <h3>Store Address</h3>
            </div>
            <p className="address-line"><strong>{STORE_CONFIG.name}</strong></p>
            <p className="address-line">{STORE_CONFIG.address.street}</p>
            <p className="address-line">{STORE_CONFIG.address.area}</p>
            <p className="address-line">{STORE_CONFIG.address.city}, {STORE_CONFIG.address.state}</p>
            <p className="address-line">Pincode: {STORE_CONFIG.address.pincode}</p>

            <a
              href={STORE_CONFIG.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ marginTop: '18px' }}
            >
              <ExternalLink size={14} />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Embedded Google Map Box */}
          <div className="info-box map-embed-box card">
            <div className="map-wrapper">
              <iframe
                title="Store Location Map"
                src={STORE_CONFIG.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-footer">
              <a
                href={STORE_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary get-directions-btn"
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Store Opening Hours Schedule Table (contact details.png) */}
          <div className="info-box hours-box card">
            <div className="info-box-header">
              <Clock size={22} className="info-icon" />
              <h3>Store Opening Hours</h3>
            </div>

            <div className="hours-table-wrapper">
              <table className="hours-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Phone Support</th>
                    <th>Store Visit</th>
                  </tr>
                </thead>
                <tbody>
                  {STORE_CONFIG.openingHours.map((row, idx) => (
                    <tr key={idx}>
                      <td className="day-name">{row.day}</td>
                      <td>{row.phoneSupport}</td>
                      <td>{row.storeVisit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Follow Us Social Media Section */}
            <div className="follow-us-section">
              <h4>Follow Us</h4>
              <div className="follow-social-links">
                <a href={STORE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href={STORE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href={STORE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Interactive Frontend Contact Form */}
        <div className="contact-form-section card">
          <div className="form-header text-center">
            <h2>Send Us a Message</h2>
            <p>
              Leave your inquiry below or ask about fish availability. Our team will get back to you promptly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="form-success-box">
              <CheckCircle2 size={54} className="success-icon" />
              <h3>Thank You, {formData.name}!</h3>
              <p>
                Your message has been received on the frontend. Would you like to forward this directly to our team on WhatsApp for an immediate reply?
              </p>
              <div className="success-actions">
                <button className="btn btn-whatsapp btn-lg" onClick={handleSendToWhatsApp}>
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp Now</span>
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', topic: 'General Enquiry', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={formErrors.phone ? 'error' : ''}
                  />
                  {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                </div>

                {/* Topic / Subject */}
                <div className="form-group">
                  <label htmlFor="topic">Enquiry Subject</label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Live Fish Availability">Live Fish Availability</option>
                    <option value="Custom Tank Setup">Custom Tank Setup & Sizing</option>
                    <option value="Filters & Equipment">Filters & Equipment Advice</option>
                    <option value="Bulk Order Enquiry">Bulk Order Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group full-width">
                <label htmlFor="message">Your Message or Enquiry *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what fish or aquarium products you are looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                />
                {formErrors.message && <span className="error-text">{formErrors.message}</span>}
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                  <Send size={18} />
                  <span>Submit Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
