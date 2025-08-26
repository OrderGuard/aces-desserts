'use client';

import React, { useState, useEffect } from 'react';
import './topBar.css';

export default function TopBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scroll > 100 ? 'topbar-scrolled' : undefined
      }`}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>01792464318</span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <i className="bi bi-clock d-flex align-items-center ms-4">
          </i>
            <span className="d-block ms-4">Monday-Thursday: 5:30 PM - 11:30 PM</span>
          <span className="d-block ms-4">Friday-Sunday: 5:30 PM - 12:00 AM</span>
        </div>
      </div>
    </div>
  );
}
