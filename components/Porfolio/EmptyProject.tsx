import React from "react";

const EmptyTabMessage = ({ tabName }: { tabName?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center text-gray-400 animate-fade-in">
      <img
        src="https://cdn-icons-png.flaticon.com/512/833/833524.png"
        alt="Empty Folder"
        className="w-16 h-16 mb-4 opacity-80"
      />
      <h3 className="text-lg font-semibold text-gray-300">
        No projects found under <span className="text-purple-400">"{tabName}"</span>.
      </h3>
      <p className="text-sm mt-1 text-gray-500">
        Try switching tabs, or you'll see new projects here once one is added to {tabName}
      </p>
    </div>
  );
};

export default EmptyTabMessage;
