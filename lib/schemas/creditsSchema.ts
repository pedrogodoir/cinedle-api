import { z } from "zod";

export const castMemberSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string(),
  cast_id: z.number(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number(),
});

export const creditsSchema = z.object({
  id: z.number(),
  cast: z.array(castMemberSchema),
});