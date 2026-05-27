import { Link } from "react-router-dom";
import HelmetComponent from "../../../meta-data/HelmetComponent";
import { MetaDataForHelmet } from "../../../meta-data/MetaDataForHelmet";

import { thumbsWork as images } from "../Data";

const Work = () => {
  const meta = MetaDataForHelmet.work;

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="preview_work_wrapper w-[90%] mx-auto pb-20">
      <HelmetComponent props={meta} />

      <div className="flex flex-col">
        <h2 className="h2-standard">Selected Work by Year</h2>

        <div className="preview_gallery w-full grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 mx-auto">
          {images.map(
            (
              image, // // mapping image-array to a preview gallery as grid-element inside flex-container
            ) => (
              <Link
                to={image.link}
                key={image.id}
                onClick={handleScroll}
                className="relative block w-full aspect-square lg:h-[60vh] rounded-xs overflow-hidden"
              >
                <img
                  src={image.src.replace(/\.webp$/, "thumb.webp")}
                  alt={image.id}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="group flex-center absolute left-0 bottom-0 w-full h-1/4 bg-[rgba(255,255,255,0.7)] cursor-pointer">
                  <p className="text-[1.15rem] sm:text-[1.25rem] text-[rgb(74,74,74)] group-hover:text-[rgb(91,18,100)] group-hover:text-[1.3rem] transition-all duration-500">
                    {image.title}
                  </p>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
