import Link from "next/link"
export default function Home() {
  return (
    <main>
      <div className="font font-sans flex min--screen">
        <h1>A Password Manager</h1>
      </div>
      <div className="font font-mono flex items-center justify-center flex-col text-4xl gap-5 m-4 p-4">
        <Link href="/signup" className="bg-slate-800 p-4 text-orange-500 rounded-3xl">Sign Up</Link>
        <Link href="/login" className="bg-slate-800 p-4 text-orange-500 rounded-3xl">Log In</Link>
        <Link href="/about" className="bg-slate-800 p-4 text-orange-500 rounded-3xl">About</Link>
      </div>
      </main>
  );
}
