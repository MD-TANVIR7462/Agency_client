"use client";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { createData } from "@/server/ServerActions";
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleForgetPassword = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const form = e.target;
      const email = form.email.value;
      const res = await createData("/auth/password/forget-password", { email });
      if (!res.success) {
        ErrorToast(res.message);
        router.replace("/");
        return;
      }
      setLoading(false);
      SuccessToast(res.message);
      form.reset();
      router.replace("/");
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Forgot Password</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleForgetPassword}>
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
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="primaryButton w-full mx-auto flex items-center justify-center"
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
        <span className="flex justify-end">
          <Link href={"/login"}>
            <p className="text-purple-500/60 hover:text-purple-500/80 cursor-pointer w-max flex justify-center items-center underline ">
              Return To Login <ArrowUpRight width={20} />
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
