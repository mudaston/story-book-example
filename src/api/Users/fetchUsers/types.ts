import z from 'zod'

import { UserSchema, UsersArraySchema } from './schema'

type User = z.infer<typeof UserSchema>

type UsersArray = z.infer<typeof UsersArraySchema>

interface Options {
	page?: number
	limit?: number
}

export type { User, UsersArray, Options }
