import React from "react";

const DashSubTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="text-xl md:text-2xl font-bold text-gray-300">{text} Management</h1>
  );
};

export default DashSubTitle;
