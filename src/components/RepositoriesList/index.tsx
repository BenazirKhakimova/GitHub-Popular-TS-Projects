import { Repository } from '@/service/repoApi/types'
import { FC } from 'react'
import { Repositories } from '../Repositories'

interface RepositoriesListProps {
	repositories: Repository[]
	loading: boolean
}

export const RepositoriesList: FC<RepositoriesListProps> = ({
	repositories,
	loading,
}) => {
	return (
		<>
			<h1 className='mb-6 font-semibold text-2xl'>
				Самые популярные (по звездам) TS проекты на Github
			</h1>
			{loading ? (
				<p>Загрузка проектов...</p>
			) : (
				<div className='flex flex-col gap-3 items-center my-0'>
					{repositories.length > 0 ? (
						repositories.map(item => <Repositories item={item} />)
					) : (
						<p>Популярные TypeScript репозитории не найдены.</p>
					)}
				</div>
			)}
		</>
	)
}
