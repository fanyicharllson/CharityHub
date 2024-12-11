import Link from "next/link"

const ButtonLink = ({ btnName }: { btnName: string }) => {
  return (
    <Link
    href="/donate"
    className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
  >
    {btnName}
  </Link>
  )
}

export default ButtonLink