import { Size } from "@/types";

const url = `${process.env.NEXT_PUBLIC_STORE_URL_PUBLIC}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(url);
  return res.json();
};
export default getSizes;
