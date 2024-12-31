"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("user", JSON.stringify({ role: "super_admin" }));
      router.push("/dashboard/admin");
    } else if (email === "user@example.com" && password === "user123") {
      localStorage.setItem("user", JSON.stringify({ role: "admin" }));
      router.push("/dashboard/admin");
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="customInput"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="customInput"
            placeholder="Password"

            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="primaryButton w-full"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}