import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Forgot Password
          </h2>
        </div>

        <form className="mt-8 space-y-6">
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
              className="primaryButton w-full mx-auto flex items-center justify-center">
              Submit
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
