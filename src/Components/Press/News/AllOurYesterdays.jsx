import { useState } from "react";
import ReservationForm from "./ReservationForm";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import banner from "/assets/News/NewsThumbnails/AllOurYesterdays_1350.webp";

const AllOurYesterdays = () => {
  const [showReservationForm, setShowReservationForm] = useState("");
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [readMoreActive, setReadMoreActive] = useState("Read more");

  const handleToggleReadMore = () => {
    return readMoreActive === "Read more"
      ? setReadMoreActive("")
      : setReadMoreActive("Read more");
  };

  const galleryImages = [
    {
      src: "/assets/News/2026/AllOurYesterdays/kneeling grandma.webp",
      id: "Reclining grandma",
      method: "Oil on canvas",
      sizeCm: "155 x 185 cm",
      date: "2025",
    },
    {
      src: "/assets/News/2026/AllOurYesterdays/IMG_5428.webp",
      id: "Surgery in Portugal",
      method: "Oil on canvas",
      sizeCm: "175 x 180 cm",
      date: "2026",
    },
    {
      src: "/assets/News/2026/AllOurYesterdays/accidental shot.webp",
      id: "Accidental Shot",
      method: "Oil on canvas",
      sizeCm: "160 x 210 cm",
      date: "2024",
    },
    /* 
    {
      src: "/assets/News/2026/AllOurYesterdays/tea picnic in fields 180x200 copy.webp",
      id: "Picnic in the fields",
      method: "Oil on canvas",
      sizeCm: "200 x 220 cm",
      date: "2024",
    },

    excluded due to client wishes

    */
  ];

  /*
   
   const interiorPic = {
    src: "/assets/News/2026/AllOurYesterdays/The_Handbag_Factory_gallary_Katya-Granova1.webp",
    id: "Handbag gallery - interior",
  }; 
  
  excluded due to client wishes

  */

  return (
    <div className="flex items-center justify-center flex-col w-[95%] md:w-[90%] max-w-[1440px] mx-auto">
      <h2 className="h2-standard flex flex-col">
        <span>All Our Yesterdays</span>
        <span className="">London</span>
      </h2>

      <div className="banner-text-section lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-4">
        <div className="pb-4">
          <img
            src={banner}
            alt="All Our Yesterdays: A new solo exhibition by Katya Granova at The Handbag Factory, ASC"
          />
        </div>

        <div className="paragraph-section 2xl:w-[90%] sm:pt-4 lg:p-2 2xl:pl-8 flex items-center flex-col w-full space-y-4">
          <p style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="font-semibold">All Our Yesterdays</span> presents a
            selection of new paintings and works on paper by Katya Granova,
            accompanied by a live performance by the artist in the exhibition
            space. Granova's paintings begin with old photographs from anonymous
            family albums, state archives, and flea markets across different
            countries. Using energetic brushwork and vibrant colour, Granova
            responds to moments from the unknown and the unreachable past,
            disrupting and reanimating someone’s yesterdays, uncovering the
            fragility of our own histories.
          </p>
          <div
            className={`${readMoreActive === "Read more" ? "hidden" : "block"} space-y-4`}
          >
            <p style={{ fontFamily: "Inter, sans-serif" }}>
              The opening on Thursday 5th March 6-9pm will include a live
              performance by the artist.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif" }}>
              “New yesterdays appear every day. Old yesterdays are stored in the
              dusty depot of unstable human memory, guarded by forces that can
              alter them. It sounds like repressive detention. It sounds like a
              bright new future. Yesterdays never return from the depot. Can I
              visit them?” <br />
              Katya Granova
            </p>
            <p style={{ fontFamily: "Inter, sans-serif" }}>
              For the first time, the artist will combine her paintings with a
              dance performance. Grounded in the same bodily response to
              archival photographs as her paintings, the performance extends
              this corporeal dialogue with time, beyond the canvas. It will be
              staged twice: during the private view (5 March, 6-9pm) and at the
              finissage (9 March, 6-9pm).
            </p>
            <p style={{ fontFamily: "Inter, sans-serif" }}>
              The phrase All our Yesterdays, drawn from Macbeth, is also the
              title of a 1969 Star Trek episode exploring the perils of time
              travel. Granova's practice operates as a form of speculative time
              travel, driven by protest against forgetfulness, historical
              manipulation, the erasure of lived stories, and humanities
              existential condition. This protest charges her intrusive
              painterly gestures, through which she inserts her bodily presence
              into the photographic scenes.
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
        <p className=" text-[1.15rem]">Curated by Róisín McQueirns</p>
        <p className=" text-[1.15rem]">In collaboration with Shtager Gallery</p>
      </div>

      <div className="reservation-block w-full flex flex-col pt-14 pb-12 border-t-1 border-gray-500">
        <div className="event-dates space-y-4 md:space-y-4">
          <div className="reservation-item">
            <p className="flex flex-col">
              <span className="font-semibold text-[1.1rem]">
                PRIVATE VIEW:{" "}
              </span>
              March 5, 2026, 6 - 9 PM
              <br />
              Performance 8 PM
            </p>
            <button
              className="reserve-button"
              onClick={() => {
                setReservationModalOpen(true);
                setShowReservationForm("Private view: March 5, 2026, 6 - 9 PM");
              }}
            >
              RSVP
            </button>
          </div>

          <div className="reservation-item">
            <p className="flex flex-col">
              <span className="font-semibold text-[1.1rem]">ARTIST TOUR: </span>
              March 7, 3 PM
              <br />
            </p>
            <button
              className="reserve-button"
              onClick={() => {
                setReservationModalOpen(true);
                setShowReservationForm("Artist tour:  March 7, 3 PM");
              }}
            >
              RSVP
            </button>
          </div>

          <div className="reservation-item">
            <p className="flex flex-col">
              <span className="font-semibold text-[1.1rem]">FINISSAGE: </span>
              March 9, 6 - 9 PM
              <br />
              Performance 8 PM
            </p>
            <button
              className="reserve-button"
              onClick={() => {
                setReservationModalOpen(true);
                setShowReservationForm("Finissage: March 9, 6 - 9 PM");
              }}
            >
              RSVP
            </button>
          </div>
        </div>
      </div>

      <div className="location-time-section w-full space-y-1 border-b-1 border-gray-500 mb-4">
        <p className="w-full">
          <span className="font-semibold">VENUE: </span>Studio 2, Handbag
          Factory 3 Loughborough St, SE11 5RB, London, UK
        </p>
        <p className="w-full">
          <span className="font-semibold">OPENING TIME: </span>On view: March 6
          - March 09, 2026, 10 AM - 6 PM
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

      {/* <div className="w-full pt-4 pb-4 lg:pt-12">
        <img src={interiorPic.src} alt={interiorPic.id} />
        <p className="flex justify-end text-[1rem] pt-1 pr-2"></p>
      </div> */}

      {reservationModalOpen && (
        <ReservationForm
          date={showReservationForm}
          setIsOpen={setReservationModalOpen}
        />
      )}
    </div>
  );
};

export default AllOurYesterdays;
