import React, { useState, useEffect } from 'react';
import { STORE_CONFIG } from '../../config/storeConfig';
import { Phone, MessageCircle } from 'lucide-react';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STORE_CONFIG.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="container announcement-container">
        <div className="announcement-message">
          <span>{STORE_CONFIG.announcements[currentIndex]}</span>
        </div>
        <div className="announcement-actions">
          <a href={`tel:${STORE_CONFIG.phone.tel}`} className="announcement-link">
            <Phone size={13} />
            <span>Call: {STORE_CONFIG.phone.display}</span>
          </a>
          <span className="divider">|</span>
          <a
            href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-link"
          >
            <MessageCircle size={13} />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
