import React from "react";
import YouTube from "react-youtube";
// import { videos } from "../Work/Data";

const ArtistTalks = () => {
  const opts = {
    autoplay: 0,
  };

  return (
    <div className="artistTalks">
      <h2 className="title">
        {
          //Artist Talks
        }
      </h2>

      <div className="videoGrid">
        {videos.map((video) => (
          <div className="videoWrapper" key={video.title}>
            <YouTube
              videoId={video.id}
              opts={opts}
              className="ytVideo"
              loading="lazy"
              allow="autoplay"
            />
            <h3 className="videoDescription">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistTalks;
