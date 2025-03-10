import { z } from "zod";
import { movieDetailsSchema } from "../schemas/movieSchema"

export type movieReq = z.infer<typeof movieDetailsSchema>;

export type belongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export type genre = {
  id: number;
  name: string;
}

export type productionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export type productionCountry = {
  iso_3166_1: string;
  name: string;
}

export type spokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export type movieRes = movieReq & {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: belongsToCollection;
  budget: number;
  genres: genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productionCompany[];
  production_countries: productionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type movieUpdate = Partial<movieRes>;