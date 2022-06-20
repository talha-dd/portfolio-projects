import axios from "axios";

const KEY = "AIzaSyDIHGZUca2_Y2IPYIVTHFM6xFZFnjgtR5M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
