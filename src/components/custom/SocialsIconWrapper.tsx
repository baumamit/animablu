import React from 'react';
import './SocialsIconWrapper.css';

import { FaLink } from "react-icons/fa";

interface SocialLink {
  href: string;
  icon?: React.ElementType;
  iconClass: string;
  customImageSrc?: string;
}

interface SocialsIconWrapperProps {
  socialLinks: SocialLink[];
}

const SocialsIconWrapper: React.FC<SocialsIconWrapperProps> = ({ socialLinks }) => (
  <div className="socials-icon-wrapper">
    {socialLinks.map((link, index) => (
      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`social-icon ${link.iconClass}`}>
        {}
        {link.icon ? (                      /* if an icon prop exist in this element.. */
            React.createElement(link.icon)
        ) : link.customImageSrc ? (         /* else, if a customImageSrc prop exist in this element.. */
            <img src={link.customImageSrc} alt={link.iconClass} />
        ) : (                               /* default link icon component */
            <FaLink />
        )}
      </a>
    ))}
  </div>
);

export default SocialsIconWrapper;

// Usage example for `SocialsIconWrapper` component with custom links

/*
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok, FaBlogger } from 'react-icons/fa';
import { MdOutlineAccessibilityNew as IconAbilityArt } from "react-icons/md"; // Placeholder icon for Ability Art
import { GiBookmark as IconScatoleParlanti } from "react-icons/gi"; // Placeholder for Scatole Parlanti

<SocialsIconWrapper
  socialLinks={[
    { href: 'https://www.abilityart.it/artisti/francesco-canale', icon: IconAbilityArt },
    { href: 'https://www.scatoleparlanti.it/prodotto/le-corde-dellanima/', icon: IconScatoleParlanti },
    { href: 'https://www.instagram.com/francescocanaleanimablu/', icon: FaInstagram },
    { href: 'https://www.youtube.com/c/francescocanaleanimablu', icon: FaYoutube },
    { href: 'https://linkedin.com/in/francesco-canale-356918224', icon: FaLinkedinIn },
    { href: 'https://www.facebook.com/FrancescoCanale.AnimaBlu', icon: FaFacebookF },
    { href: 'https://www.tiktok.com/@francescocanaleanimablu', icon: FaTiktok },
    { href: 'https://x.com/animablucanale', icon: FaTwitter },
    { href: 'https://animabluartista.blogspot.com/', icon: FaBlogger },
  ]}
/>
*/
