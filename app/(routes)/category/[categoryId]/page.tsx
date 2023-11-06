import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import BillboardPage from "@/components/billboard";
import Filter from "./components/filter";
import NoProductsFound from "@/components/ui/no-products";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filter";

export const revalidate = 0;
type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params: { categoryId },
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2">
        <BillboardPage data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          {/* add mobile filters */}
          <MobileFilters sizes={sizes} colors={colors}/>
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />
              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoProductsFound />}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
