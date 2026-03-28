import { Link } from "react-router";
import HelmetComponent from "../../HelmetComponent";

import NewsCellComponent from "./NewsCellComponent";
import { newsDataShows, newsDataPreviousShows } from "./NewsData";

const News = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <HelmetComponent
        title="News – Upcoming Shows & New Content"
        meta_description="News – Upcoming Shows, New Content, Mentions and all about the Art Scene."
        url_fragment="news/"
      />

      <div className="w-full pb-20 overflow-x-hidden">
        <h2 className="h2-standard-2">Upcoming Shows</h2>
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
