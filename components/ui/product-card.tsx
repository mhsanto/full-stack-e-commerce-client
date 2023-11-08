"use client";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/app/hooks/use-preview-modal";
type ProductCardProps = {
  product: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  };
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-4 space-y-4"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product?.images?.[0]?.url}
          alt={product.name}
          className="aspect-square object-cover rounded-md"
          fill
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={<Expand size={20} />} onClick={onPreview} />
            <IconButton icon={<ShoppingCart size={20} />} onClick={() => {}} />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
        <div className="flex items-center justify-between">
          <Currency value={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
