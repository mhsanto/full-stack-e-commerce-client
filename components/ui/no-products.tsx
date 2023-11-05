"use client";
const NoProductsFound = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full h-full">
      <p className="font-medium text-xl">No Products Found</p>
      <button className=" bg-slate-200 px-4 rounded-sm" onClick={handleReload}>
        Reload Page
      </button>
    </div>
  );
};

export default NoProductsFound;
