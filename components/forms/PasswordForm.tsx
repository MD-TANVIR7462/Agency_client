import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const PasswordForm = () => {
  type TPawsword = {
    old: boolean;
    new: boolean;
    reTypeNew: boolean;
  };
  const [showPassword, setShowPassword] = useState<TPawsword>({
    old: false,
    new: false,
    reTypeNew: false,
  });
  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm space-y-4">
        <div className="relative">
          <label
            htmlFor="oldpassword"
            className="block text-sm font-medium text-gray-300 mb-1 ">
            Old Password <span className="text-red-400 text-sm ms-1">*</span>
          </label>
          <input
            id="oldpassword"
            name="oldpassword"
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
          <label htmlFor="newpassword" className="block text-sm font-medium text-gray-300 mb-1 ">
            New Password <span className="text-red-400 text-sm ms-1">*</span> (6 car)
          </label>
          <input
            id="newpassword"
            name="newpassword"
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
          <label htmlFor="newpassword2" className="block text-sm font-medium text-gray-300 mb-1 ">
            Retype New Password <span className="text-red-400 text-sm ms-1">*</span> (6 car)
          </label>
          <input
            id="newpassword2"
            name="newpassword2"
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

      <div className="text-center">
        <button type="submit" className="primaryButton w-28 ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
