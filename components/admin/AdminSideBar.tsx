"use client"
import { useState } from "react";
import AdminRoute from "./AdminRoute";

const adminNavigation = [
  { url: "/admin", text: "Dashboard", blank: false },
  { url: "/admin/new", text: "Nuevo Miembro", blank: false },
];

export default function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen w-full bg-gray-600">
      <button
        className="absolute top-5 left-5 text-white focus:outline-none z-10 md:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      <div
        className={`absolute inset-y-0 left-0 bg-gray-800 p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col md:space-y-3`}
      >
        <p className="uppercase font-bold text-sm text-white text-center mb-6">
          Navegación
        </p>
        <nav className="flex flex-col space-y-3">
          {adminNavigation.map((link) => (
            <AdminRoute key={link.url} link={link} />
          ))}
        </nav>
      </div>
    </div>
  );
}
