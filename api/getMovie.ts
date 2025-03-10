import { movieReq, movieRes } from "@/lib/types/movie";
import { api } from "./api";

export const getMovie = async (id: number): Promise<movieRes> => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};