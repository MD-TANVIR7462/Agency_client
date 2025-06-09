import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ?Notifications...........
export const SuccessToast = (message?: string) => {
  toast.success(message || "Operation successful!");
};

export const ErrorToast = (message?: string) => {
  toast.error(message || "Something went wrong!");
};





export const varifyToken = (token: string) => {
  return jwtDecode(token);
};
