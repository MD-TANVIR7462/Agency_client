export type TAdmin = {
  _id?:string
  name: string;
  email: string;
  password: string;
  role: "admin" | "superadmin";
  location?: string;
  phone?: string;
  img: string;
  isActive?: boolean;
  isDeleted?: boolean;
  needPasswordChange?: boolean;
  passwordChangeAt?: any;
}