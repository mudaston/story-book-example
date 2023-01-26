import z from 'zod'

const PostSchema = z
	.object({
		userId: z.number(),
		id: z.number().describe('Identificator of post'),
		title: z.string(),
		body: z.string(),
	})
	.strict()

const PostsArraySchema = z.array(PostSchema)

export { PostSchema, PostsArraySchema }
