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
        <p className="mt-2 text-center text-sm text-gray-400">
          <b>Admin Credentials (for demo purposes)</b>: 
          <br />
          <b>Email:</b> admin@example.com
          <br />
          <b>Password:</b> admin123
        </p>
        <p className="mt-2 text-center text-sm text-gray-400">
          <b>Note</b>: Some features from the dashboard may not work properly as it's
          currently <b className="text-white">under development</b>. Please check the server repository for
          more information.  
        </p>
      </div>
    </div>
  );
}
