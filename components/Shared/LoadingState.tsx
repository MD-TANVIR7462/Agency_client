export default function LoadingState() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="bg-gray-900/50 rounded-xl p-4 md:p-8 border border-gray-800/50">
        <div className="h-8 bg-gray-800 rounded-lg w-1/4 mb-4"></div>
        <div className="flex gap-4">
          <div className="h-6 bg-gray-800 rounded-full w-32"></div>
          <div className="h-6 bg-gray-800 rounded-full w-32"></div>
          <div className="h-6 bg-gray-800 rounded-full w-32"></div>
        </div>
      </div>
      <div className="bg-gray-900/50 rounded-xl p-4 md:p-8 border border-gray-800/50">
        <div className="h-8 bg-gray-800 rounded-lg w-1/4 mb-6"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}