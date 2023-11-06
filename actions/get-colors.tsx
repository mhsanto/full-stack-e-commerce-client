import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_STORE_URL_PUBLIC}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(url);
  return res.json();
};
export default getColors;
