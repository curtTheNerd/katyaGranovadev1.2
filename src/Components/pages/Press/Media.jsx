import { articles } from "../Press/MediaData";
import MediaSectionComponent from "../Press/MediaSectionComponent";
import HelmetComponent from "../../meta-data/HelmetComponent";
import { MetaDataForHelmet } from "../../meta-data/MetaDataForHelmet";

const Media = () => {
  const meta = MetaDataForHelmet.press;
  return (
    <>
      <HelmetComponent props={meta} />

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
