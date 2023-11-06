import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import BillboardPage from "@/components/billboard";

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
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <BillboardPage data={category.billboard} />
      </div>
    </div>
  );
};

export default CategoryPage;
