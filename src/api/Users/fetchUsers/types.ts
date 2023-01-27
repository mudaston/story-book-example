import z from 'zod'

import { UserSchema, UsersArraySchema } from './schema'

export type User = z.infer<typeof UserSchema>

export type UsersArray = z.infer<typeof UsersArraySchema>
