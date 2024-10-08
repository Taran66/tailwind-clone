import { CgProfile } from "react-icons/cg";
import { testimonials } from "../constants";
import { useState } from "react";

const Review = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mx-80">
      <div className="flex flex-col items-center">
        <h2 className="mt-40 text-5xl w-8/12 font-black tracking-tight text-center text-white">"Best practices" don't actually work.</h2>
        <p className="mt-10 w-6/12 text-center">I've written <span className="text-sky-400">a few thousand words</span> on why traditional "semantic class names" are the reason CSS is hard to maintain, but the truth is you're never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you'll wonder how you ever worked with CSS any other way.</p>
        <div className="flex gap-4 justify-center items-center w-1/4 mt-4 mb-20">
          <CgProfile size="1x" className="h-20"/>
          <div className="flex flex-col gap-1">
            <h6 className="text-white font-bold text-lg">Adam Wathan</h6>
            <p>Creator of Tailwind CSS</p>
          </div>
        </div>
      </div>
      <div className={`flex justify-center gap-10 ${showAll ? 'h-auto' : 'h-96'} overflow-hidden transition-all duration-300 mt-10`}>
        {[0, 1, 2].map((columnIndex) => (
          <ul key={columnIndex} className="flex flex-col gap-10 items-center">
            {testimonials.map((item, index) => (
              <li key={index} className="text-white w-full">
                <div className="flex flex-col gap-10 bg-slate-800 p-4 rounded-lg">
                  <div className="flex flex-row gap-10 items-center">
                    <CgProfile size={40} />
                    <div className="flex flex-col gap-2">
                      <h6 className="font-bold">{item.name}</h6>
                      <p className="text-sm text-gray-300">{item.enterprise}</p>
                    </div>
                  </div>
                  <div>{item.quote}</div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8  dark:from-slate-900 sticky -mt-52 transition-opacity duration-300 opacity-100 w-full"> 
        <button 
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={toggleShowAll}
        >
          {showAll ? 'Okay, I get the point' : 'Show More'}
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Review;