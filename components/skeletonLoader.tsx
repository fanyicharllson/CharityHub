const SkeletonLoader = () => {
  return (
    <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg">
      <div className="w-full h-32 bg-gray-300 rounded-t-lg"></div>
      <div className="mt-4 w-3/4 h-6 bg-gray-300 rounded"></div>
      <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded"></div>
      <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded"></div>
      <div className="mt-2  w-[95%] h-4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
