import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import { exhibition2024 as images } from "../Data";

const Exhibition2024 = () => {
  return (
    <>
      <HelmetComponentAlbums
        year={images[0].date}
        type="exhibition"
        exhibition_title={images[0].title_detailled}
      />
      <div>
        <h2 className="text-center">{images[0].title_detailled}</h2>
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Exhibition2024;
