import React, { useEffect } from 'react';
import Glightbox from 'glightbox';
import './galleryItem.css';
import Image from 'next/image';

export default function GalleryItem({
  item,
}: {
  item: { id: number; image: string };
}) {
  useEffect(() => {
    new Glightbox({
      selector: '.gallery-lightbox',
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
              height: '360px',        // fixed height
              objectFit: 'cover',     // crop excess, keeps gallery uniform
              borderRadius: '8px',    // optional: rounded corners
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
