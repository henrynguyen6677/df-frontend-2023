'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[10rem]">
        <div
          className="
        text-[4rem]
      "
        >
          404
        </div>
        <div className="font-medium">Page not found</div>
        <button
          type="button"
          className=" cursor-pointer underline text-red-500"
          onClick={() => router.push('/')}
        >
          Back to home page
        </button>
      </div>
    </div>
  )
}
