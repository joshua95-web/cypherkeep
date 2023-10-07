import Link from "next/link"
export default function Home() {
  return (
    <main>
      <div className="font font-sans text-4xl flex min-w-screen items-center justify-center p-4 m-4">
        <h1>A Password Manager</h1>
      </div>
      <div className="font font font-family Helvetica, Arial, sans-serif flex items-center justify-center flex-col text-3xl gap-7 m-4 p-4">
        <Link href="/signup" className="bg-sky-900 px-14 py-2 text-orange-500 rounded-3xl">Sign Up</Link>
        <Link href="/login" className="bg-sky-900 px-16 py-2 text-orange-500 rounded-3xl">Log In</Link>
        <Link href="/about" className="bg-sky-900 px-16 py-2 text-orange-500 rounded-3xl">About</Link>
      </div>
      </main>
  );
}
