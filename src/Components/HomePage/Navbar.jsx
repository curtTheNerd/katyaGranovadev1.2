import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

import { IoCloseCircle } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      id="navbar"
      className="relative flex items-center justify-between pt-4 w-[100vw] h-auto bg-white"
    >
      <div className="w-auto px-8">
        <NavLink to="/">
          <p className="text-3xl pl-8">Katya Granova</p>
        </NavLink>
      </div>

      <div className="px-8">
        <ul className="flex items-center">
          <li className="group">
            WORK
            <ul className="absolute hidden w-full min-w-max top-full left-0 group-hover:flex flex-col items-center bg-white text-white z-10">
              <li>
                <NavLink to="/work2025">2025</NavLink>
              </li>
              <li>
                <NavLink to="/work2024">2024</NavLink>
              </li>
              <li>
                <NavLink to="/work2023">2023</NavLink>
              </li>
              <li>
                <NavLink to="/work2022">2022</NavLink>
              </li>
              <li>
                <NavLink to="/work2021">2021</NavLink>
              </li>
              <li>
                <NavLink to="/work2020">2020</NavLink>
              </li>
              <li>
                <NavLink to="/work2019">2019</NavLink>
              </li>
              <li>
                <NavLink to="/worksonpaper">WORKS ON PAPER</NavLink>
              </li>
            </ul>
          </li>

          <li className="group">
            EXHIBITIONS
            <ul className="absolute hidden w-full min-w-max top-full left-0 group-hover:flex flex-col items-center bg-white text-white z-10">
              <li>
                <NavLink to="/picnics2025">PICNICS 2025</NavLink>
              </li>
              <li>
                <NavLink to="/britain2024">BRITAIN 2024</NavLink>
              </li>
              <li>
                <NavLink to="/babushka2022">BABUSHKA 2022</NavLink>
              </li>
              <li>
                <NavLink to="/hamlet2021">HAMLET 2021</NavLink>
              </li>
            </ul>
          </li>

          <li className="group">
            ABOUT
            <ul className="absolute hidden w-full min-w-max top-full left-0 group-hover:flex flex-col items-center bg-white text-white z-10">
              <li>
                <NavLink to="/bio">BIO</NavLink>
              </li>
              <li>
                <NavLink to="/statement">STATEMENT</NavLink>
              </li>
            </ul>
          </li>

          <li className="group">
            PRESS
            <ul className="absolute hidden w-full min-w-max top-full left-0 group-hover:flex flex-col items-center bg-white text-white z-10">
              <li>
                <NavLink to="/media">MEDIA</NavLink>
              </li>
              <li>
                <NavLink to="/artisttalks">ARTIST TALKS</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/katyagranova/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <FaInstagram className="icon-navbar" />
            </a>
          </li>

          <a
            href="https://www.youtube.com/@katyagranova9832"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <SlSocialYoutube className="icon-navbar" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
