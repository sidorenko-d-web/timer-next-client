import { axiosWithAuth } from "@/api/interceptors"
import type { ISessionResponse, TypeSessionRequest } from "@/types/session.types"

class SessionService {
  private BASE_URL = '/sessions'

  async createSession(data: TypeSessionRequest){
    const res = await axiosWithAuth.post<ISessionResponse>(`${this.BASE_URL}`, data)
    return res
  }

  async getAllSessionsOfUser(){
    const res = await axiosWithAuth.get<ISessionResponse[]>(`${this.BASE_URL}`)
    return res
  }
  
  async getSessionOfUser(sessionName: string){
    const res = await axiosWithAuth.get<ISessionResponse>(`${this.BASE_URL}/${sessionName}`)
    return res
  }
  
  async updateSession(sessionName: string, data: TypeSessionRequest){
    const res = await axiosWithAuth.put<ISessionResponse>(`${this.BASE_URL}/${sessionName}`, data)
    return res
  }
  
  async deleteSession(sessionName: string){
    const res = await axiosWithAuth.delete<ISessionResponse>(`${this.BASE_URL}/${sessionName}`)
    return res
  }
}
export const sessionService = new SessionService()