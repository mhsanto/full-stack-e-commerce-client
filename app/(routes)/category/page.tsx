"use client";
import { useRouter } from "next/navigation";

const CategoryPage = () => {
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen" onClick={() => router.push("/")}>
      Go Home
    </div>
  );
};

export default CategoryPage;
