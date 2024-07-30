import { authService } from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout(){

  const { push } = useRouter()

  const { mutate: logout } = useMutation({
    mutationKey:['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () =>  {
      push('/auth')
      localStorage.removeItem('sessionName')
      localStorage.removeItem('scrambleType')
    }
  })

  return { logout }
}