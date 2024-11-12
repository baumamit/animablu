import React from 'react';
import "./Contacts.css";

import SocialsIconWrapper from "../custom/SocialsIconWrapper";
import ContactForm from "../custom/ContactForm";

import IconsList from '../custom/IconsList';
import { FaPhoneAlt as IconPhone } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok, FaBlogger } from 'react-icons/fa';
//import { MdOutlineAccessibilityNew as IconAbilityArt } from "react-icons/md"; // Placeholder icon for Ability Art
import { GiBookmark as IconScatoleParlanti } from "react-icons/gi"; // Placeholder for Scatole Parlanti


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
  
  return (
    <section id="contatti" className="contacts container">
      <h2>Contatti</h2>
      <hr />
      <div className='contacts-content'>
        <div className='contacts-box'>
          <IconsList links={iconLinks} />
          <SocialsIconWrapper
            socialLinks={[
              { href: 'https://www.abilityart.it/artisti/francesco-canale', customImageSrc: '/images/ability_art cropped.jpg', iconClass: 'ability-art' },
              { href: 'https://www.scatoleparlanti.it/prodotto/le-corde-dellanima/', icon: IconScatoleParlanti, iconClass: 'scatole-parlanti' },
              { href: 'https://www.instagram.com/francescocanaleanimablu/', icon: FaInstagram, iconClass: 'instagram' },
              { href: 'https://www.youtube.com/c/francescocanaleanimablu', icon: FaYoutube, iconClass: 'youtube' },
              { href: 'https://linkedin.com/in/francesco-canale-356918224', icon: FaLinkedinIn, iconClass: 'linkedin' },
              { href: 'https://www.facebook.com/FrancescoCanale.AnimaBlu', icon: FaFacebookF, iconClass: 'facebook' },
              { href: 'https://www.tiktok.com/@francescocanaleanimablu', icon: FaTiktok, iconClass: 'tiktok' },
              { href: 'https://x.com/animablucanale', icon: FaTwitter, iconClass: 'twitter' },
              { href: 'https://animabluartista.blogspot.com/', icon: FaBlogger, iconClass: 'blogger' },
            ]}
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export {};  // Add this line to make it a module
export default Contacts;