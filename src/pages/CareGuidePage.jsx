import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle2, 
  Droplets, 
  HelpCircle, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import FloatingBubbles from '../components/common/FloatingBubbles';
import { CARE_GUIDES, QUICK_TIPS } from '../data/careGuidesData';
import { STORE_CONFIG, getWhatsAppUrl } from '../config/storeConfig';
import './CareGuidePage.css';

export default function CareGuidePage() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <div className="care-guide-page page-wrapper">
      {/* 1. HERO BANNER (home page.png) */}
      <section className="care-hero">
        <FloatingBubbles count={14} />
        <div className="container care-hero-container">
          <span className="badge badge-aqua" style={{ background: 'rgba(255,255,255,0.18)', color: '#FFFFFF' }}>
            Aquarium Knowledge Base
          </span>
          <h1 className="care-hero-title">Learn How to Care for Your Aquarium</h1>
          <p className="care-hero-subtitle">
            Master the art of fishkeeping: step-by-step guides on nitrogen cycling, pristine water chemistry, proper feeding, and healthy tank ecosystems.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">Aquarium Care Guide</span>
        </nav>

        {/* 2. INTRODUCTION & FEATURED ARTICLE (home page.png) */}
        <section className="care-featured-section card">
          <div className="featured-guide-grid">
            <div className="featured-guide-img-box">
              <img
                src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
                alt="Aquarium Care Introduction"
                className="featured-guide-img"
              />
              <span className="featured-pill">Featured Guide</span>
            </div>

            <div className="featured-guide-content">
              <span className="guide-meta-cat">Beginner Fundamentals</span>
              <h2 className="featured-guide-title">
                The Golden Rules of Successful Fishkeeping
              </h2>
              <p className="featured-guide-desc">
                Setting up an aquarium is more than just adding water and fish. It involves creating a balanced biological micro-environment where nitrifying bacteria, plants, and fish live in harmony. Learn how to prevent the common beginner mistakes that cause cloudy water and stressed fish.
              </p>
              
              <div className="guide-highlights-list">
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Never cycle your tank with fish inside; always establish beneficial bacteria first.</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Feed in small portions that fish can consume in under 2 minutes.</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>Perform weekly 20% partial water changes with conditioned water.</span>
                </div>
              </div>

              <button
                className="btn btn-primary btn-sm"
                style={{ marginTop: '16px' }}
                onClick={() => setSelectedGuide(CARE_GUIDES[0])}
              >
                <span>Read Full Article</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* 3. CATEGORIZED CARE GUIDES GRID (home page.png) */}
        <section className="care-articles-section">
          <div className="section-header text-center">
            <span className="section-badge">Step-by-Step Manuals</span>
            <h2 className="section-title">Explore Aquarium Care Articles</h2>
            <p className="section-subtitle">
              Click any article below to read in-depth maintenance guidance written by experienced aquascapers.
            </p>
          </div>

          <div className="care-articles-grid">
            {CARE_GUIDES.map((guide) => (
              <div
                key={guide.id}
                className="care-article-card card"
                onClick={() => setSelectedGuide(guide)}
              >
                <div className="article-img-wrapper">
                  <img src={guide.image} alt={guide.title} className="article-img" loading="lazy" />
                  <span className="article-category-badge">{guide.category}</span>
                </div>

                <div className="article-content">
                  <div className="article-time">
                    <Clock size={13} />
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="article-title">{guide.title}</h3>
                  <p className="article-summary">{guide.summary}</p>
                  
                  <div className="article-footer">
                    <span className="read-more-btn">
                      <span>Read More</span>
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. QUICK TIPS & CONTACT EXPERT SPLIT (home page.png) */}
        <section className="care-bottom-split-section">
          {/* Quick Tips Box */}
          <div className="quick-tips-card card">
            <div className="quick-tips-header">
              <Sparkles size={22} className="tips-icon" />
              <h3>Quick Tips for Healthy Aquariums</h3>
            </div>
            <ul className="quick-tips-list">
              {QUICK_TIPS.map((tip, idx) => (
                <li key={idx} className="quick-tip-item">
                  <CheckCircle2 size={18} className="tip-check" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact an Expert Banner (home page.png) */}
          <div className="contact-expert-card card">
            <div className="expert-content">
              <span className="expert-badge">Direct Aquarium Assistance</span>
              <h3 className="expert-title">Need Help Diagnosing Water or Fish Issues?</h3>
              <p className="expert-desc">
                Have cloudy water, high ammonia, or unsure what fish can live together? Our resident aquarium specialists provide free guidance over WhatsApp.
              </p>
              
              <div className="expert-actions">
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsapp.number}?text=${encodeURIComponent('Hi Nemo Aquarium! I have a question about my aquarium water care / fish health.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Chat with an Expert</span>
                </a>
                <a href={`tel:${STORE_CONFIG.phone.tel}`} className="btn btn-ocean">
                  <Phone size={18} />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ARTICLE DETAILS MODAL */}
        {selectedGuide && (
          <div className="guide-modal-overlay" onClick={() => setSelectedGuide(null)}>
            <div className="guide-modal card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <span className="modal-cat-badge">{selectedGuide.category}</span>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedGuide(null)}
                  aria-label="Close article"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="modal-scroll-body">
                <div className="modal-image-box">
                  <img src={selectedGuide.image} alt={selectedGuide.title} />
                </div>

                <h2 className="modal-article-title">{selectedGuide.title}</h2>
                <div className="modal-meta-row">
                  <span>⏱ {selectedGuide.readTime}</span>
                  <span>•</span>
                  <span>Category: {selectedGuide.category}</span>
                </div>

                <div className="modal-full-text">
                  {selectedGuide.fullContent.split('\n\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>

                {selectedGuide.tips && (
                  <div className="modal-tips-box">
                    <h4>Pro Care Tips:</h4>
                    <ul>
                      {selectedGuide.tips.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-footer-cta">
                  <Link to="/shop" className="btn btn-primary" onClick={() => setSelectedGuide(null)}>
                    <span>Explore Products for this Setup</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
