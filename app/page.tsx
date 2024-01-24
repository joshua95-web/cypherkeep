import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="font font-sans text-4xl flex min-w-screen items-center justify-center p-4 m-4">
        <h1>A Password Manager!</h1>
      </div>
      <div className="font font font-family Helvetica, Arial, sans-serif flex items-center justify-center flex-col text-3xl gap-7 m-4 p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/signup">Sign Up</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/login">Log In</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/about">About</Link>
        </button>
      </div>
    </main>
  );
}
