import Gallery from "../Gallery/Gallery";
import HelmetComponentAlbums from "../../HelmetComponentAlbums";
import TitleCard from "../Exhibitions/TitleCard";

const ExhibitionComponent = ({ images }) => {
  return (
    <>
      <HelmetComponentAlbums
        year={images[0].date}
        type="exhibition"
        exhibition_title={images[0].title}
      />

      <div className="w-[90%] sm:w-[95%] mx-auto pb-24">
        <TitleCard array={images} />
        <Gallery images={images} />
      </div>
    </>
  );
};

export default ExhibitionComponent;
