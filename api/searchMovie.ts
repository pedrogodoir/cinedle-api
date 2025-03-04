import { api } from "./api";

export const searchMovie = async (query: string) => {
  const { data } = await api.get(`/search/keyword?query=${query}`);
  console.log(data);
  return data;
};