import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID emsx5kUZvCovHY8ePkHW4U-0VE1bwoL7ybHWpZ3JEmI",
  },
});
