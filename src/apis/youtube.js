import axios from "axios";

const KEY = "AIzaSyC1sk_HhyQQ9uhj4dzr0fvY8O6jJnTkNSI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
    type: "video",
  },
});
