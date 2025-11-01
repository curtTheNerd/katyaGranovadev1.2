import Gallery from "../Gallery/Gallery";
import { exhibition2022 as images } from "../Data";

const Exhibition2022 = () => {
  return (
    <div>
      <h2 className="w-[90%] lg:w-[95%] text-center">
        When my Babushka joined the Reich, Barbican Arts Group Trust, London,
        UK, 2022
      </h2>
      <Gallery images={images} />
    </div>
  );
};

export default Exhibition2022;
