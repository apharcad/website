import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 text-center">
            <p>© {new Date().getFullYear()} Apharcad. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
