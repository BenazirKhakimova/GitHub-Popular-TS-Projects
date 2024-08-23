import { httpClient } from '../httpClient'
import { RepositorySearchResponse } from './types'

export const PopularTSRepoAPI = {
	getPopularTSRepo: (page: number) => {
		return httpClient.get<RepositorySearchResponse>('/search/repositories', {
			params: {
				q: 'language:typescript',
				sort: 'stars',
				order: 'desc',
				page: page,
			},
		})
	},
}
