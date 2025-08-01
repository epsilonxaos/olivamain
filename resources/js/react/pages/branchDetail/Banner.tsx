import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../constants/constants'
import type { TBannerDetails } from '../../types/branch'

import BannerSection from '../../components/BannerSection'
import Button from '../../components/buttons/Button'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Banner = ({ bgImg, menu }: TBannerDetails) => {
	const { t } = useTranslation()
	const { isMobile } = useResponsiveMediaQuery()

	return (
		<BannerSection bgImg={bgImg}>
			{!isMobile && (
				<>
					<div className='absolute left-0 top-0 size-full bg-black bg-opacity-30' />
					<ul className='relative z-[1] grid max-w-max grid-cols-3 gap-2 md:gap-11'>
						{menu && (
							<li>
								<Button.Url
									href={APP_URL + menu}
									className='w-full max-w-[115px]'>
									{t('sucursal.btn.menu')}
								</Button.Url>
							</li>
						)}
						<li>
							<Button.Navigation
								to='#reservacion'
								className='w-full max-w-[115px]'>
								{t('btn.reserva')}
							</Button.Navigation>
						</li>
						<li>
							<Button.Navigation
								to='#ubicacion'
								className='w-full max-w-[115px]'>
								{t('sucursal.btn.ubicacion')}
							</Button.Navigation>
						</li>
					</ul>
				</>
			)}
		</BannerSection>
	)
}

export default Banner
