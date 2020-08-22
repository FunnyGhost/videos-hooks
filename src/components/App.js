import React, { useEffect, useState } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("buildings");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo}></VideoDetails>
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
