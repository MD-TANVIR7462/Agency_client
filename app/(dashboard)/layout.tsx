"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import MotionWraper from "@/components/Shared/MotionWraper";
import { useRouter } from "next/navigation";
import Loader from "@/components/Shared/Loader";
import { useAppSelector } from "@/redux/features/hooks";
import { useCurrentToken, useCurrentUser } from "@/redux/features/auth/authSlice";
import { ErrorToast } from "@/lib/utils";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  useEffect(() => {
    try {
      if (!token || !user) {
        router.push("/login");
      } else {
        setIsAuthorized(true);
      }
      setIsMounted(true);
    } catch (err) {
      ErrorToast("Something went wrong!");
      router.push("/");
    }
  }, []);

  if (!isMounted || !isAuthorized) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <div className="lg:ml-[280px]">
        <Header />
        <MotionWraper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-3 md:p-6"
        >
          {children}
        </MotionWraper>
      </div>
    </div>
  );
};

export default DashboardLayout;
