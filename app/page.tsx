import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="font font-sans text-4xl flex min-w-screen items-center justify-center p-4 m-4">
        <h1>A Password Manager!</h1>
      </div>
      <div className="font-mono flex items-center justify-center flex-col text-3xl gap-7 m-4 p-4">
        <button className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-800 hover:to-gray-900  text-white font-bold py-2 px-4 rounded">
          <Link href="/signup">Sign Up</Link>
        </button>
        <button className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-800 hover:to-gray-900  text-white font-bold py-2 px-4 rounded">
          <Link href="/login">Log In</Link>
        </button>
        <button className=" bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-800 hover:to-gray-900  text-white font-bold py-2 px-4 rounded">
          <Link href="/about">About</Link>
        </button>
      </div>
    </main>
  );
}
