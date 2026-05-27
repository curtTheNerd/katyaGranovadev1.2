import Gallery from "../Gallery/Gallery";
import TitleCard from "../Exhibitions/TitleCard";
import HelmetComponentDynamic from "../../../meta-data/HelmetComponentAlbums";

const WorkComponent = ({ images }) => {
  return (
    <>
      <HelmetComponentDynamic props={images} type="work" />

      <div className="w-[90%] sm:w-[95%] mx-auto pb-24">
        <TitleCard array={images} />
        <Gallery images={images} />
      </div>
    </>
  );
};

export default WorkComponent;
