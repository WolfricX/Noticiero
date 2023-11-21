import React, { useState } from "react";
import { RiHome3Line, RiFileCopyLine, RiWalletLine, RiProfileLine, RiPieChartLine, RiUserLine } from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-red-900 fixed lg:static  lg:w-1/6 transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-5 h-[30vh]">
          <img
            src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1700005767~exp=1700006367~hmac=948e70e144447b835b1cb895f149a73c8e2b6ae6a04d1ed4ffe1a374613d5e4d"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Daniel Tuz</h1>
        </div>
        {/* Nav */}
        <div className="bg-red-700 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Inicio
            </a>
            <a
              href="/"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiUserLine /> Usuarios
            </a>
            <a
              href="/Noticias"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiProfileLine /> Noticias
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiPieChartLine /> Pendiente
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
