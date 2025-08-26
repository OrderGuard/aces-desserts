'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  useEffect(() => {
    const init = async () => {
      const Glightbox = (await import('glightbox')).default;
      Glightbox({ selector: '.glightbox' });
    };
    init();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
  {/* ✅ Background Video */}
      {/*<video autoPlay muted loop playsInline>
        <source src="/assets/videos/kk83-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}

      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              <span>Aces&apos;s Desserts</span>
            </h1>
            <h2>
              <span>To serve up indulgent desserts</span>
            </h2>

            <div className="btns">
              <HeroBtn name="our menu" target="menu" />
              <HeroBtn name="book a table" target="book-a-table" />
            </div>
          </div>

          {/*<div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="/assets/videos/klub-kitchen-83-video.mp4"
              className="glightbox play-btn"
              data-type="video"
              data-source="local"
              data-video='{"source": [{"src": "/assets/videos/klub-kitchen-83-video.mp4", "type": "video/mp4"}], "attributes": {"controls": true, "preload": "auto"}}'
            ></a>
          </div>*/}
        </div>
      </div>
    </section>
  );
}

