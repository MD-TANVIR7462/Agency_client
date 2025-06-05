"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/forms/LoginForm";
import Loader from "@/components/Shared/Loader";

import { logout, useCurrentToken, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/features/hooks";
import { ErrorToast } from "@/lib/utils";
import { getData } from "@/server/ServerActions";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);
  const disPatch = useDispatch();
  const checkUser = async () => {
    try {
      if (token && user) {
        const response = await getData("/auth/register/me", token);
        if (!response.success) {
          setIsChecking(false);
          disPatch(logout());
        } else {
          router.replace("/dashboard");
        }
      } else {
        setIsChecking(false);
      }
    } catch (err) {
      ErrorToast("Something went wrong!");
      router.push("/");
    }
  };

  useEffect(() => {
    checkUser();
  }, [router, token, user, disPatch]);

  if (isChecking) return <Loader />;

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
