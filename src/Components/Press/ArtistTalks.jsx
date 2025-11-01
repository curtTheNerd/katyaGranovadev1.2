import YouTube from "react-youtube";
import { videos } from "../Work/Data";

const ArtistTalks = () => {
  const opts = {
    autoplay: 0,
  };

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <h2 className="w-[90%]">Artist Talks</h2>

      <div className="w-full flex flex-wrap items-center justify-around">
        {videos.map((video) => (
          <div
            className="w-[95%] sm:w-[80%] lg:w-[40vw] flex flex-col items-center"
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

export default ArtistTalks;
