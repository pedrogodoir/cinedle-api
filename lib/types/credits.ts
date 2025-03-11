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

export type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}


export type creditsRes = creditsReq & {
  id: number;
  cast: castMember[];
  crew: CrewMember[];
}

export type creditsUptade = Partial<creditsRes>;