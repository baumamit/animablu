//import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import ChevronIcon, { Direction } from "./ChevronIcon";
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
      <button onClick={prevImage} className="carousel-button"><ChevronIcon direction={Direction.Left} /></button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button onClick={nextImage} className="carousel-button"><ChevronIcon direction={Direction.Right} /></button>

      {/* Bullet indicators */}
      <div className="carousel-bullets">
        {images.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default ImageCarousel;
