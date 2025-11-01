import { Link } from "react-router-dom";

import { thumbsExhibition as images } from "./Data";

const Work = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2 className="text-center">Selected Exhibitions and Projects</h2>

      <div className="container flex preview_work pb-20">
        {images.map((image) => (
          <Link to={image.link} key={image.id} onClick={handleScroll}>
            <div className="imageContainer_work">
              <img src={image.src} alt={image.id} loading="lazy" />
              <div className="overlay_work">
                <p>{image.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
