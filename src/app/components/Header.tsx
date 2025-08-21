'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';
// Link and Image for Logo
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
    <header
      id="header"
      className={`fixed-top d-flex align-items-cente ${
        scroll > 100 ? 'header-scrolled' : undefined
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        {/*<h1 className="logo me-auto me-lg-0">
          <a href="/">Restaurant</a>
        </h1>*/}
        {/* Uncomment below if you prefer to use an image logo  */}
         <Link href="/" className="logo me-auto me-lg-0">
            <Image
              src="/assets/images/klub-kitchen-83-logo.PNG"
              alt="Upland Logo"
              width={150}
              height={150} // Set an appropriate height to avoid layout shift
              priority // Preload this image for faster LCP
            />
          </Link>

        {/*<a href="index.html" className="logo me-auto me-lg-0">
          <img src="assets/images/klub-kitchen-83-logo.png" alt="" className="img-fluid" />
        </a>*/}
        <Nav />
        <AppBtn name="Book a table" />
      </div>
    </header>
  );
}
