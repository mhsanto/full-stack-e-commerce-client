import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_STORE_URL_Public}/products`;
type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};
const getProducts = async (query: Query) => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(URL);
  return await res.json();
};
export default getProducts;
