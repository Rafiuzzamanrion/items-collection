"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;
  return (
    <div>
      <nav className="bg-white shadow-xl p-5 mx-5">
        <ul className="flex gap-10 justify-center items-center">
          <li
            className={`
        ${
          isActive("/")
            ? "text-black font-bold border-b-2 border-black"
            : "text-gray-500 border-b-2 border-gray-400 hover:border-black hover:border-b-2 hover:text-black"
        }`}
          >
            <Link href={"/"}>Homepage</Link>
          </li>
          <li
            className={`
        ${
          isActive("/createItem")
            ? "text-black font-bold border-b-2 border-black"
            : "text-gray-500 border-b-2 border-gray-400 hover:border-black hover:border-b-2 hover:text-black"
        }`}
          >
            <Link href={"/createItem"}>Create Item</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
