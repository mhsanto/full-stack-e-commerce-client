import { Product } from "@/types";
import NoProductsFound from "./ui/no-products";

type ProductListProps = {
  title: string;
  products: Product[];
};
const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <div className="space-y-4">
      <div className="font-bold text-3xl">{title}</div>
      {products.length === 0 && <NoProductsFound />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
