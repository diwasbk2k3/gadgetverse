import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#142441] text-white text-center py-4 text-sm">
      <p>&copy; {new Date().getFullYear()} Gadgetverse</p>
      <p>Designed and developed by <a href="https://github.com/diwasbk" className="hover:underline" target="_blank" rel="noopener noreferrer">diwasbk</a></p>
    </footer>
  );
}

export default Footer;