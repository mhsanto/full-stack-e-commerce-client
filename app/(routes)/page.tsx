import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BillboardPage from "@/components/billboard";
import ProductList from "@/components/product-list";
export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("653a2a0f434cd66d84362d7a");
  return (
    <div className="max-w-7xl mx-auto s">
      <div className="space-y-10 pb-10">
        <BillboardPage data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-9">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
