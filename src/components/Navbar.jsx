import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "For Students", path: "/students" },
    { id: 3, text: "For Institutes", path: "/institutes" },
    { id: 4, text: "Resources", path: "/resources" },
    { id: 5, text: "Contact Us", path: "/contact" },
    { id: 6, text: "Get Started", path: "/login" },

  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white cstmr:shadow-xl z-50 font-semibold">
      <div className="max-w-screen-2xl container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to={"/"}>
            <img src={Logo} alt="Logo" className="h-8 md:h-10 mr-2" />

            </Link>
          </div>

          <div className="block md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-black hover:text-black"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className=" min-h-[95vh] flex justify-center items-center md:hidden">
            <ul className=" pb-20">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="block text-4xl  py-6 text-center "
                    onClick={toggleNav}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
