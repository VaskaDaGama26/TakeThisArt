import React from "react";
import PhotoItem from "./PhotoItem";
import VideoItem from "./VideoItem";

const MediaGrid = ({ photos, videos }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <VideoItem video={videos[0]} />
      <PhotoItem photo={photos[0]} />
      <PhotoItem photo={photos[1]} />
      <PhotoItem photo={photos[2]} />
      <PhotoItem photo={photos[3]} />
      <VideoItem video={videos[1]} />
    </div>
  );
};

export default MediaGrid;
