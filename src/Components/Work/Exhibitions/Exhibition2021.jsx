import Gallery from "../Gallery/Gallery";
import { exhibition2021 as images } from "../Data";

const Exhibition2021 = () => {
  return (
    <div>
      <h2 className="w-[90%] lg:w-[95%] text-center">
        Act 1. Scene 5 (with Anna Tagantzeva-Kobzeva), Sphera Fund, Moscow, RU,
        2021
      </h2>
      <Gallery images={images} />
    </div>
  );
};

export default Exhibition2021;
