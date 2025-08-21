'use client';

// import AOS
import AOS from 'aos';

import React, { useEffect } from 'react';
import Glightbox from 'glightbox';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  useEffect(() => {
    new Glightbox({
      selector: '.glightbox',
    });
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
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              <span> Swansea &apos;s</span>
            </h1>
            <h2> <span> Best Street Food Restaurant </span></h2>

            <div className="btns">
              <HeroBtn name="our menu" target="menu" />
              <HeroBtn name="book a table" target="book-a-table" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
           <a
              href="/assets/videos/klub-kitchen-83-video.mp4"
              className="glightbox play-btn"
              data-type="video"
              data-source="local"
            ></a>

          </div>
        </div>
      </div>
    </section>
  );
}
