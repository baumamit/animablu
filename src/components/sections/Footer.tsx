import React from 'react';
import './Footer.css'; // Optional: Add styles in a CSS file.

import Logo from '../custom/Logo';
import Normative from '../custom/Normative';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    
    return (
        <footer className="container">
            <div className='footer-contents'>
                <Logo />
                <Normative />
            </div>
            <hr />
            <div className='rights-statement text-center p-6 text-sm'>© 2024 Anima Blu - Tutti i diritti Riservati</div>
        </footer>
    );
};

export {};  // Add this line to make it a module
export default Footer;