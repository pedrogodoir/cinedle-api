import { z } from "zod";
import { genreSchema } from "../schemas/genreSchema";

export type genreReq = z.infer<typeof genreSchema>;

export type genreRes = genreReq & {
  genre_ids: Array<number>
};

export type genreUptade = Partial<genreRes>;