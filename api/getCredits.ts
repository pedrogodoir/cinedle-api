import { creditsRes } from "@/lib/types/credits";
import { api } from "./api";

export const getCredits = async (id: number): Promise<creditsRes> => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data;
};