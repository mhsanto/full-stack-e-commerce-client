"use client";
import { useRouter } from "next/navigation";

const CategoryPage = () => {
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen">
      <button
        onClick={() => router.push("/")}
        className="py-2 px-4 bg-black text-white "
      >
        Go Home
      </button>
    </div>
  );
};

export default CategoryPage;
