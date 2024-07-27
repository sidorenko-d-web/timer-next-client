export interface ISolveResponse {
  id: string;
  sessionId: string;
  time: Date;
  penalty: string;
  scramble: string;
  createdAt: Date;
}

export type TypeSolveRequest = Partial<Omit<ISolveResponse, "id">>
