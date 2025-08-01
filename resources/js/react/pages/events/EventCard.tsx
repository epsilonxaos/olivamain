import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../constants/constants'

import ImgPlaceholder from '../../../../img/sucursal-banner-placeholder.png'
import BorderCard from '../../components/BorderCard'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'

const EventCard = () => {
	const { i18n, t } = useTranslation()
	const { language } = i18n
	const { state, dispatch } = useContext(AppContext)
	const { sucursals } = state

	return (
		<div className='grid grid-cols-1 md:gap-20'>
			{sucursals
				.filter(su => su.activo_eventos)
				.map(su => (
					<BorderCard
						key={'event-car-' + su.slug}
						img={APP_URL + su.cover_eventos}>
						<div className='flex h-full items-center justify-center pt-6 md:p-6 md:text-center lg:p-10'>
							<div className='w-full'>
								<Text.Title>{su[language].titulo_eventos}</Text.Title>
								<Text parseHtml>{su[language].descripcion_eventos}</Text>

								<Button.Navigation
									to={'/grupos-y-eventos/formulario'}
									onClick={() => dispatch({ formEventReference: su.sucursal })}
									className='w-full bg-black text-white'>
									{t('btn.cotizar')}
								</Button.Navigation>
							</div>
						</div>
					</BorderCard>
				))}
		</div>
	)
}

export default EventCard
