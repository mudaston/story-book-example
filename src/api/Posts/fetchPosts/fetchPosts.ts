import { PostsArraySchema } from './schema'

import type { PostsArray } from './types'

const fetchPosts = async (): Promise<PostsArray> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (res.status !== 200) throw new Error(res.statusText)

	const data: PostsArray = await res.json()

	PostsArraySchema.parse(data)

	return data
}

export default fetchPosts
