import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_STORE_URL_PUBLIC}/products`;
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};
export default getProduct;
