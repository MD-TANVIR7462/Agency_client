"use client";

import LoginForm from "@/components/forms/LoginForm";


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
           Login
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}