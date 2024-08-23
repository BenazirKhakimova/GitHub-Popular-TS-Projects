'use client'


import { Pagination } from '@/components/Pagination'
import { RepositoriesList } from '@/components/RepositoriesList'
import { PopularTSRepoAPI } from '@/service/repoApi/api'
import { Repository } from '@/service/repoApi/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const page = searchParams.get('page') || '1'
	const [currentPage, setCurrentPage] = useState<number>(+page)
	const [repositories, setRepositories] = useState<Repository[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchRepositories = async () => {
			try {
				const data = await PopularTSRepoAPI.getPopularTSRepo(currentPage)
				setRepositories(data.data.items)
			} catch (error) {
				setRepositories([])
			} finally {
				setLoading(false)
			}
		}

		fetchRepositories()
	}, [currentPage])

	useEffect(() => {
		router.push(`?page=${currentPage}`)

		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [repositories, router])

	return (
		<main className='flex min-h-screen flex-col items-center p-6 sm:p-24'>
			<RepositoriesList repositories={repositories} loading={loading} />

			{repositories.length > 0 && !loading && (
				<Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
			)}
		</main>
	)
}
