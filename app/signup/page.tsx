"use client";
import { FormEvent } from "react";
import { useState } from "react";

export default function signUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = { username, password };
    const res = await fetch("api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await res.json;
    console.log(json);
  }

  return (
    <div className="font font-family Lucida Console, Monaco, monospace text-4xl flex flex-col min-w-screen items-center justify-center p-20 m-20 gap-10 bg-gray-800">
      <div>Sign Up to Cypherkeep</div>
      <div className="text-sky-500 text-2xl">
        All your passwords, locked up in the cloud and ready for you whenever
        you need them.
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 text-orange-800"
      >
        <input
          type="text"
          name="username"
          className="text-2xl p-2"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="text-2xl p-2"
          onChange={handleChange}
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-sky-700 px-8 py-2 text-white rounded-3xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
