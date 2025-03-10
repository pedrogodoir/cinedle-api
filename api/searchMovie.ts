import { searchMovieReq, searchMovieRes } from "@/lib/types/searchMovie";
import { api } from "./api";

export const searchMovie = async (query: string): Promise<searchMovieRes> => {
  const response = await api.get(`/search/movie?query=${query}`);
  return response.data;
};