'use client'

import { FormEvent, useRef, useState } from 'react'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { Errors } from '../../contants/error.constant'

export default function Login() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement | null>(null)
  const [errors, setErrors] = useState<Errors>({})

  const editBookValidationSchema = z.object({
    email: z.string().trim().email('Invalid email format'),
    password: z
      .string()
      .trim()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least 1 symbol',
      ),
  })
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current as HTMLFormElement)
    try {
      editBookValidationSchema.parse({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })
      setErrors({})
      router.push('/')
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.flatten().fieldErrors as Errors)
      }
    }
  }

  return (
    <div
      className="
      flex
      h-full
      w-full
      absolute
      top-0
      z-100
    "
    >
      <div
        className="
        relative
        w-[15rem]
        text-black
        bg-white
        p-4
        m-auto"
      >
        <div
          className="
            flex
            items-center
            font-bold
            justify-between
        "
        >
          <div
            className="
            font-bold
            text-2xl
            text-center
            w-full
            text-red-500
          "
          >
            Bookstore
          </div>
        </div>
        <form ref={formRef} onSubmit={handleLogin}>
          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
          "
          >
            <label htmlFor="email">
              Email (*)
              <input
                className={`
                  pl-1
                  border-solid
                  border-black
                  rounded-[0.3rem]
                  border-[1px]
                  w-full
                  ${errors?.name ? 'border-red-500' : ''}
                `}
                type="text"
                name="email"
                id="email"
                required
              />
            </label>
            <div className="text-red-500 text-[0.9rem]">{errors?.email}</div>
          </div>
          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
          "
          >
            <label htmlFor="password">
              Password (*)
              <input
                className={`
                pl-1
                border-solid
                border-black
                rounded-[0.3rem]
                border-[1px]
                w-full
                ${errors?.password ? 'border-red-500' : ''}
                `}
                type="password"
                name="password"
                id="password"
                required
              />
            </label>
            {errors?.password?.map((error, index) => (
              <div key={index} className="text-red-500 text-[0.9rem]">
                {error}
              </div>
            ))}
          </div>

          <div
            className="
            flex
            flex-col
            pt-2
            pb-2
            items-end
          "
          >
            <button
              className="
              bg-red-500
              text-white
              rounded-[0.3rem]
              w-full
            "
              type="submit"
              id="createBook"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
