import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

const Homepage = () => {
  const smallScreenBanners = [
    {
      id: "Drinking party Spinnerei, 2025",
      src: "/assets/Home/2025Drinking party Spinnerei, 180x220cm_70.8x86.6_, oil on canvas.webp",
      link: "exhibition/2025-Spinnerei",
    },
    {
      id: "Picnic in the Meadows, 2025",
      src: "/assets/Home/2025Picnic on the meadow, 100x140cm_39.3x55.1_, oil on canvas.webp",
      link: "exhibition/2025-IntrudedPicnics",
    },
  ];

  const bigScreenBanners = [
    {
      id: "Rooftop picnic, 2024",
      src: "/assets/Home/2024, Rooftop picnic, 200x200cm, oil on canvas.webp",
      link: "exhibition/2024-TurpsBanana",
    },
    {
      id: "Voices from a suitcase, 2023",
      src: "/assets/Home/2023 Voices from a suitcase, Shtager gallery, interior.webp",
      link: "exhibition/2023-ShtagerGallery",
    },
  ];

  const [activeBannerSmall, setActiveBannerSmall] = useState(
    smallScreenBanners[0],
  );
  const [activeBannerBig, setActiveBannerBig] = useState(bigScreenBanners[0]);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBannerSmall((prev) =>
        prev.id === smallScreenBanners[0].id
          ? smallScreenBanners[1]
          : smallScreenBanners[0],
      );

      setActiveBannerBig((prev) =>
        prev.id === bigScreenBanners[0].id
          ? bigScreenBanners[1]
          : bigScreenBanners[0],
      );
    }, 20000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full min-h-screen flex-center flex-col mx-auto overflow-hidden">
      <Helmet key="home">
        <title>Katya Granova - Contemporary Painter</title>
        <meta
          name="description"
          content="Katya Granova is a contemporary artist based in London, known for her paintings and exhibitions worldwide. Explore her portfolio, media, videos, and more."
        />
        <link rel="canonical" href="https://katya-granova.com/" />
      </Helmet>

      <div className="relative w-full hidden md:block aspect-6/4 mt-6 mx-auto">
        {bigScreenBanners.map((image) => (
          <Link
            to={image.link}
            key={image.id}
            onClick={handleScroll}
            className={`${image.id === activeBannerBig.id ? "opacity-100 z-10" : "opacity-0 -z-10"} absolute w-full h-full inset-0 transition-opacity duration-4000 `}
          >
            <div className="banner-pic relative w-full aspect-7/4 overflow-hidden">
              <img
                src={image.src}
                alt={image.id}
                className={`w-full h-full object-cover`}
              />
            </div>

            <div className="description-link flex flex-col items-end pr-2 pt-2">
              <p className="text-[0.9rem]">{image.id}</p>
              <div className="flex translate-x-7">
                <p className="text-[0.9rem] pt-0">View in gallery</p>
                <div className="flex translate-y-[2px]">
                  <span>
                    <IoIosArrowForward className="ml-2 text-[1.1rem]" />
                  </span>
                  <span>
                    <IoIosArrowForward className="ml-2 text-[1.1rem] -translate-x-[22px]" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="relative w-full min-h-screen aspect-5/9 block md:hidden mt-6 overflow-hidden">
        {smallScreenBanners.map((image) => (
          <Link
            to={image.link}
            key={image.id}
            onClick={handleScroll}
            className={`${image.id === activeBannerSmall.id ? "opacity-100 z-10" : "opacity-0 -z-10"} absolute w-full h-full inset-0 transition-opacity duration-4000 `}
          >
            <div className="relative w-full aspect-[2/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.id}
                className={`w-full h-full object-cover`}
              />
            </div>

            <div className="description-link flex flex-col items-end pr-2 pt-2">
              <p className="text-[0.9rem]">{image.id}</p>
              <div className="flex translate-x-7">
                <p className="text-[0.9rem] pt-0">View in gallery</p>
                <div className="flex translate-y-[2px]">
                  <span>
                    <IoIosArrowForward className="ml-2 text-[1.1rem]" />
                  </span>
                  <span>
                    <IoIosArrowForward className="ml-2 text-[1.1rem] -translate-x-[22px]" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/*<Link
        to="news/2026-All-Our-Yesterdays"
        onClick={handleScroll}
        className="w-full h-full md:mt-4 z-20 -translate-y-16"
      >
        <div className="description-link flex flex-col items-end pr-2 mb-4">
          <div className="flex translate-x-7 pt-4">
            <p className="text-[0.9rem]">Next show</p>
            <div className="flex translate-y-[2px]">
              <span>
                <IoIosArrowForward className="ml-2 text-[1.1rem]" />
              </span>
              <span>
                <IoIosArrowForward className="ml-2 text-[1.1rem] -translate-x-[22px]" />
              </span>
            </div>
          </div>
        </div>
      </Link>*/}
    </div>
  );
};

export default Homepage;
