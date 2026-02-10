import Gallery from "../../Work/Gallery/Gallery";
import banner from "/public/assets/News/NewsThumbnails/AllOurYesterdays_1350.webp";

const AllOurYesterdays = () => {
  const galleryImages = [
    {
      src: "/public/assets/News/2026/AllOurYesterdays/kneeling grandma.webp",
      id: "Reclining grandma",
      method: "Oil on canvas",
      sizeCm: "155 x 185 cm",
      date: "2025",
    },
    {
      src: "/public/assets/News/2026/AllOurYesterdays/accidental shot.webp",
      id: "Accidental Shot",
      method: "Oil on canvas",
      sizeCm: "160 x 210 cm",
      date: "2024",
    },
    {
      src: "/public/assets/News/2026/AllOurYesterdays/IMG_5428.webp",
      id: "Surgical light",
      method: "Oil on canvas",
      sizeCm: "170 x 180 cm",
      date: "2024",
    },
    {
      src: "/public/assets/News/2026/AllOurYesterdays/tea picnic in fields 180x200 copy.webp",
      id: "Picnic in the fields",
      method: "Oil on canvas",
      sizeCm: "200 x 220 cm",
      date: "2024",
    },
  ];

  const interiorPic = {
    src: "/public/assets/News/2026/AllOurYesterdays/The_Handbag_Factory_gallary_Katya-Granova1.webp",
    id: "Handbag gallery - interior",
  };

  return (
    <div className="flex items-center justify-center flex-col w-[95%] pr-3 mx-auto space-y-8">
      <h2 className="h2-standard pb-4">
        All Our Yesterdays: A new solo exhibition by Katya Granova at The
        Handbag Factory, ASC
      </h2>
      <div className="pb-4 lg:w-[55%] lg:mr-20">
        <img
          src={banner}
          alt="All Our Yesterdays: A new solo exhibition by Katya Granova at The Handbag Factory, ASC"
        />
      </div>

      <div className="paragraph-section w-full space-y-4">
        <p>
          All Our Yesterdays presents a selection of new paintings by Katya
          Granova, accompanied by the artist's solo performance within the
          exhibition space. Granova's paintings begin with old photographs from
          anonymous family albums, state archives, and flea markets across
          different countries. Using energetic brushwork and vibrant colour,
          Granova responds to those moments from the unknown, unreachable past,
          disrupting and reanimating someone’s yesterdays, the fragile substance
          of someone else’s life.
        </p>
        <p>
          “New yesterdays appear every day. Old yesterdays are stored in the
          dusty depot of unstable human memory, guarded by forces that can alter
          them. It sounds like repressive detention. It sounds like a bright new
          future. Yesterdays never return from the depot. Can I visit them?”
          Katya Granova
        </p>
        <p>
          For the first time in her practice, the artist will combine her
          paintings with a dance performance. The performance, grounded in the
          same bodily response to archival photographs as her paintings, takes
          this corporeal dialogue with time beyond the canvas. It will be shown
          twice: during the private view and at the finissage.
        </p>
        <p>
          The phrase All Our Yesterdays, drawn from Macbeth, is also the title
          of a 1969 Star Trek episode exploring the perils of time travel.
          Granova's practice operates as a form of speculative time travel,
          driven by protest against forgetfulness, historical manipulation, the
          erasure of lived stories, and humanity's existential condition. This
          protest charges her intrusive painterly gestures, through which she
          inserts her bodily presence into the photographic scenes.
        </p>
      </div>

      <p className="w-full pt-7 pb-2">In collaboration with Shtager Gallery</p>
      <p className="w-full">
        <span className="italic">VENUE: </span>Studio 2, Handbag Factory 3
        Loughborough St, London SE11 5RB, London, UK
      </p>
      <p className="w-full">
        <span className="italic">OPENING TIME: </span>On view: March 6 - March
        10, 2026, 10 AM - 6 PM
      </p>
      <br />

      <div className="reservation-block w-[95%] space-y-6 pt-4 pb-6">
        <div className="w-full">
          <p className="flex flex-col md:flex-row md:justify-between">
            <span>
              <span className="italic">Private view: </span>March 5, 2026, 6 - 9
              PM
              <br />
              Performance 8 pm
            </span>
            <span className="font-semibold cursor-pointer pt-3 md:pr-4 text-[1.15rem]">
              Reserve here
            </span>
          </p>
        </div>

        <div className="w-full md:pb-4">
          <p className="flex flex-col md:flex-row md:justify-between">
            <span>
              <span className="italic">Artist tour: </span>March 7, 3 PM
              <br />
            </span>
            <span className="font-semibold cursor-pointer pt-4 md:pr-4 text-[1.15rem]">
              Reserve here
            </span>
          </p>
        </div>

        <div className="">
          <p className="flex flex-col md:flex-row md:justify-between">
            <span>
              <span className="italic">Finissage: </span>March 10, 6-9 PM
              <br />
              Performance 8 pm
            </span>
            <span className="font-semibold cursor-pointer pt-3 md:pr-4 text-[1.15rem]">
              Reserve here
            </span>
          </p>
        </div>
      </div>

      <Gallery images={galleryImages} />

      <div className="w-full pt-8 pb-20">
        <img src={interiorPic.src} alt={interiorPic.id} />
        <p className="flex justify-end text-[1rem] pt-1 pr-2">
          {interiorPic.id}
        </p>
      </div>
    </div>
  );
};

export default AllOurYesterdays;
