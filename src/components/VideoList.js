import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedItems = videos.map((video) => (
    <VideoItem
      video={video}
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
    ></VideoItem>
  ));

  return <div className="ui relaxed divided list ">{renderedItems}</div>;
};

export default VideoList;
