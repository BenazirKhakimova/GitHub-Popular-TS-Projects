'use client'

import { Dispatch, FC, SetStateAction } from 'react'

interface PaginationProps {
	setCurrentPage: Dispatch<SetStateAction<number>>
	currentPage: number
}

export const Pagination: FC<PaginationProps> = ({
	setCurrentPage,
	currentPage,
}) => {
	return (
		<div className='flex justify-between mt-4 gap-3'>
			<button
				onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : 1))}
				className='px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400'
				disabled={currentPage === 1}>
				Предыдущая страница
			</button>
			<button
				className='px-4 py-2 bg-blue-500 text-white rounded'
				onClick={() => setCurrentPage(prev => prev + 1)}>
				Следующая страница
			</button>
		</div>
	)
}
