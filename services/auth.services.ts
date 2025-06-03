import { authKey } from "@/lib/constants/constants";
import { getUserInfoFromLocalStoreage, removeUserFromStorage, setUserIntoLocalstorage } from "./localStorage";
import { jwtDecode } from "jwt-decode";

export const storeUserInfo = (data: string) => {
  if (data) {
    setUserIntoLocalstorage(data);
  } else return null;
};

export const getUserInfo = () => {
  return getUserInfoFromLocalStoreage(authKey);
};

export const isLoggedInUser = () => {
  const user = getUserInfoFromLocalStoreage(authKey);
  if (user) {
    return !!user;
  }
};

export const removeUser = () => {
  return removeUserFromStorage(authKey);
};

export const varifyToken = (token: string) => {
  return jwtDecode(token);
};
