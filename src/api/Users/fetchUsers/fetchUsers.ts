import { UsersArraySchema } from './schema'

import type { UsersArray, Options } from './types'

const initialParams: Options = {
	page: 1,
	limit: 20,
}

const fetchUsers = async (
	options: Options = initialParams
): Promise<UsersArray> => {
	const headersList = {
		Accept: '*/*',
		'Content-Type': 'application/json',
	}

	const bodyContent = JSON.stringify({ ...options })

	const response = await fetch('http://26.236.196.127:3001/v2/user', {
		method: 'POST',
		body: bodyContent,
		headers: headersList,
	})

	const data = await response.json()

	if (!response.ok) {
		if ('error' in data) {
			throw new Error(data.error)
		}

		throw new Error(response.statusText)
	}

	UsersArraySchema.parse(data)

	return data
}

export default fetchUsers
