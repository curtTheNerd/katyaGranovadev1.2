import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { IoCloseCircle } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navItems = [
    { title: "WORK", path: "/work" },
    { title: "EXHIBITIONS", path: "/exhibition" },
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
        { title: "NEWS", path: "/news" },
        { title: "PRESS", path: "/press-coverage" },
        { title: "VIDEO", path: "/videos" },
      ],
    },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="w-full xl:h-screen bg-white flex flex-col items-center xl:pt-8 xl:pl-2">
      {/* TITLE */}
      <div className="w-full xl:h-1/5 flex items-center justify-center xl:justify-start xl:px-6 pt-4 pb-2">
        <NavLink
          to="/"
          className="text-[2rem] md:text-[2.2rem] xl:text-[2rem] font-semibold nav-item pt-2 pb-2"
        >
          <h1 className="flex xl:flex-col tracking-wide ">
            <span className="pr-2">KATYA </span>
            <span>GRANOVA</span>
          </h1>
          <h2 className="hidden">Contemporary artist, painter, and curator.</h2>
        </NavLink>
      </div>

      {/* NAV-ITEMS */}
      <div className="w-full xl:h-4/5 flex items-center justify-center xl:pt-4 pb-4 px-4">
        <div className="xl:w-full xl:h-full flex xl:flex-col items-center xl:items-start xl:justify-between space-x-8 nav-item">
          <ul className="hidden md:flex xl:flex-col items-center xl:items-start space-x-4 xl:pt-8">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.title} className="relative group">
                  <button className="nav-item">{item.title}</button>
                  <div className="absolute left-0 top-full hidden group-hover:block min-w-[150px] bg-white shadow-md transition-all duration-200 ease-out opacity-0 group-hover:opacity-100 z-20">
                    {/* DROPDOWN from NAVITEM */}
                    {item.children.map((child) => (
                      <NavLink
                        key={child.title}
                        to={child.path}
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
          <div className="hidden md:flex xl:w-full items-center xl:items-end xl:justify-center xl:pb-4 space-x-3 nav-item">
            <a
              href="https://www.instagram.com/katyagranova/"
              target="_blank"
              rel="noreferrer"
              className="flex nav-item text-[1.5rem] xl:text-[1.75rem] xl:pb-0.25"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@katyagranova9832"
              target="_blank"
              rel="noreferrer"
              className="flex nav-item text-[1.6rem] xl:text-[1.9rem]"
            >
              <SlSocialYoutube />
            </a>
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
            <h2 className="text-2xl font-semibold p-0">KATYA GRANOVA</h2>
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

          <div className="flex-center space-x-4 mt-12">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="nav-item text-[2rem]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="nav-item text-[2.1rem]"
            >
              <SlSocialYoutube />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
