"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { varifyToken } from "@/services/auth.services";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/features/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const userInfo = {
      email,
      password,
    };
    try {
      const res = await login(userInfo).unwrap();
      const user = varifyToken(res?.data?.accessToken);
      dispatch(setUser({ user: user, token: res?.data?.accessToken }));
      router.push("/dashboard");
      SuccessToast("Successfully Logged In");
    } catch (err) {
      const message = (err as any)?.data?.message;
      ErrorToast(message);
      setLoading(false);
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
