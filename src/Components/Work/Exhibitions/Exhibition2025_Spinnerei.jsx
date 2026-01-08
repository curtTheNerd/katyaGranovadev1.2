import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import { exhibition2025_Spinnerei as images } from "../Data";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";

const Exhibition2025_Spinnerei = () => {
  return (
    <>
      <HelmetComponentAlbums
        year={images[0].date}
        type="exhibition"
        exhibition_title={images[0].title}
      />

      <TitleCard array={images} />

      <Gallery images={images} />

      <DescriptionCard array={images} />
    </>
  );
};

export default Exhibition2025_Spinnerei;
