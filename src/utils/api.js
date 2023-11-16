import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  //Authorization : Xác thực
  Authorization: "bearer " + TMDB_TOKEN,
};
export const fetDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BaseURL + url, {
      headers,
      params, // Các yêu cầu đi kèm khi call API
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
