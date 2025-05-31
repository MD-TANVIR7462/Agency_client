"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { createData } from "@/server/ServerActions";
import { storeUserInfo } from "@/services/auth.services";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      password,
    };
    try {
      const result = await createData("auth/login", data);
      if (result?.success) {
        setLoading(false);
        const res = storeUserInfo(result?.data?.accessToken);
        if (res) {
          router.push("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
    }

    // setTimeout(() => {
    //   if (email === "admin@example.com" && password === "admin123") {
    //     localStorage.setItem("user", JSON.stringify({ role: "super_admin" }));
    //     router.push("/dashboard/admin");
    //   } else if (email === "user@example.com" && password === "user123") {
    //     localStorage.setItem("user", JSON.stringify({ role: "admin" }));
    //     router.push("/dashboard/admin");
    //   }
    //   setLoading(false);
    // }, 2000);
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
        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="customInput pr-10"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div>
        <button type="submit" className="primaryButton w-full flex items-center justify-center" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </form>
  );
}
