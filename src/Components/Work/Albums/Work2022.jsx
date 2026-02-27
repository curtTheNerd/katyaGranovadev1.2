import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import { work2022 as images } from "../Data";

const Work2022 = () => {
  return (
    <>
      <HelmetComponentAlbums year={images[0].title} type="work" />
      <div className="w-full pb-12">
        <h2 className="h2-standard">{images[0].title}</h2>
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Work2022;
