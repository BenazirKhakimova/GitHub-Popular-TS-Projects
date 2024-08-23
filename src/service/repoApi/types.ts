export interface Repository {
	id: number
	name: string
	description: string
	stargazers_count: number
	html_url: string
	owner: {
		avatar_url: string
	}
	full_name: string
	language: string
}

export interface RepositorySearchResponse {
	items: Repository[]
}
