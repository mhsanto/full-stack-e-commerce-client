import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_STORE_URL_PUBLIC}/billboards`;
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};
export default getBillboard;
