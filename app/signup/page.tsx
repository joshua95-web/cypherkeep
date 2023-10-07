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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    />
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <button type="submit">Sign Up</button>
            </form>
        </div>
    )
} 