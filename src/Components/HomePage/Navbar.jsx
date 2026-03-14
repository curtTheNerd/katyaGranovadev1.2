import { useState } from "react";
import { NavLink } from "react-router-dom";

import { YoutubeIcon, InstagramIcon } from "./SocilIcons";

import { IoCloseCircle } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navItems = [
    { title: "EXHIBITIONS", path: "/exhibition" },
    { title: "WORK", path: "/work" },
    {
      title: "ABOUT",
      children: [
        { title: "BIOGRAPHY", path: "/biography" },
        { title: "STATEMENT", path: "/artist-statement" },
      ],
    },
    {
      title: "MORE",
      children: [
        // { title: "NEWS", path: "/news" },
        { title: "PRESS", path: "/press-coverage" },
        { title: "VIDEOS", path: "/videos" },
      ],
    },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white flex flex-col items-center">
      {/* TITLE */}
      <div className="w-full flex items-center justify-center pt-4 pb-2">
        <NavLink
          to="/"
          className="text-[2rem] md:text-[2.2rem] font-semibold nav-item pt-2 pb-2"
        >
          <h1 className="flex tracking-wide ">
            <span className="pr-2">KATYA </span>
            <span>GRANOVA</span>
          </h1>
          <h2 className="hidden">Contemporary artist, painter, and curator.</h2>
        </NavLink>
      </div>

      {/* NAV-ITEMS */}
      <div className="w-[90%] flex items-center justify-center pb-6 px-4">
        <div className="flex items-center space-x-8 nav-item">
          <ul className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="nav-item"
                  >
                    {item.title}
                  </button>

                  <div
                    className={`absolute left-0 top-full min-w-[150px] bg-white shadow-md z-20
                    ${
                      openDropdown === item.title
                        ? "block opacity-100"
                        : "hidden group-hover:block group-hover:opacity-100"
                    }`}
                  >
                    {/* DROPDOWN from NAVITEM */}
                    {item.children.map((child) => (
                      <NavLink
                        key={child.title}
                        to={child.path}
                        onClick={() => {
                          toggleDropdown();
                        }}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.title}>
                  <NavLink to={item.path} className="nav-item">
                    {item.title}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          {/* SOCIAL-ICONS */}
          <div className="hidden md:flex items-center space-x-2 nav-item">
            <InstagramIcon size="text-[1.5rem]" />
            <YoutubeIcon />
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden nav-item right-8 text-[1.8rem]"
        >
          <LuMenu />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-start p-8 overflow-y-auto">
          <div className="flex justify-between items-center w-full mb-8">
            <NavLink to="/" onClick={() => setMobileOpen(false)}>
              <h2 className="text-2xl font-semibold p-0">KATYA GRANOVA</h2>
            </NavLink>

            <button
              onClick={() => {
                setMobileOpen(false);
              }}
              className="nav-item text-4xl"
            >
              <IoCloseCircle />
            </button>
          </div>

          <ul className="flex flex-col items-center mt-6 space-y-6">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.title} className="w-full text-center">
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="w-full nav-item"
                  >
                    {item.title}
                  </button>
                  {openDropdown === item.title && (
                    <div className="flex flex-col mt-2 space-y-2 shadow-md">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.title}
                          to={child.path}
                          onClick={() => {
                            setMobileOpen(false);
                            toggleDropdown();
                          }}
                          className="block nav-item px-8 py-2 hover:bg-gray-100 transition-all duration-200"
                        >
                          {child.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="nav-item"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="flex-center space-x-2 mt-12">
            <InstagramIcon size="text-[1.75rem]" />
            <YoutubeIcon size="text-[2rem]" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
