import { client } from "./index.js";

export const getDocs = async () => {
    let query = "*[_type == 'post']"
    let post = await client.fetch(query)

    post = {
        title: post[0].title,
        text: post[0].body.map(body => body.children[0].text)
    }
    
    console.log('Post: ', post)
    return post
}
