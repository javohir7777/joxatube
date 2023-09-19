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
    "X-RapidAPI-Key": "f399c28c01mshbc2264a15764dcbp112910jsn961c77f286b9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiServer = {
  async fetching(str) {
    const response = await axios.get(`${BASE_URL}/${str}`, options);
    return response;
  },
};
