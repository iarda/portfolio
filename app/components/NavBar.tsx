"use client";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCpu,
  FiBriefcase,
  FiMail,
  FiX,
  FiMenu
} from "react-icons/fi";
import React, { useState } from "react";

const navItems = [
  { href: "#start", icon: <FiHome />, label: "Start" },
  { href: "#about", icon: <FiUser />, label: "About Me" },
  { href: "#work", icon: <FiFolder />, label: "Projects & Skills" },
  { href: "#tech", icon: <FiCpu />, label: "Tech Stack" },
  { href: "#experience", icon: <FiBriefcase />, label: "Work Experience" },
  { href: "#contact", icon: <FiMail />, label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Nav */}
      <div className="md:hidden">
        <button
          className="fixed top-5 left-5 z-[1001] text-zinc-100 text-xl bg-zinc-400 bg-opacity-40 p-2 rounded-md backdrop-blur-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`fixed inset-0 bg-opacity-60 backdrop-blur-xl z-[1000] transition-transform transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col items-center justify-center gap-8`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-zinc-600 text-xl"
            >
              <span className="text-2xl">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div
        className="
          hidden md:block fixed left-0 top-0 h-screen w-24 z-[900]
          bg-gradient-to-b from-gray-100 via-white/10 to-transparent
          backdrop-blur-sm border-r border-gray-200
          pointer-events-none
        "
      />
      <nav className="hidden md:flex fixed top-1/2 left-6 -translate-y-1/2 z-[1000] flex-col gap-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group relative flex items-center justify-center w-14 h-14 bg-white bg-opacity-10 text-zinc-500 border border-gray-300 rounded-xl hover:bg-transparent transition-all duration-300"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-[#97CBD1] bg-opacity-70 text-white px-3 py-1 rounded-md whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
