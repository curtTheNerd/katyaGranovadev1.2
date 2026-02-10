import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import { exhibition2021_Hamlet as images } from "../Data";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";

const Exhibition2021 = () => {
  return (
    <div>
      <HelmetComponentAlbums
        year={images[0].date}
        type="exhibition"
        exhibition_title={images[0].title_detailled}
      />
      <TitleCard array={images} />

      <Gallery images={images} />

      <DescriptionCard array={images} />
    </div>
  );
};

export default Exhibition2021;
