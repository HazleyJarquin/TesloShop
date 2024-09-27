"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {isSideMenuOpen && (
        <>
          {/* background black */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
          {/* Blur */}
          <div
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={closeSideMenu}
          />
        </>
      )}

      {/* Sidemenu */}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />
        {/* Input */}

        <div className="relative mt mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={25} />
          <span className="ml-3">Perfil</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={25} />
          <span className="ml-3">Ingresar</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={25} />
          <span className="ml-3">Salir</span>
        </Link>

        {/* Line separator */}

        <div className="w-full h-px bg-gray-200 my-10" />

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={25} />
          <span className="ml-3">Productos</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={25} />
          <span className="ml-3">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
