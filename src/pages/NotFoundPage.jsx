import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home, ShoppingBag } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="container page-wrapper" style={{ textAlign: 'center', padding: '80px 20px' }}>
      <div className="card" style={{ maxWidth: '560px', margin: '0 auto', padding: '50px 30px' }}>
        <HelpCircle size={64} style={{ color: 'var(--color-primary-aqua)', margin: '0 auto 20px' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px', color: 'var(--color-deep-ocean)' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Lost in the Deep Ocean?</h2>
        <p style={{ color: 'var(--color-muted-text)', marginBottom: '28px' }}>
          The page you are looking for doesn't exist or has swum to another part of the reef.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return Home</span>
          </Link>
          <Link to="/shop" className="btn btn-outline">
            <ShoppingBag size={18} />
            <span>Explore Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
