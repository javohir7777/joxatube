import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    q: "music",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": "a3334b51aamsh7c960ce71450d90p1c6052jsn0a269bfcb1df",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiServer = {
  async fetching(str) {
    const response = await axios.get(`${BASE_URL}/${str}`, options);
    return response;
  },
};
