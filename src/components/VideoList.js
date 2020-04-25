import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedItems = videos.map((video) => (
    <VideoItem video={video}></VideoItem>
  ));

  return <div className="ui relaxed divided list ">{renderedItems}</div>;
};

export default VideoList;
