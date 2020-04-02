import React, { useState } from 'react';

function Switch({ defaultOn = false, switchFlipped = () => {} }) {
  const [switchedOn, setSwitchedOn] = useState(defaultOn);

  const switchClicked = () => {
    setSwitchedOn(current => {
      switchFlipped(!current);
      return !current;
    });
  };

  const toggleClass = switchedOn ? 'ml-auto mr-1' : 'mr-auto ml-1';

  return (
    <div
      className="rounded-full bg-green-400 bg-gray-200 w-16 h-8 shadow-inner flex items-center mt-2 cursor-pointer"
      onClick={switchClicked}
    >
      <div
        className={`rounded-full bg-white w-6 h-6 shadow ${toggleClass}`}
      ></div>
    </div>
  );
}

export default Switch;
