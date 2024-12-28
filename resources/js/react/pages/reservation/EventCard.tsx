import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { APP_URL } from '../../constants/constants'

import ImgPlaceholder from '../../../../img/sucursal-banner-placeholder.png'
import ImgPlaceholder2 from '../../../../img/sucursal-logo-2-placeholder.svg'
import BorderCard from '../../components/BorderCard'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'

const EventCard = () => {
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
								src={APP_URL + su.logo_2}
								alt='Enoteca'
								className='mx-auto mb-8 block w-full max-w-[160px]'
							/>
							<Text.Title>{su.ubicacion}</Text.Title>
							<Text parseHtml>{su.descripcion_reservas}</Text>

							<Link to={'/grupos-y-eventos/formulario'}>
								<Button className=''>Reserva</Button>
							</Link>
						</div>
					</BorderCard>
				))}
		</div>
	)
}

export default EventCard
