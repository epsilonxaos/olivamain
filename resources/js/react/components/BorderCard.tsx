import type { ReactNode } from 'react'

import useResponsiveMediaQuery from '../hooks/useResponsiveMediaQuery'
import { cn } from '../utils/cn'

const BorderCard = ({ img, children }: { img: string; children: ReactNode }) => {
	const { isMobile } = useResponsiveMediaQuery()

	return (
		<div className='border-b border-b-black px-8 py-8 md:border-none xl:px-24'>
			<div className='mx-auto max-w-[1024px] md:border md:border-black'>
				<div className='grid grid-cols-1 md:grid-cols-5'>
					<div
						className={cn(
							isMobile ? 'border border-black' : 'md:border-r md:border-r-black',
							'md:border-l-none col-span-1 p-2 md:col-span-3 md:p-4'
						)}>
						<img
							className='h-full min-h-[310px] w-full object-cover'
							src={img}
							alt='Imagen'
						/>
					</div>
					<div className='col-span-1 md:col-span-2'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default BorderCard
