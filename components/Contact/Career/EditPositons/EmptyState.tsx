import { FileQuestion } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <FileQuestion className="w-16 h-16 text-purple-400 mb-4 animate-bounce" />
      <h3 className="text-xl font-semibold text-white mb-2">
        No Open Positions
      </h3>
      <p className="text-gray-400 max-w-md">
        There are currently no open positions. Click the "Add Position" button
        above to create a new job posting.
      </p>
    </div>
  );
};
export default EmptyState;
