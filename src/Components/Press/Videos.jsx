import YouTube from "react-youtube";
import videos from "./VideoData";
import HelmetComponent from "../HelmetComponent";

const Videos = () => {
  const opts = {
    autoplay: 0,
  };

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <HelmetComponent
        title="Video – Artist Talks & Studio Insights"
        meta_description="Video content including artist talks, interviews and studio insights of artist Katya Granova. Embedded videos and recordings."
        url_fragment="artist-talks/"
      />

      <h2 className="h2-standard pl-[5%]">Videos</h2>

      <div className="w-full flex flex-wrap items-center justify-around">
        {videos.map((video) => (
          <div
            className="w-[95%] sm:w-[80%] lg:w-[60vw] flex flex-col items-center"
            key={video.title}
          >
            <YouTube
              videoId={video.id}
              opts={opts}
              className="ytVideo"
              loading="lazy"
              allow="autoplay"
            />
            <p className="pt-8 pb-14 lg:pb-18">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
