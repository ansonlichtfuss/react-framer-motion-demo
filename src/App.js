import React, { useState } from 'react';
import Switch from './components/Switch';
import { emoji } from './data/emoji';
import { yogurtBrands } from './data/yogurtBrands';

function App() {
  const [emojiVisible, setEmojiVisible] = useState(true);
  const [yogurtBrandsVisible, setYogurtBrandsVisible] = useState(true);

  return (
    <div className="App max-w-3xl mx-auto mt-8 text-white">
      <div className="rounded mb-4 text-center text-white">
        <h1>
          <strong>React Animations with Framer Motion</strong>
        </h1>
      </div>
      <div className="rounded px-8 py-6 text-center bg-gray-800 flex justify-around text-white max-w-md mx-auto mb-4">
        <div className="flex flex-col items-center">
          <small>Emoji</small>
          <Switch
            defaultOn={emojiVisible}
            switchFlipped={status => setEmojiVisible(status)}
          />
        </div>
        <div className="flex flex-col items-center">
          <small>Yogurt Brands</small>
          <Switch
            defaultOn={yogurtBrandsVisible}
            switchFlipped={status => setYogurtBrandsVisible(status)}
          />
        </div>
      </div>
      <div className="section-1 my-3">
        <h2 className="text-2xl mb-2">Emoji</h2>
        {emojiVisible && (
          <div className="flex justify-around">
            {emoji.map(thisEmoji => (
              <div className="shadow rounded bg-white w-32 h-32 flex items-center justify-center text-6xl">
                {thisEmoji}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="section-2 my-6">
        <h2 className="text-2xl">Yogurt Brands</h2>
        {yogurtBrandsVisible &&
          yogurtBrands.map(brand => (
            <div className="shadow rounded bg-white h-auto p-4 my-2 overflow-hidden text-black">
              {brand}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
