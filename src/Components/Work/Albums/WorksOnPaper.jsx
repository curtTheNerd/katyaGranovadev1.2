import Gallery from "../Gallery/Gallery";
import { worksOnPaper as images } from "../Data";

const WorksOnPaper = () => {
  return (
    <div>
      <h2 className="text-center">{images[0].title}</h2>
      <Gallery images={images} />
    </div>
  );
};

export default WorksOnPaper;
