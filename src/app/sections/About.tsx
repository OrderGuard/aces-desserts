import React from 'react';
import Image from 'next/image';
import aboutImage from '../../../public/assets/images/kk83-about.png';
import './about.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              {/*<Image src={aboutImage} alt="" />*/}
              <video autoPlay muted loop playsInline>
                <source src="/assets/videos/aces-desserts-video-1-web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h2>
              About Us
            </h2>
            {/*<p className="italic leading-relaxed tracking-wide my-6 px-4 text-lg text-gray-700">*/}
            <p className="hero-text">
              At Aces Desserts Swansea, we believe every sweet tooth deserves the royal treatment.
              <br />
              <br />
              Our mission is simple – to serve up indulgent desserts that turn any day into a special occasion.
              From loaded waffles and stacked pancakes to creamy milkshakes, freshly baked cookie dough,
              and irresistible sundaes, we put flavour and fun at the heart of everything we do.

              <br />
              <br />
              Located right here in Swansea, we’ve created a spot where families, friends,
              and dessert lovers can come together to enjoy treats that are as exciting as they are delicious.
              Whether you’re dining in, grabbing a takeaway, or ordering straight to your door,
              we’re here to deliver desserts worth dealing out.

              <br />
              <br />
              Because at Aces, every dessert is a winning hand.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
