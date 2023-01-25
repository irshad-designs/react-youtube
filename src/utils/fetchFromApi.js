import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 25,
  },
  headers: {
    "X-RapidAPI-Key": "d7af1a26e5msh86f8b627b6554f6p1499cejsn609c2c3f4131",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
