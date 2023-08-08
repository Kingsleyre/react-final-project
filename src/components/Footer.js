import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme } = useContext(ThemeContext);

    const footerClass = theme === 'dark' ? 'text-white' : 'text-dark';

    return (
        <div>
            <footer className={`text-center py-3 ${footerClass}`}>
                <p className="mb-0">Copyright © {currentYear} All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Footer;
