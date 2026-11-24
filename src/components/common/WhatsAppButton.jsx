import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/storeConfig';
import './WhatsAppButton.css';

/**
 * Reusable WhatsApp Button
 * Can be rendered inline (as a button in pages/cards) or floating (fixed bottom-right corner)
 */
export default function WhatsAppButton({
  message,
  label = 'Chat on WhatsApp',
  variant = 'floating', // 'floating' | 'inline' | 'sm' | 'lg'
  className = '',
}) {
  const url = getWhatsAppUrl(message);

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-whatsapp-btn ${className}`}
        aria-label="Chat with Nemo Aquarium on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="floating-tooltip">Chat with us</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp ${variant === 'sm' ? 'btn-sm' : variant === 'lg' ? 'btn-lg' : ''} ${className}`}
    >
      <MessageCircle size={18} />
      <span>{label}</span>
    </a>
  );
}
