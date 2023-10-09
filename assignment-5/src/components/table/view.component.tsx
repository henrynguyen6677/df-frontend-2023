import Link from 'next/link'

export default function ViewComponent({ id }: { id: number }) {
  return (
    <Link
      className=" cursor-pointer underline text-red-500"
      href={`/book/${id}`}
    >
      View
    </Link>
  )
}
