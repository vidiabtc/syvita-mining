import { client } from "./index.js";

export const getCats = async () => {
    let query = "*[_type == 'category']{ title }"
    let categories = await client.fetch(query)
    console.log('Categories: ', categories)
    return categories
}