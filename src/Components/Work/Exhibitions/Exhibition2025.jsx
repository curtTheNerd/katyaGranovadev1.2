import Gallery from "../Gallery/Gallery";
import { exhibition2025 as images } from "../Data";

const Exhibition2025 = () => {
  return (
    <div>
      <h2 className="w-[90%] lg:w-[95%] text-center">
        Intruded Picnics, End of Residency Show, Turps Banana, London, UK, 2025
      </h2>
      <Gallery images={images} />
    </div>
  );
};

export default Exhibition2025;
