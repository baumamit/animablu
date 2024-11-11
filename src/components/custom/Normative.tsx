import React from 'react';
import "./Normative.css";

import IconsList from '../custom/IconsList';
import { MdPrivacyTip as IconPrivacyPolicy } from "react-icons/md";
import { FaCookieBite as IconCookiePolicy } from "react-icons/fa";
import { FaGripLines as IconTitle } from "react-icons/fa";


interface NormativeProps {}

const Normative: React.FC<NormativeProps> = () => {
    
    const iconLinks = [
        { IconComponent: IconPrivacyPolicy, name: 'Privacy Policy', href: '/#' },
        { IconComponent: IconCookiePolicy, name: 'Cookie Policy', href: '/#' },
    ];

  return (
    <div className='normative-box'>
        <div className='normative-title'>
            <IconTitle />
            <div>Normative</div>
        </div>
        <IconsList links={iconLinks} />
    </div>
  );
};

export {};  // Add this line to make it a module
export default Normative;