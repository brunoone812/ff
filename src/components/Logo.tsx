import React from 'react';
const Logo = () => {
  return <div className="flex items-center space-x-2 text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="w-10 h-10 animate-float">
        <circle cx="12" cy="20" r="8" fill="currentColor" />
        <circle cx="28" cy="20" r="8" fill="currentColor" />
        <circle cx="12" cy="20" r="2" fill="black" />
        <circle cx="28" cy="20" r="2" fill="black" />
      </svg>
      <span className="font-bold text-xl">BOOB$ CLUB</span>
    </div>;
};
export default Logo;