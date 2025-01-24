import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../constants/constants'

import BorderCard from '../../components/BorderCard'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'

const EventCard = () => {
	const { t, i18n } = useTranslation()
	const { state } = useContext(AppContext)
	const { sucursals } = state

	return (
		<div className='grid grid-cols-1 md:gap-20'>
			{sucursals
				.filter(su => !!su.reserva_iframe && !!su.activo_reservas)
				.map(su => (
					<BorderCard
						key={'reserva-card-' + su.slug}
						classNameContainer='md:grid-cols-2'
						classNameContainerImg='md:col-span-1'
						classNameContainerText='md:col-span-1'
						img={APP_URL + su.cover_reservas}>
						<div className='pt-6 md:p-6 md:text-center lg:p-10'>
							<img
								src={APP_URL + su.logo}
								alt='Enoteca'
								className='mx-auto mb-8 block w-full max-w-[160px]'
							/>
							<Text.Title className='md:tracking-normal'>{su[i18n.language]?.titulo_reservas}</Text.Title>
							<Text parseHtml>{su[i18n.language].descripcion_reservas}</Text>

							<Button.Navigation
								to={'/sucursal/' + su.slug + '#reservacion'}
								className='mx-auto bg-black text-white'>
								{t('btn.reserva')}
							</Button.Navigation>
						</div>
					</BorderCard>
				))}
		</div>
	)
}

export default EventCard
