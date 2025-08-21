'use client';

import React, { useEffect } from 'react';
import './galleryItem.css';
import Image from 'next/image';

export default function GalleryItem({
  item,
}: {
  item: { id: number; image: string };
}) {
  useEffect(() => {
    // Import Glightbox only in the browser
    import('glightbox').then(({ default: Glightbox }) => {
      Glightbox({
        selector: '.gallery-lightbox',
      });
    });
  }, []);

  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a
          href={item.image}
          className="gallery-lightbox"
          data-gall="gallery-item"
        >
          <Image
            width={500}
            height={300}
            style={{
              width: '100%',
              height: '360px',       // fixed height for uniform grid
              objectFit: 'cover',    // crops without stretching
              borderRadius: '8px',   // optional rounded corners
            }}
            src={item.image}
            alt=""
            className="img-fluid"
          />
        </a>
      </div>
    </div>
  );
}

