import React from 'react';
//import "./Contacts.css";

import IconsList from '../custom/IconsList';
import { FaPhoneAlt as IconPhone } from "react-icons/fa";

interface ContactsProps {
    
  }
  
  const Contacts: React.FC<ContactsProps> = () => {
  
    const iconLinks = [
        { IconComponent: IconPhone, name: 'Tel. 011 026 88 15', href: 'tel:0110268815' },
    ];

    return (
      <section id="contacts" className="">
        <div className="container">
          <a href="#contatti"></a>
          <h2>Contatti</h2>
          <hr />
          <IconsList links={iconLinks} />
        </div>
      </section>
    );
  };
  
  export {};  // Add this line to make it a module
  export default Contacts;