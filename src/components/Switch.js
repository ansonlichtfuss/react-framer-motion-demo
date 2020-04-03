import React from 'react';

function Switch({ switchedOn = false, switchClicked = () => {} }) {
  const toggleClass = switchedOn ? 'ml-auto mr-1' : 'mr-auto ml-1';

  return (
    <div
      className="rounded-full hover:bg-green-500 transition ease-in-out duration-200 bg-green-400 bg-gray-200 w-16 h-8 shadow-inner flex items-center mt-2 cursor-pointer"
      onClick={() => switchClicked(!switchedOn)}
    >
      <div
        className={`rounded-full bg-white w-6 h-6 shadow ${toggleClass}`}
      ></div>
    </div>
  );
}

export default Switch;
