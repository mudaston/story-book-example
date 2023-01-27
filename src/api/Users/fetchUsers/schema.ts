import z from 'zod'

const UserSchema = z
	.object({
		id: z.number(),
		username: z.string(),
		profilecolor: z.string(),
		password: z.string(),
	})
	.strict()

const UsersArraySchema = z.array(UserSchema)

export { UserSchema, UsersArraySchema }
