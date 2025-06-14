import { ErrorToast, SuccessToast, varifyToken } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import {
  logout,
  setUser,
  useCurrentToken,
  useCurrentUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { updatePassword } from "@/server/ServerActions";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type TPawsword = {
  old: boolean;
  new: boolean;
  reTypeNew: boolean;
};
type inputs = {
  oldpassword: string;
  newpassword: string;
  newpassword2: string;
};
const PasswordForm = ({ onClose }: { onClose: () => void }) => {
  const [showPassword, setShowPassword] = useState<TPawsword>({
    old: false,
    new: false,
    reTypeNew: false,
  });

  const [login, { data, error: loginError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //Token...
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser) as {
    email: string;
    role: string;
    iat: string;
    exp: string;
  };

  //hook form intigration....
  const { register, handleSubmit } = useForm<inputs>();

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    const { oldpassword, newpassword, newpassword2 } = data;

    const newData = {
      oldPassword: oldpassword,
      newPassword: newpassword,
    };

    if (newpassword !== newpassword2) {
      return setError("New password and confirmation do not match.");
    }
    try {
      setLoading(true);
      const res = await updatePassword(
        "auth/change-password",
        newData,
        token as string
      );

      if (!res.success) {
        ErrorToast(res.message);
        setLoading(false);
        setError("");
        return;
      }

      const userInfo = {
        email: user.email,
        password: newpassword,
      };

      const result = await login(userInfo).unwrap();
      const newLoginData = varifyToken(result?.data?.accessToken);
      dispatch(
        setUser({ user: newLoginData, token: result?.data?.accessToken })
      );
      setLoading(false);
      setError("");
      onClose();
      SuccessToast(`${res.message}`);
      router.refresh();
    } catch (err: any) {
      ErrorToast(err?.message);
      setLoading(false);
      setError("");
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm space-y-4">
        <div className="relative">
          <label
            htmlFor="oldpassword"
            className="block text-sm font-medium text-gray-300 mb-1 ">
            Old Password <span className="text-red-400 text-sm ms-1">*</span>
          </label>
          <input
            id="oldpassword"
            {...register("oldpassword")}
            minLength={6}
            type={showPassword.old ? "text" : "password"}
            required
            className="customInput pr-10"
            placeholder="Old Password"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-500"
            onClick={() =>
              setShowPassword((prev: TPawsword) => ({
                ...prev,
                old: !prev.old,
              }))
            }>
            {showPassword.old ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="relative">
          <label
            htmlFor="newpassword"
            className="block text-sm font-medium text-gray-300 mb-1 ">
            New Password <span className="text-red-400 text-sm ms-1">*</span> (6
            car)
          </label>
          <input
            id="newpassword"
            {...register("newpassword")}
            minLength={6}
            type={showPassword.new ? "text" : "password"}
            required
            className="customInput pr-10"
            placeholder="New Password"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev: TPawsword) => ({
                ...prev,
                new: !prev.new,
              }))
            }
            className="absolute right-3 top-9 text-gray-500">
            {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <label
            htmlFor="newpassword2"
            className="block text-sm font-medium text-gray-300 mb-1 ">
            Confirm New Password{" "}
            <span className="text-red-400 text-sm ms-1">*</span> (6 car)
          </label>
          <input
            id="newpassword2"
            {...register("newpassword2")}
            minLength={6}
            type={showPassword.reTypeNew ? "text" : "password"}
            required
            className="customInput pr-10"
            placeholder="Retype New Password"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev: TPawsword) => ({
                ...prev,
                reTypeNew: !prev.reTypeNew,
              }))
            }
            className="absolute right-3 top-9 text-gray-500">
            {showPassword.reTypeNew ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="text-center">
        <button type="submit" className="primaryButton w-40 "
          disabled={loading}>
              {loading ? (
                <>
                <Loader2 className="h-4 w-4 animate-spin" />
                  Updating
                </>
              ) : (
                "Save Changes"
              )}
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
