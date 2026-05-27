import Gallery from "../Gallery/Gallery";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";
import HelmetComponentDynamic from "../../../meta-data/HelmetComponentAlbums";

const ExhibitionComponent = ({ images }) => {
  return (
    <>
      <HelmetComponentDynamic props={images} />
      <div className="w-[90%] sm:w-[95%] mx-auto">
        <TitleCard array={images} />
        <Gallery images={images} />
        <DescriptionCard array={images} />
      </div>
    </>
  );
};

export default ExhibitionComponent;
