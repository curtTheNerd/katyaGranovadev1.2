import Gallery from "../Gallery/Gallery";
import { work2020 as images } from "../Data";
const Work2020 = () => {
  return (
    <div>
      <h2 className="text-center">{images[0].title}</h2>
      <Gallery images={images} />
    </div>
  );
};

export default Work2020;
