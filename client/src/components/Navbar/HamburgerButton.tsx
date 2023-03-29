import React from "react";
import { Menu2 } from 'tabler-icons-react';

const HamburgerButton = ({ isOpen, onClick }:{
  isOpen: boolean,
  onClick: (val:boolean) => void
}) => {
  return (
    <button
      className={` text-white p-1 md:p-3 rounded-lg md:rounded-2xl hover:text-gray-200 focus:outline-none focus:text-gray-900`}
      onClick={() => onClick(!isOpen)}
    >
     <Menu2 size={28}/>
    </button>
  );
};

export default HamburgerButton;
