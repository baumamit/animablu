import React, { useEffect, useState } from 'react';
import "./TextRotator.css";  // Optional: Add styles in a CSS file.

interface TextRotatorProps {
  effect: string,
  texts: string[]
}

const TextRotator: React.FC<TextRotatorProps> = ({effect, texts}) => {
  
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Matches animation duration
    return () => clearInterval(interval);
  }, []);
  
  return <p className={effect+" site-subtitle"}>{texts[index]}</p>;
};
  

export default TextRotator;
