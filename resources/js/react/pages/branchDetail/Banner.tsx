import type { TBannerDetails } from '../../types/branch'

import BannerSection from '../../components/BannerSection'
import Container from '../../components/Container'
import Button from '../../components/buttons/Button'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Banner = ({ bgImg }: TBannerDetails) => {
	const { isMobile } = useResponsiveMediaQuery()

	return (
		<BannerSection bgImg={bgImg}>
			{!isMobile && (
				<>
					<div className='absolute left-0 top-0 size-full bg-black bg-opacity-30' />
					<ul className='relative z-[1] grid max-w-max grid-cols-3 gap-2 md:gap-11'>
						<li>
							<Button className='w-full max-w-[115px]'>Menú</Button>
						</li>
						<li>
							<Button className='w-full max-w-[115px]'>Reserva</Button>
						</li>
						<li>
							<Button className='w-full max-w-[115px]'>Ubicación</Button>
						</li>
					</ul>
				</>
			)}
		</BannerSection>
	)
}

export default Banner
