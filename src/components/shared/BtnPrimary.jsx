import React from "react";

const BtnPrimary = ({ children }) => {
  return (
    <button className="px-6 py-2 mt-6 text-red text-md font-semibold bg-white hover:bg-[#ee3a43] border-2 border-red rounded-md focus:outline-none hover:text-white transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
      {children}
    </button>
  );
};

export default BtnPrimary;
