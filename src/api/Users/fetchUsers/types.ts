import z from 'zod'

import UserSchema from './schema'

export type User = z.infer<typeof UserSchema>
