import { axiosWithAuth } from "@/api/interceptors"
import type { ISolveResponse, TypeSolveRequest } from "@/types/solves.types"

class SolveService {
  private BASE_URL = '/solves'

  async create(data: TypeSolveRequest){
    const res = await axiosWithAuth.post<ISolveResponse>(`${this.BASE_URL}`, data)
    return res
  }

  async findOne(id: string){
    const res = await axiosWithAuth.get<ISolveResponse>(`${this.BASE_URL}/${id}`)
    return res
  }
  
  async update(id: string, data: {penalty: string | null}){
    const res = await axiosWithAuth.patch<ISolveResponse>(`${this.BASE_URL}/${id}`, data)
    return res
  }
  
  async delete(id: string){
    const res = await axiosWithAuth.delete<ISolveResponse>(`${this.BASE_URL}/${id}`)
    return res
  }
}

export const solveService = new SolveService()