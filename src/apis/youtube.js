import axios from "axios";

const KEY = "AIzaSyAduK8E6TGHyZow_xqRqze4SDh0Vumg274";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    //type: "video",
    maxResults: 5,
    key: KEY,
  },
});
