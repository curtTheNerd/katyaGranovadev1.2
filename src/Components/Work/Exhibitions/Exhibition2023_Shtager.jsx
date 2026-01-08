import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import { exhibition2023_Shtager as images } from "../Data";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";

const Exhibition2025_Shtager = () => {
  return (
    <>
      <HelmetComponentAlbums
        year={images[0].date}
        type="exhibition"
        exhibition_title={images[0].title_detailled}
      />
      <TitleCard array={images} />

      <Gallery images={images} />

      <DescriptionCard array={images} />
    </>
  );
};

export default Exhibition2025_Shtager;
