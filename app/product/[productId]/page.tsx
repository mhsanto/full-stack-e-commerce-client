import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";

type ProductPageProps = {
  params: {
    productId: string;
  };
};
const ProductPage: React.FC<ProductPageProps> = async ({
  params: { productId },
}) => {
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category?.id,
  });
  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="px-4 py-10 sm:px-7 lg:px-8">
          {/* Gallery */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product} /> 
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" products={suggestedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
