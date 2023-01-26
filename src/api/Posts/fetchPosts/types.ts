import z from 'zod'

import { PostSchema, PostsArraySchema } from './schema'

type Post = z.infer<typeof PostSchema>

type PostsArray = z.infer<typeof PostsArraySchema>

export type { Post, PostsArray }
