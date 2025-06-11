import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bXd4-atiCYc-U-eRDK8wrHfaRjEvegi9iw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyHQZfWH3J4yYMH_KOBru85ZpyoyIiOvOqw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdVxoETd676QRzzTNzf8Uc6AfnkAyu4RnZw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G2b1zE81ik_6z6VXOZJJIX1ebPheksqzmw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BrI3VwTuipfuvPbQYvqHUTd3wIo8ZJcfSw&s',
    ,
  ];

  return (
    <section className="gallery">
      <h2>Glow and Glam Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
