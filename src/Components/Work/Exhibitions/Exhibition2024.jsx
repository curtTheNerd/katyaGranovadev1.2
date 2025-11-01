import Gallery from "../Gallery/Gallery";
import { exhibition2024 as images } from "../Data";

const Exhibition2024 = () => {
  return (
    <div>
      <h2 className="w-[90%] lg:w-[95%] text-center">
        A Song of Unrequited Love for Britain, Rupturexibit,
        Kingston-upon-Thames, UK, 2024
      </h2>
      <Gallery images={images} />
    </div>
  );
};

export default Exhibition2024;
