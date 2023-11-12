import useCart from "@/app/hooks/use-cart";
import Currency from "@/components/currency";
import IconButton from "@/components/ui/icon-button";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

type CartItemProps = {
  item: Product;
};
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const cart = useCart()
  const handleRemove = () => {
    cart.removeItem(item.id)
  }
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={item.images[0].url}
          alt={item.name}
          className="italic object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-5">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={handleRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid  sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text0lg font-semibold text-black">{item.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{item.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200">
              {item.size.name}
            </p>
          </div>
          <Currency value={item.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
