import parse from 'html-react-parser'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FaLocationDot } from 'react-icons/fa6'

import Container from '../../components/Container'
import Text from '../../components/Text'
import { SucursalContext } from '../../contexts/SucursalContext'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Location = () => {
	const { isMobile, isTablet } = useResponsiveMediaQuery()
	const su = useContext(SucursalContext)

	return (
		<div
			className='border-b border-b-black bg-white'
			id='ubicacion'>
			<Container className='py-12 lg:py-28'>
				<div className='mb-6 w-full items-center lg:mb-6 lg:flex'>
					<div className='mb-5 hidden lg:mb-0 lg:block lg:w-[40%] lg:pr-10'>
						<LocationDetails />
					</div>
					<div className='lg:w-[60%]'>{su?.maps && <div className='min-h-[400px] w-full bg-crema2'>{parse(su?.maps)}</div>}</div>
				</div>

				{(isMobile || isTablet) && <LocationDetails />}
			</Container>
		</div>
	)
}

const LocationDetails = () => {
	const su = useContext(SucursalContext)
	const { t } = useTranslation()

	return (
		<div>
			<Text.Title className='mb-2 tracking-[1.6px]'>{t('sucursal.btn.ubicacion')}</Text.Title>
			<Text className='mb-2'>{su?.direccion}</Text>

			<div className='flex items-center justify-start'>
				<FaLocationDot
					size={20}
					className='mr-2'
				/>
				<Text className='mb-0 italic'>{su?.ubicacion}</Text>
			</div>
		</div>
	)
}

export default Location
