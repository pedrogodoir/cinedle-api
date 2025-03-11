import { z } from "zod";
import { creditsSchema } from "../schemas/creditsSchema";

export type creditsReq = z.infer<typeof creditsSchema>;

export type castMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export type creditsRes = creditsReq & {
  id: number;
  cast: castMember[];
}

export type creditsUptade = Partial<creditsRes>;