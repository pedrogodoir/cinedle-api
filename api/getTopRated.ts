import { searchMovieReq, searchMovieRes } from "@/lib/types/searchMovie";
import { api } from "./api";

export const topRated = async (): Promise<searchMovieRes> => {
  const response = await api.get("/movie/top_rated");
  console.log(response.data);
  return response.data;
};