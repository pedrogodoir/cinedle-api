"use client";
import { number, z } from "zod";

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const genreArraySchema = z.object({
  genres: z.array(genreSchema)
})