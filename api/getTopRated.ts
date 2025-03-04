import { api } from "./api";

export const topRated = async () => {
  const { data } = await api.get("/movie/top_rated");
  console.log(data);
  return data;
};