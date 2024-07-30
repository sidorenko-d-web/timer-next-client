'use client'
import { authService } from '@/services/auth.service'
import type { IRegform } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import type { Dispatch,  SetStateAction } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

export const RegistrationForm = ({setIsRegistered}: {setIsRegistered: Dispatch<SetStateAction<boolean>>}) => {
    const {register, handleSubmit, reset, watch, formState:{errors}} = useForm<IRegform>({mode: 'onChange'})

    const {push} = useRouter()

    const {mutate} = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: IRegform) => authService.main('register', data),
        onSuccess(){
            reset()
            push('/')
        }
    })
    const onSubmit: SubmitHandler<IRegform> = (data) => {
        console.log(data)
        mutate(data)
    }


    errors && console.log(errors)
    return (
        <form className="bg-gray-bg flex z-40 flex-col p-8 w-3/12 rounded-3xl"
         onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" text-4xl text-center font-semibold mb-6">Register</h1>
            <label 
                className=" text-xl mb-2 ml-1" 
                htmlFor="nick">
                    Nickname 
                    {
                        <span className=' block text-red-500/90 text-lg'>
                            { errors.nick?.message }
                        </span>
                    }
            </label>
            <input 
                {...register('nick', {
                        required: 'Nick is required', 
                        maxLength: {value: 12, message: 'Max lengh is 12'}
                    })
                } 
                className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" 
                type="text" 
                id="nick"/>

            <label 
                className=" text-xl mb-2 ml-1" 
                htmlFor="email">
                    Email 
                    {
                        <span className='block text-red-500/90 text-lg'>
                            { errors.email?.message }
                        </span>
                    }
            </label>
            <input 
                {...register('email', {
                    required: 'Email is required'})
                } 
                className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" 
                type="text" 
                id="email"  
            />
            <label 
                className=" text-xl mb-2 ml-1" 
                htmlFor="pass">
                    Password 
                    {
                        <span className='block text-red-500/90 text-lg'>
                            { errors.password?.message }
                        </span>
                    }
            </label>
            <input
                {...register('password', {
                        required: 'Password is required',
                        minLength: {value: 8, message: 'Min lengh is 8'}
                    })
                } 
                className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" 
                type="password" 
                id='pass'/>
            <label 
                className=" text-xl mb-2 ml-1" 
                htmlFor="passrep">
                    Repeat password 
                    {
                        <span className='block text-red-500/90 text-lg'>
                            { errors.passwordRepeat?.message }
                        </span>
                    }
            </label>
            <input 
                {...register('passwordRepeat', {
                    validate:(value: string) => {
                        if(watch('password') != value){
                            return 'Passwords are not the same'
                        }
                    }
                })} 
                className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" 
                type="password" 
                id='passrep'
            />
            <button className=" bg-best-time-color rounded-full py-2">Register</button>
            <button onClick={() => setIsRegistered(true)} type="button"  className=" underline text-sm text-trueGray-400 mt-4">Already have an account? Click here</button>
        </form>
    )
}

