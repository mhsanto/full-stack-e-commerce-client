const url = `${process.env.NEXT_PUBLIC_STORE_URL_Public}/billboards`;
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${url}/${id}`);
  return await res.json();
};
export default getBillboard;
