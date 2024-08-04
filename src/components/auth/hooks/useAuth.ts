import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import type { ILoginform, IRegform } from '@/types/auth.types'

import { authService } from '@/services/auth.service'

export default function useAuth(type: 'login' | 'register') {
	const { push } = useRouter()

	const {
		mutate: auth,
		error: authError,
		isError: isAuthError,
	} = useMutation({
		mutationKey: [type],
		mutationFn({ data }: { data: ILoginform | IRegform; reset: () => void }) {
			return authService.main(type, data)
		},
		onSuccess(data, { reset }) {
			reset()
			push('/')
		}
	})
	return { auth, authError, isAuthError }
}
