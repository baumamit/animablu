import React from 'react';
//import "./Contacts.css";

import IconsList from '../custom/IconsList';
import { FaPhoneAlt as IconPhone } from "react-icons/fa";

interface ContactsProps {
}
  
const Contacts: React.FC<ContactsProps> = () => {

  const contactMobile = "+39000000000";
  const contactEmail = "info@animablu.eu";
  const contactSubject = "Richiesta%20di%20contatto%20dal%20sito%20Anima%20Blu";
  const contactMessage = "Buongiorno,%0A%0AVorrei%20essere%20ricontattato.";

  const iconLinks = [
    { IconComponent: IconPhone, name: 'Tel. 011 000 000', href: `tel:${contactMobile}` },
    { IconComponent: IconPhone, name: `Email: ${contactEmail}`, href: `mailto:${contactEmail}?subject=${contactSubject}&body=${contactMessage}` },
    { IconComponent: IconPhone, name: 'WhatsApp: +39 000 000 000', href: `https://wa.me/${contactMobile}/?text=${contactMessage}` },
  ];
  console.log(`mailto:${contactEmail}?subject=${contactSubject}&body=${contactMessage}`);
  console.log(`https://wa.me/${contactMobile}/?text=${contactMessage}`);
  
  
  // 'mailto:info@animablu.eu?subject='+{contactSubject}+'&body='+{contactMessage}
  // 'https://wa.me/'+{contactMobile}+'/?text=MESSAGE'+{contactMessage}

  return (
    <section id="contatti" className="container">
      <h2>Contatti</h2>
      <hr />
      <IconsList links={iconLinks} />
    </section>
  );
};

export {};  // Add this line to make it a module
export default Contacts;