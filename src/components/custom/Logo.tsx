import React, { useRef, useEffect } from 'react';
import "./Logo.css" // Optional: Add styles in a CSS file.


const Logo = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);

  const logo = '/logo.png';

  return (
    <div className='logo-box'>
      <div className="header-logo">
          <a href="./">
              <img ref={imgRef} src={logo} className="logo" alt="Logo - Anima Blu" />
          </a>
      </div>
    </div>
  )
};

export default Logo;
