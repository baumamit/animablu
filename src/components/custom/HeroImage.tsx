import React, { useRef, useEffect } from 'react';
import './HeroImage.css'; // Optional: Add styles in a CSS file.

const HeroImage = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);

  const featuredImage = "/images/Francesco Canale.jpg";

  return <img ref={imgRef} id="hero-image" src={featuredImage} alt="Hero Image - Francesco Canale pittura con la bocca" className="hero-image" />
};

export default HeroImage;