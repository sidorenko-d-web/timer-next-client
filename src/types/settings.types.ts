export interface ISettingsResponse{
  id: string,
  userId: string,
  isTimeShowed: boolean
}

export type TypeSettingsRequest = Partial<Omit<ISettingsResponse, 'userId'>>