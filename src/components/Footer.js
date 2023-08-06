import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <footer className=" text-dark text-center py-3">
            <p className="mb-0">Copyright © {currentYear} All Rights Reserved</p>
        </footer>
        </div>
    );
}

export default Footer;
