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

      <div className="w-full pb-20 overflow-x-hidden">
        <h2 className="h2-standard-2">Press</h2>
        <div className="w-[90%] flex flex-col mx-auto items-center xl:items-start justify-center">
          <div className="grid grid-cols-1 gap-16">
            {articles.map((mediaYear) => {
              return (
                <MediaSectionComponent
                  key={mediaYear.year}
                  object={mediaYear}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
