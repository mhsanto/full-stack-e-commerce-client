import { Product } from "@/types";
import Currency from "../currency";
import Button from "../ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/app/hooks/use-cart";

type InfoProps = {
  data: Product;
};
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddItemToCart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl  text-gray-900">
          <Currency value={data.price} />
        </p>
        <p className="text-sm text-gray-500">In stock</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-x-4">
          {data?.size?.name && (
            <>
              <h3 className="font-semibold text-black">Size:</h3>
              <div>{data?.size?.name}</div>
            </>
          )}
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button onClick={onAddItemToCart} className="flex items-center gap-2.5">
            Add To Cart <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
