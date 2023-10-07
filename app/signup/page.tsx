"use client"
import { FormEvent } from "react"
import { useState } from "react"

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
        console.log(json)
    }

    return (
        <div className="font font-sans text-4xl flex flex-col min-w-screen items-center justify-center p-4 m-4 gap-20">
          <div>Sign Up to Cypherkeep</div>
          <div className="text-sky-500 text-2xl">All your passwords, locked up in the cloud and ready for you whenever you need them.</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-20 text-orange-800">
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    />
                <input
                    type="text"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit" className="bg-sky-700 px-14 py-2 text-orange-400 rounded-3xl">Sign Up</button>
            </form>
        </div>
    )
} 