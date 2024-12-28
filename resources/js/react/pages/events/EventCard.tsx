import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import ImgPlaceholder from '../../../../img/sucursal-banner-placeholder.png'
import BorderCard from '../../components/BorderCard'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'

const EventCard = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { sucursals } = state

	return (
		<div className='grid grid-cols-1 md:gap-20'>
			{sucursals
				.filter(su => su.activo_eventos)
				.map(su => (
					<BorderCard
						key={'event-car-' + su.slug}
						img={ImgPlaceholder}>
						<div className='flex h-full items-center justify-center pt-6 md:p-6 md:text-center lg:p-10'>
							<div className='w-full'>
								<Text.Title>{su[language].titulo_eventos}</Text.Title>
								<Text parseHtml>{su[language].descripcion_eventos}</Text>

								<Link to={'/grupos-y-eventos/formulario'}>
									<Button className='w-full bg-black text-white'>Cotizar</Button>
								</Link>
							</div>
						</div>
					</BorderCard>
				))}
		</div>
	)
}

export default EventCard
