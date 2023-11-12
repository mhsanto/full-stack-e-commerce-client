"use client";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./ui/button";
import useCart from "@/app/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="ml-auto items-center gap-x-4">
      <Button
        className="flex gap-2 items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-xs text-white font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
