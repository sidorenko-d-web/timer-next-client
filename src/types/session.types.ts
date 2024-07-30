import type { ISolveResponse } from "./solves.types";

export interface ISessionResponse{
  id: string;
  userId: string;
  name: string;
  scrambleType: string
  solves: ISolveResponse[] 
}

export type TypeSessionRequest = {
  name: string;
  scrambleType?: string
}