import React, { useState } from 'react';
import './AccordionWrapper.css';

interface AccordionItemProps {
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
        <div key={index} className="accordion-item">
          <button onClick={() => toggleAccordion(index)} className="accordion-title">
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionWrapper;
