import { api } from "./api";

export const getMovie = async (id: number) => {
  const { data } = await api.get(`/movie/${id}`);
  return data;
};