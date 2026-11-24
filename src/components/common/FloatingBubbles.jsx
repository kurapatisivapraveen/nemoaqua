import React from 'react';
import './FloatingBubbles.css';

export default function FloatingBubbles({ count = 12 }) {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 16) + 8, // 8px to 24px
    left: Math.floor(Math.random() * 95) + 2, // 2% to 97%
    duration: Math.floor(Math.random() * 6) + 7, // 7s to 13s
    delay: Math.floor(Math.random() * 5), // 0s to 5s
    opacity: (Math.random() * 0.4 + 0.2).toFixed(2),
  }));

  return (
    <div className="floating-bubbles-container" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}
