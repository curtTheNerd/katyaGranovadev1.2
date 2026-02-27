import { YoutubeIcon } from "./SocilIcons";
import { InstagramIcon } from "./SocilIcons";

import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full flex-center flex-col pt-10 pb-10 border-t-1 border-gray-500 space-y-2">
      <div className="footer-icons flex-center gap-2">
        <InstagramIcon size="text-[1.77rem]" transY="translate-y-[0px]" />
        <YoutubeIcon size="text-[1.9rem]" transY="translate-y-[0px]" />
      </div>
      <p className="flex-center text-[0.9rem] font-ibm">
        <AiOutlineCopyright className="text-[1.1rem] mr-1 -translate-y-[1px]" />
        Katya Granova 2026
      </p>
    </footer>
  );
};

export default Footer;
