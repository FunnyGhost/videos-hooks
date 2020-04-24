import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <p>{video.snippet.title}</p>
      <img src={video.snippet.thumbnails.medium.url} alt=""></img>
    </div>
  );
};

export default VideoItem;
