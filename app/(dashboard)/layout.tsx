"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import MotionWraper from "@/components/Shared/MotionWraper";
import { useRouter } from "next/navigation";
import Loader from "@/components/Shared/Loader";
import { useAppSelector } from "@/redux/features/hooks";
import { logout, useCurrentToken, useCurrentUser } from "@/redux/features/auth/authSlice";
import { ErrorToast } from "@/lib/utils";
import { getData } from "@/server/ServerActions";
import { useDispatch } from "react-redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);
  const disPatch = useDispatch();
  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        if (!token || !user) {
          disPatch(logout());
          router.replace("/login");
          return;
        } else {
          const response = await getData("/auth/register/me", token);
          if (!response.success) {
            ErrorToast("Please Login First!");
            disPatch(logout());
            router.replace("/login");
          } else {
            setIsAuthorized(true);
          }
        }
      } catch (err: any) {
        ErrorToast("Please Login Again!");
        disPatch(logout());
      } finally {
        setIsMounted(true);
      }
    };

    checkAuthorization();
  }, [token]);

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
