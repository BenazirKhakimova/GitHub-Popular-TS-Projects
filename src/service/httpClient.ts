import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const httpClient = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

httpClient.interceptors.request.use(
	config => {
		const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN

		if (token) {
			config.headers['Authorization'] = `token ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
