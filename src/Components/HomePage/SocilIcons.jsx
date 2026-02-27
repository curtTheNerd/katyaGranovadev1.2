//  regular Icons
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

//  negative Icons
import { FaInstagramSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { IoLogoYoutube } from "react-icons/io";
import { FaSquareYoutube } from "react-icons/fa6";

export const InstagramIcon = ({ size, transY }) => {
  return (
    <a
      href="https://www.instagram.com/katyagranova/"
      target="_blank"
      rel="noreferrer noopener"
      className={`${size ? size : "text-[1.75rem]"} ${transY ? transY : " translate-y-[px]"} flex nav-item`}
    >
      <FaInstagram />
    </a>
  );
};

export const YoutubeIcon = ({ size, transY }) => {
  return (
    <a
      href="https://www.youtube.com/@katyagranova9832"
      target="_blank"
      rel="noreferrer noopener"
      className={`${size ? size : "text-[1.75rem]"} ${transY ? transY : " translate-y-[px]"} flex nav-item`}
    >
      <SlSocialYoutube />
    </a>
  );
};
