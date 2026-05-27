import { Link } from "react-router";
import HelmetComponent from "../../../meta-data/HelmetComponent";
import { MetaDataForHelmet } from "../../../meta-data/MetaDataForHelmet";

import NewsCellComponent from "./NewsCellComponent";
import { newsDataShows, newsDataPreviousShows } from "./NewsData";

const News = () => {
  const meta = MetaDataForHelmet.news;

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <HelmetComponent props={meta} />

      <div className="w-full pb-20 overflow-x-hidden">
        {/*<h2 className="h2-standard-2">Upcoming Shows</h2>
        <div className="w-[90%] flex flex-col mx-auto items-start justify-center">
          <div className="grid grid-cols-1 gap-16">
            {newsDataShows.map((data) => {
              return (
                <Link to={data.link} key={data.title} onClick={handleScroll}>
                  <NewsCellComponent data={data} />
                </Link>
              );
            })}
          </div>
        </div>
        */}
        <h2 className="h2-standard-2 mt-12">Previous Shows in 2026</h2>
        <div className="w-[90%] flex flex-col mx-auto items-start justify-center">
          <div className="grid grid-cols-1 gap-16">
            {newsDataPreviousShows.map((data) => {
              return (
                <Link to={data.link} key={data.title} onClick={handleScroll}>
                  <NewsCellComponent data={data} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
