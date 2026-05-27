import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import HelmetComponent from "../../meta-data/HelmetComponent";
import { MetaDataForHelmet } from "../../meta-data/MetaDataForHelmet";
// UPCOMING SHOWS IMPORTS — commented out together with the section below. Restore both to re-enable.
// import NewsCellComponent from "../Press/News/NewsCellComponent";
// import { newsDataShows } from "../Press/News/NewsData";
import SiteStructuredData from "../../meta-data/SiteStructuredData";

const Homepage = () => {
  const meta = MetaDataForHelmet.home;

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
    <div className="w-full flex flex-col mx-auto overflow-hidden">
      <SiteStructuredData />
      <HelmetComponent props={meta} />

      {/* Big screen banner — description moved outside the aspect-ratio container so it is never clipped */}
      <div className="relative w-full hidden md:block aspect-7/4 mt-6 mx-auto">
        {bigScreenBanners.map((image) => (
          <Link
            to={image.link}
            key={image.id}
            onClick={handleScroll}
            className={`${image.id === activeBannerBig.id ? "opacity-100 z-10" : "opacity-0 -z-10"} absolute w-full h-full inset-0 transition-opacity duration-4000`}
          >
            <img
              src={image.src}
              alt={image.id}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
      {/* Description for active big-screen banner — renders below the image, switches with activeBannerBig state */}
      <Link
        to={activeBannerBig.link}
        onClick={handleScroll}
        className="description-link group hidden md:flex flex-col items-end pr-2 py-4"
      >
        <p className="text-[0.9rem]">{activeBannerBig.id}</p>
        <div className="flex translate-x-7">
          <p className="text-[0.9rem]  group-hover:tracking-wider transition-all duration-500">
            View in gallery
          </p>
          <div className="flex translate-y-[2px]">
            <span>
              <IoIosArrowForward className="ml-2 text-[1.1rem]" />
            </span>
            <span>
              <IoIosArrowForward className="ml-2 text-[1.1rem] -translate-x-[22px]" />
            </span>
          </div>
        </div>
      </Link>

      {/* Small screen banner — description moved outside the aspect-ratio container so it is never clipped */}
      <div className="relative w-full aspect-2/3 block md:hidden mt-6">
        {smallScreenBanners.map((image) => (
          <Link
            to={image.link}
            key={image.id}
            onClick={handleScroll}
            className={`${image.id === activeBannerSmall.id ? "opacity-100 z-10" : "opacity-0 -z-10"} absolute w-full h-full inset-0 transition-opacity duration-4000`}
          >
            <img
              src={image.src}
              alt={image.id}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
      {/* Description for active small-screen banner — renders below the image, switches with activeBannerSmall state */}
      <Link
        to={activeBannerSmall.link}
        onClick={handleScroll}
        className="description-link group flex md:hidden flex-col items-end pr-2 py-4"
      >
        <p className="text-[0.9rem]">{activeBannerSmall.id}</p>
        <div className="flex translate-x-7 ">
          <p className="text-[0.9rem] group-hover:tracking-wider transition-all duration-500">
            View in gallery
          </p>
          <div className="flex translate-y-[2px]">
            <span>
              <IoIosArrowForward className="ml-2 text-[1.1rem]" />
            </span>
            <span>
              <IoIosArrowForward className="ml-2 text-[1.1rem] -translate-x-[22px]" />
            </span>
          </div>
        </div>
      </Link>

      {/* UPCOMING SHOWS SECTION — currently hidden.
           To restore: remove the surrounding {/*  *‌/} comment tags below. */}
      {/*
      <div className="w-full mt-24 mb-12">
        <h2 className="h2-standard-2">Upcoming Show</h2>
        <div className="w-[90%] mx-auto">
          {newsDataShows.map((data) => (
            <Link
              to={`news/${data.link}`}
              key={data.title}
              onClick={handleScroll}
            >
              <NewsCellComponent data={data} />
            </Link>
          ))}
        </div>
      </div>
      */}
    </div>
  );
};

export default Homepage;
