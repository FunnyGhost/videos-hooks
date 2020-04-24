import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedItems = videos.map((video) => (
    <VideoItem video={video}></VideoItem>
  ));

  return <div>{renderedItems}</div>;
};

export default VideoList;
