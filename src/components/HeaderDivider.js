import React, { useState } from 'react';

function HeaderDivider() {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(null);

  const FeatureLinks = [
    { id: 1, title: 'New Arrivals' },
    { id: 2, title: `What's Trending` },
  ];

  const handleClick = (i) => {
    if (index === i) {
      return setIndex(null);
    }
    setIndex(i);
    setIsActive(true);
  };

  return (
    <>
      <div className="h-[0.5px] w-full bg-black opacity-25 mt-28"></div>
      <ul className="flex flex-row my-5 pl-5">
        {FeatureLinks.map(({ id, title }, i) => (
          <li
            key={id}
            onClick={() => handleClick(i)}
            className={
              index === i
                ? 'relative px-3 text-lg uppercase font-addidas font-extrabold '
                : 'relative px-3 text-lg uppercase font-addidas'
            }
          >
            {title}
            {index === i && (
              <div className="absolute h-[2.5px] w-20 bg-black bottom-[-20px] left-2 mx-2 transition-all duration-500 ease-in-out"></div>
            )}
          </li>
        ))}
      </ul>
      <div className="h-[0.5px] w-full bg-black opacity-25 mb-28"></div>
    </>
  );
}

export default HeaderDivider;
