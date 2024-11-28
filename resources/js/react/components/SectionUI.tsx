import type { ReactNode } from 'react'

import ImgBanner from '../../../img/grupos-eventos-banner.png'
import Banner from '../pages/events/Banner'
import { cn } from '../utils/cn'
import Container from './Container'

const SectionUi = ({ children, className }: { children: ReactNode; className?: string }) => {
	return (
		<>
			<Banner bgImg={ImgBanner} />

			<div className='md:border-b md:border-b-black'>
				<Container className={cn('max-w-[700px] pt-24 md:py-24', className)}>{children}</Container>
			</div>
		</>
	)
}

export default SectionUi
