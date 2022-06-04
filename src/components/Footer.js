import React from 'react';

function Footer() {
  return (
    <div className="h-full w-full flex flex-row leading-[3em] font-addidas">
      <div className="m-10">
        <h2 className="text-sm font-bold uppercase">PRODUCTS</h2>
        <div>
          <li className="font- font-addidas font-light text-sm outline-dotted-">
            Shoes
          </li>
          <li className="font- font-addidas font-light text-sm ">Clothing</li>
          <li className="font- font-addidas font-light text-sm">Accessories</li>
          <li className="font- font-addidas font-light text-sm">Gift Cards</li>
          <li className="font- font-addidas font-light text-sm">
            New Arrivals
          </li>
          <li className="font- font-addidas font-light text-sm">
            Best Sellers
          </li>
          <li className="font- font-addidas font-light text-sm">
            Release Dates
          </li>
          <li className="font- font-addidas font-light text-sm">Sale</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
