import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;
const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="py-4">
      <div className="flex  items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl uppercase">Gadget Hunt</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;
