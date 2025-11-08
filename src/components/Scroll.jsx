import React, { useState } from 'react';

function Scroll() {
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    if (!atBottom) {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    setAtBottom(!atBottom); // Toggle state
  };

  return (
    <div
      className="fixed bottom-10 right-5 cursor-pointer animate-bounce sm:inline-block hidden z-50"
      onClick={handleScroll}
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1">
          <div className="w-1 h-3 bg-[#babaff] rounded-full animate-pulse"></div>
        </div>
        <p className="text-[#babaff] mt-2">{atBottom ? 'Scroll Up' : 'Scroll Down'}</p>
      </div>
    </div>
  );
}

export default Scroll;
