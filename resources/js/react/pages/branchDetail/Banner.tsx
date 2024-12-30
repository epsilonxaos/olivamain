import { useTranslation } from 'react-i18next'

import type { TBannerDetails } from '../../types/branch'

import BannerSection from '../../components/BannerSection'
import Button from '../../components/buttons/Button'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Banner = ({ bgImg }: TBannerDetails) => {
	const { t } = useTranslation()
	const { isMobile } = useResponsiveMediaQuery()

	return (
		<BannerSection bgImg={bgImg}>
			{!isMobile && (
				<>
					<div className='absolute left-0 top-0 size-full bg-black bg-opacity-30' />
					<ul className='relative z-[1] grid max-w-max grid-cols-3 gap-2 md:gap-11'>
						<li>
							<Button className='w-full max-w-[115px]'>{t('sucursal.btn.menu')}</Button>
						</li>
						<li>
							<Button className='w-full max-w-[115px]'>{t('btn.reserva')}</Button>
						</li>
						<li>
							<Button className='w-full max-w-[115px]'>{t('sucursal.btn.ubicacion')}</Button>
						</li>
					</ul>
				</>
			)}
		</BannerSection>
	)
}

export default Banner
