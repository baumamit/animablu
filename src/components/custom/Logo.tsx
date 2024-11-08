import React, { useRef, useEffect } from 'react';

const Logo = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);

  const logo = '/logo.png';
  const logoSmall = '/logo-w300px.png';

  return (
    <div className="header-logo">
        <a href="./">
            <img ref={imgRef} width="481" height="181" src={logo} className="logo attachment-full size-full wp-image-64" alt="Logo" srcSet={logo+" 481w, "+logoSmall+" 300w"} sizes="(max-width: 481px) 100vw, 481px" />
        </a>
    </div>
  )
};

export default Logo;
