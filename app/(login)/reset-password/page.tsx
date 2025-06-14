"use client";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { resetPassword } from "@/server/ServerActions";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");
  const token = params.get("token");

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  if (!id || !token) {
    ErrorToast("For Reset First send us your email");
    router.replace("/forgot-password");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const newPass = (form.elements.namedItem("password") as HTMLInputElement).value;
      const newPass2 = (form.elements.namedItem("password2") as HTMLInputElement).value;
      if (newPass !== newPass2) {
        ErrorToast("Passwords do not match.");
        return;
      }
      const res = await resetPassword("/auth/password/reset-password/", { id, newPass }, token);
      if (!res.success) {
        ErrorToast(res.message);
        router.replace("/");
        return;
      }
      setLoading(false);
      SuccessToast(res.message);
      form.reset();
      router.replace("/login");
    } catch (err: any) {
      setLoading(false);
      ErrorToast(err.message);
      router.replace("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Reset Password</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                New Password
              </label>
              <input
                id="password"
                name="password"
                type={showPass1 ? "text" : "password"}
                required
                className="customInput pr-10"
                placeholder="New Password"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setShowPass1(!showPass1)}
              >
                {showPass1 ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            {/* Retype Password Field */}
            <div className="relative">
              <label htmlFor="password2" className="sr-only">
                Retype New Password
              </label>
              <input
                id="password2"
                name="password2"
                type={showPass2 ? "text" : "password"}
                required
                className="customInput pr-10"
                placeholder="Retype New Password"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setShowPass2(!showPass2)}
              >
                {showPass2 ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="primaryButton w-full mx-auto flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
