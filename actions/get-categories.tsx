const url =`${process.env.NEXT_PUBLIC_STORE_URL_PUBLIC}/categories`
const getCategories = async () => {
    const res = await fetch(url)
    return  res.json()
}
export default getCategories
