import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* Persistent WhatsApp floating chat button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
}
