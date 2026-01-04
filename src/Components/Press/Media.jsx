import HelmetComponent from "../HelmetComponent";
import { articles } from "./MediaData";
import MediaSectionComponent from "./MediaSectionComponent";

const Media = () => {
  return (
    <>
      <HelmetComponent
        title="Press – Interviews, Articles & Mentions"
        meta_description="Press coverage including interviews, articles and mentions in magazines, journals and online media."
        url_fragment="press-coverage/"
      />

      <div className="w-screen pb-20">
        <h2>PRESS</h2>
        <div className="gap-4">
          {articles.map((mediaYear) => {
            return (
              <MediaSectionComponent key={mediaYear.year} object={mediaYear} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Media;
