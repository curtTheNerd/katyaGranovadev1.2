import Gallery from "../Gallery/Gallery";
import { exhibition2021 as images } from "../Data";

const Exhibition2021 = () => {
  return (
    <div>
      <h2 className="">{images[0].title}</h2>
      <Gallery images={images} />
    </div>
  );
};

export default Exhibition2021;
