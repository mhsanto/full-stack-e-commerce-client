"use client";
import useCart from "@/app/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import { useState, useEffect } from "react";
const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="px-4 py-16 sm:px-6 lg:px-8">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <p className="text-neutral-500">Your cart is empty.</p>
            )}
            <ul>
              {cart.items.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
