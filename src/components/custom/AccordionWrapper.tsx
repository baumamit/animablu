import React, { useState } from 'react';
import './AccordionWrapper.css';

interface AccordionItemProps {
  imageSrc: string;
  title: string;
  content: string;
}

interface AccordionWrapperProps {
  items: AccordionItemProps[];
}

const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <button 
            className="accordion-image-button"
            style={{
              backgroundImage: `url('${item.imageSrc}')`,
              backgroundSize: 'cover',      /* Ensures the image covers the entire button */
              backgroundPosition: 'center', /* Centers the image within the button */
            }}
          >
            <h3 className="accordion-content">{item.title}</h3>
            <div className="accordion-content">{item.content}</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AccordionWrapper;
/* <img src={item.imageSrc} alt={item.title} /> */