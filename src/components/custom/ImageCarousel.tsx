//import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import Chevron from "./Chevron";
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
      <button onClick={prevImage} className="carousel-button"><Chevron direction={false} /></button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button onClick={nextImage} className="carousel-button"><Chevron direction={true} /></button>
    </div>
  );
};

export default ImageCarousel;
