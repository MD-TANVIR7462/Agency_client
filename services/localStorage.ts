import { authKey } from "@/lib/constants/constants";
import { jwtDecode } from "jwt-decode";

export const setUserIntoLocalstorage = (token: string) => {
  if (!token || typeof window === "undefined") {
    return null;
  }
  return localStorage.setItem(authKey, token);
};

export const getUserInfoFromLocalStoreage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return null;
  }
  const userToken = localStorage.getItem(key);
  if (userToken) {
    const userData = jwtDecode(userToken);
    return { userToken, ...userData };
  } else {
    return null;
  }
};


export const removeUserFromStorage = (key:string)=>{
      if (!key || typeof window === "undefined") {
    return null;
  }
  return localStorage.removeItem(key)
}