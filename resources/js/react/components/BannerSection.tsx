import type { TBannerSection } from '../types/main'

import { cn } from '../utils/cn'
import Container from './Container'

const BannerSection = ({ bgImg, children, className }: TBannerSection) => {
	return (
		<Container
			className={cn(
				'relative flex min-h-[315px] w-full max-w-none items-center justify-center bg-cover bg-center md:min-h-[460px]',
				className
			)}
			style={{ backgroundImage: `url(${bgImg})` }}>
			{children && children}
		</Container>
	)
}

export default BannerSection
