import { Product } from "@/types";

type ProductListProps = {
  title: string;
  products: Product[];
};
const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return <div className="space-y-4">{title}</div>;
};

export default ProductList;
