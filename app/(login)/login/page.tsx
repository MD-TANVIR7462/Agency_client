"use client";
import LoginForm from "@/components/forms/LoginForm";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const userInfo = getUserInfo();
  if (userInfo?.userToken) {
    return router.push("/dashboard");
  }
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Login</h2>
        </div>
        <LoginForm />
        <p className="mt-2 text-center text-sm text-gray-400">
          <b>Admin Credentials (for demo purposes)</b>:
          <br />
          <b>Email:</b> tanvir.dev3@gmail.com
          <br />
          <b>Password:</b> 121212
        </p>
      </div>
    </div>
  );
}
