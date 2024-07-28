import { axiosWithAuth } from "@/api/interceptors"
import type { ISettingsResponse, TypeSettingsRequest } from "@/types/settings.types"

class SettingsService {
  private BASE_URL = '/settings'

  async updateSession(settingsId: string, data: TypeSettingsRequest){
    const res = await axiosWithAuth.post<ISettingsResponse>(`${this.BASE_URL}/${settingsId}`, data)
    return res
  }
}
export const settingsService = new SettingsService()