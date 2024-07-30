import { Solve } from "@/classes/Solve";

export interface ISolveResponse extends Solve {
  id: string;
  sessionId: string;
  time: Date;
  penalty: string | null;
  scramble: string;
  createdAt: Date;
}

export type TypeSolveRequest = Partial<Omit<ISolveResponse, "id">> 
