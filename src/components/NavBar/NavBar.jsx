import React from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import "./cssNavBar.css";

const Navbar = () => {
  return (
    <div className="w-screen h-[20vmin] hover:h-[30vmin] group select-none">
      <div className="bg-amber-400 h-full w-full navbar-background" />
      <div>
        <HiOutlineLightningBolt
          color="rgb(253 230 138"
          className="absolute top-[3vmin] left-[5vmin] h-[10vmin] w-[10vmin] group-hover:h-[30vmin] group-hover:w-[30vmin] group-hover:top-[-7vmin] group-hover:left-[-7vmin]"
        />
        <div className="logo-title absolute top-[5.5vmin] left-[15vmin] text-[4vmin] text-white group-hover:text-[10vmin] group-hover:left-[7vmin]">Logo</div>
      </div>
    </div>
  );
};

export default Navbar;
