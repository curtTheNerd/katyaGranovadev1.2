import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import { exhibition2026_HandbagFactory as images } from "../Data";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";

const Exhibition2026_AllOurYesterdays = () => {
  return (
    <>
      <HelmetComponentAlbums
        year={images[0].date}
        type="exhibition"
        exhibition_title={images[0].title}
      />
      <div className="w-[90%] sm:w-[95%] mx-auto">
        <TitleCard array={images} />

        <Gallery images={images} />

        <DescriptionCard array={images} />
      </div>
    </>
  );
};

export default Exhibition2026_AllOurYesterdays;
