import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="relative flex-center flex-col pt-8 pb-16 gap-4">
      <div className="flex-center fle-col gap-4">
        <div className="text-[10rem]">
          <a
            className=""
            href="https://www.instagram.com/katyagranova/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <FaInstagram className="instagram icon" />
          </a>
        </div>
        <a
          className=""
          href="https://www.youtube.com/@katyagranova9832"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <SlSocialYoutube className="youtube icon" />
        </a>
      </div>

      <p className="copyRight flex">Images copyright Katya Granova</p>
    </div>
  );
};

export default Footer;
