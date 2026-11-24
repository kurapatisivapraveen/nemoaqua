/**
 * Central Store Configuration for Nemo Aquarium Store
 * All phone numbers, WhatsApp, addresses, hours, and map links
 * are configured in this single file for easy updates.
 */

export const STORE_CONFIG = {
  name: 'Nemo Aquarium Store',
  tagline: 'Bring Your Aquarium to Life',
  currency: '₹',
  
  // Contact details
  phone: {
    display: '+91 98765 43210',
    tel: '+919876543210',
  },
  
  whatsapp: {
    display: '+91 98765 43210',
    number: '919876543210', // Without '+' or spaces for the WhatsApp API URL
    defaultMessage: 'Hello Nemo Aquarium! I would like to inquire about your aquarium products and fish.',
  },

  email: {
    display: 'support@nemoaquarium.com',
    mailto: 'mailto:support@nemoaquarium.com',
  },

  address: {
    street: '104 Marine Drive, Ocean View Complex',
    area: 'Besant Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600090',
    fullAddress: '104 Marine Drive, Ocean View Complex, Besant Nagar, Chennai, Tamil Nadu 600090',
  },

  // Google Maps links
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.351239856112!2d80.26732047585093!3d13.013328213941584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ff35555555%3A0x123456789abcdef!2sBesant%20Nagar%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Besant+Nagar+Beach+Chennai',
  },

  openingHours: [
    { day: 'Monday - Friday', phoneSupport: '9:00 AM - 9:00 PM', storeVisit: '10:00 AM - 8:30 PM' },
    { day: 'Saturday', phoneSupport: '9:00 AM - 10:00 PM', storeVisit: '10:00 AM - 9:30 PM' },
    { day: 'Sunday', phoneSupport: '10:00 AM - 8:00 PM', storeVisit: '11:00 AM - 7:30 PM' },
  ],

  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    twitter: 'https://x.com',
  },

  announcements: [
    '🌊 Special Offer: Free shipping on orders over ₹999 across the city!',
    '🐠 New Arrivals: Exotic Live Betta Fish & Discus Fish in stock now!',
    '🌿 Aquascaping Workshop & live consultation this Saturday!'
  ],

  deliveryNote: 'Availability and delivery schedule will be confirmed by our team on WhatsApp before processing.',
};

/**
 * Generate a direct WhatsApp link with a custom encoded message
 */
export const getWhatsAppUrl = (customMessage) => {
  const message = customMessage || STORE_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${STORE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate prefilled WhatsApp message for a product enquiry
 */
export const getProductEnquiryUrl = (product) => {
  const text = `Hi Nemo Aquarium Store! 🐠\n\nI am interested in this product:\n• *Product:* ${product.name}\n• *Price:* ${STORE_CONFIG.currency}${product.price}\n• *Category:* ${product.category}\n\nCould you please confirm if this is currently available in stock and how soon it can be delivered?\nThank you!`;
  return getWhatsAppUrl(text);
};

/**
 * Generate prefilled WhatsApp message for an entire Cart order
 */
export const getCartOrderWhatsAppUrl = (cartItems, totalAmount, customerInfo = {}) => {
  let message = `*NEW ORDER ENQUIRY - NEMO AQUARIUM STORE* 🐠\n`;
  message += `--------------------------------------\n`;

  if (customerInfo.name) {
    message += `👤 *Customer Name:* ${customerInfo.name}\n`;
  }
  if (customerInfo.phone) {
    message += `📞 *Customer Phone:* ${customerInfo.phone}\n`;
  }
  if (customerInfo.address) {
    message += `📍 *Delivery Address:* ${customerInfo.address}\n`;
  }

  message += `\n📦 *Order Items:*\n`;
  cartItems.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    message += `${index + 1}. *${item.name}*\n   • Qty: ${item.quantity} × ${STORE_CONFIG.currency}${item.price} = *${STORE_CONFIG.currency}${itemSubtotal}*\n`;
  });

  message += `--------------------------------------\n`;
  message += `💰 *Total Estimated Amount:* *${STORE_CONFIG.currency}${totalAmount}*\n\n`;
  message += `Please confirm product availability, shipping charges, and delivery time. Thank you!`;

  return getWhatsAppUrl(message);
};
