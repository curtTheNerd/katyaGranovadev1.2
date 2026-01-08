import { Link } from "react-router-dom";
import HelmetComponent from "../HelmetComponent";

import { thumbsWork as images } from "./Data";

const Work = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <HelmetComponent
        title="Selected work by year"
        meta_description="Discover selected paintings and artworks. Oil on canvas, acrylic transfer, van Dyke, and paperworks."
        url_fragment="work"
      />

      <div>
        <h2 className="h2-standard">Selected Work by Year</h2>

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
    </>
  );
};

export default Work;
