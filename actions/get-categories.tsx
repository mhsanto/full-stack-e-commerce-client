const url =`${process.env.NEXT_PUBLIC_STORE_URL_Public}/categories`
const getCategories = async () => {
    const res = await fetch(url)
    return await res.json()
}
export default getCategories
