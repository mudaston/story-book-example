import { UsersArraySchema } from './schema'

import type { UsersArray } from './types'

const fetchUsers = async (): Promise<UsersArray> => {
	const body = {
		start: 1,
		end: 20,
	}

	const response = await fetch('http://26.236.196.127:3000/v2/user', {
		body: JSON.stringify(body),
	})

	if (response.status !== 200) throw new Error(response.statusText)

	const users = await response.json()

	UsersArraySchema.parse(users)

	return users
}

export default fetchUsers
