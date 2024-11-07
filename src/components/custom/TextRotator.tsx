import React, { useEffect, useState } from 'react';

const TextRotator: React.FC = () => {
    const texts: string[] = ["Artista", "Pittore", "Scrittore", "Influencer"];
    const [index, setIndex] = useState<number>(0);
  
    useEffect(() => {
      const tick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(tick, 2000); // Match animation duration
      };
      const timer = setTimeout(tick, 2000);
      return () => clearTimeout(timer);
    }, []);
  
    return <p className="text-transition site-subtitle">{texts[index]}</p>;
  };
  

export default TextRotator;
