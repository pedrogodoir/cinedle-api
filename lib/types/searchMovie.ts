import { z } from "zod";
import { movieResponseSchema } from "../schemas/searchMovieSchema"

export type searchMovieReq = z.infer<typeof movieResponseSchema>;

export type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type searchMovieRes = searchMovieReq & {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
};

export type searchMovieUpdate = Partial<searchMovieRes>;