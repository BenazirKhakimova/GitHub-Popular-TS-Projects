import { IconStar } from '@/assets/icons/IconStar'
import { Repository } from '@/service/repoApi/types'
import Image from 'next/image'
import { FC } from 'react'

interface Repositories {
	item: Repository
}

export const Repositories: FC<Repositories> = ({ item }) => {
	return (
		<div
			key={item.id}
			className='w-full lg:w-[80%] bg-[rgb(22,27,34)] border border-solid border-[rgb(48,54,61)] p-4 rounded-md '>
			<a
				href={item.html_url}
				target='_blank'
				rel='noopener noreferrer'
				className='flex flex-col gap-2 overflow-hidden'>
				<div className='flex items-center gap-3'>
					<Image
						src={item.owner.avatar_url}
						alt={item.full_name}
						width={50}
						height={50}
						className='rounded-full'
					/>
					<h2>{item.full_name}</h2>
				</div>
				<p>{item.description}</p>

				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-1'>
						<div className='w-[10px] h-[10px] bg-blue-500 rounded-full '></div>
						<p>{item.language}</p>
					</div>
					<div className='flex items-center gap-1'>
						<IconStar className='w-4 h-4' />
						<p>{item.stargazers_count} </p>
					</div>
				</div>
			</a>
		</div>
	)
}
