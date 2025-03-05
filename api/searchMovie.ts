import { api } from "./api";

export const searchMovie = async (query: string) => {
  const { data } = await api.get(`/search/movie?query="${query}"`);
  return data;
};