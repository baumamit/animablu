import React, { useState } from 'react';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-button">‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button onClick={nextImage} className="carousel-button">›</button>
    </div>
  );
};

export default ImageCarousel;
