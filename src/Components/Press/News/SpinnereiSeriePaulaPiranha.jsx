import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import banner from "/assets/News/NewsThumbnails/SpinnereiSeriePaulaPiranha.webp";

const SpinnereiSerie = () => {
  const [readMoreActive, setReadMoreActive] = useState("Read more");

  const handleToggleReadMore = () => {
    return readMoreActive === "Read more"
      ? setReadMoreActive("")
      : setReadMoreActive("Read more");
  };

  const galleryImages = [
    {
      src: "/assets/Exhibition/2025Spinnerei/2 Spinnerei Celebration from 70s, 310x200cm_122x78.7_, oil on canvas, 2025, in situ.webp",
      id: "Spinnerei Celebration from 70s",
      method: "Oil on canvas",
      sizeCm: "310 x 200 cm",
      date: "2025",
    },
    {
      src: "/assets/Exhibition/2025Spinnerei/9 Spinnerei female workers from the 30s, 80x80 cm_31.4x31.4_, oil on canvas, 2025, in situ.webp",
      id: "Spinnerei female workers from the 30s",
      method: "Oil on canvas",
      sizeCm: "80 x 80 cm",
      date: "2025",
    },
    {
      src: "/assets/Exhibition/2025Spinnerei/10 Drinking party Spinnerei sketches, 40x28cm_15.7x11_ each, oil on paper, 2025.webp",
      id: "Sketches - Spinnerei drinking party",
      method: "Oil on paper",
      sizeCm: "28 x 40 cm",
      date: "2025",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col w-[95%] md:w-[90%] max-w-[1440px] mx-auto">
      <h2 className="h2-standard flex flex-col">
        <span>Spinnerei Serie</span>
        <span className="">Leipzig</span>
      </h2>

      <div className="banner-text-section lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-4">
        <div className="pb-4">
          <img
            src={banner}
            alt="Spinnerei Serie: A solo Exhibition of Katya Granova, Leipzig, 2026"
          />
        </div>

        <div className="paragraph-section 2xl:w-[90%] sm:pt-4 lg:p-2 2xl:pl-8 flex items-center flex-col w-full space-y-4">
          <p style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="font-semibold">Spinnerei Serie</span> presents
            paintings and works on canvas by Katya Granova, created during a
            three-month residency at Baumwollspinnerei Leipzig in 2025.
            Granova's practice excavates the layered histories embedded in place
            and time. During her residency, she engaged with the industrial
            architecture and archival traces of the former cotton mill,
            responding through bold gestural mark-making and saturated colour.
          </p>
          <div
            className={`${readMoreActive === "Read more" ? "hidden" : "block"} space-y-4`}
          >
            <p style={{ fontFamily: "Inter, sans-serif" }}>
              Her work functions as a form of visual archaeology — inserting her
              bodily presence into forgotten moments, disrupting established
              narratives, and exposing the fragility of collective memory. The
              Spinnerei Serie extends Granova's ongoing investigation into
              temporal accumulation, historical preservation, and resistance
              against erasure. Through intrusive painterly interventions, she
              transforms architectural remnants and ephemeral traces into
              urgent, animated surfaces that compel us to confront what persists
              and what disappears.
            </p>
          </div>
          <div
            className="toggle-read-more w-full text-[1.1rem] flex justify-between pl-1 pt-4 cursor-pointer"
            onClick={handleToggleReadMore}
          >
            <div className="text-[1rem]" onClick={handleToggleReadMore}>
              {readMoreActive}
            </div>
            <button
              className="text-[1.25rem] ml-4 cursor-pointer"
              onClick={handleToggleReadMore}
            >
              {readMoreActive === "Read more" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowUp />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="reference-section w-full pb-4 pt-12 lg:pl-1 space-y-1">
        <p className=" text-[1.15rem]">Curated by Katya Granova</p>
      </div>

      <div className="location-time-section w-full space-y-1 border-b-1 border-gray-500 mb-4">
        <p className="w-full">
          <span className="font-semibold">VENUE: </span>Paula Piranha, Industrie
          Str. 18, 04229, Leipzig, GER
        </p>
        <p className="w-full pt-2">
          <span className="font-semibold">VERNISSAGE: </span>April 3, 2026, 7 PM
        </p>
        <p className="w-full">
          <span className="font-semibold">OPENING TIME: </span>
          <br />
          April 3, 2026, 7 PM - 10 PM
          <br /> April 4 - April 5, 2026, 2 PM - 8 PM
        </p>

        <br />
      </div>

      <div className="w-full grid gap-4 mb-4 xl:mb-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((imageData) => (
          <div
            id={imageData.id}
            key={imageData.id}
            className="flex flex-col justify-between w-full h-full lg:min-h-[30vw]"
          >
            <div className="flex">
              <img
                className="flex w-full h-full"
                src={imageData.src}
                alt={imageData.id}
              />
            </div>

            <div className="flex flex-col pt-2 my-5 border-t-1 border-gray-400">
              <p className="text-[1rem]">
                <span className="italic text-[1rem]">{imageData.id}</span>,{" "}
                {imageData.date}
              </p>
              <p className="text-[1rem]">{imageData.method}</p>
              <p className="text-[1rem]">{imageData.sizeCm}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpinnereiSerie;
