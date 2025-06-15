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
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [fillAdminCreds, setFillAdminCreds] = useState(false);

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
        <span className="flex justify-end relative group">
          <Link href={"/"}>
            <p className="text-purple-500/60 hover:text-purple-500 cursor-pointer w-max flex justify-center items-center underline">
              <Undo2 width={20} />
              <span className="w-24 text-center absolute bottom-full mb-1 bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
                Back to Home
              </span>
            </p>
          </Link>
        </span>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Login</h2>
        </div>

        <LoginForm fillAdminCreds={fillAdminCreds} />

        <div className="text-center">
          <button
            onClick={() => setFillAdminCreds(true)}
            className="mt-4 secondaryButton text-sm text-purple-400 hover:text-purple-300"
          >
            Autofill Admin Credentials
          </button>
        </div>
      </div>
    </div>
  );
}
