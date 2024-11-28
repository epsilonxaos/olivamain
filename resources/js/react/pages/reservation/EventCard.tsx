import { Link } from 'react-router-dom'

import ImgPlaceholder from '../../../../img/sucursal-banner-placeholder.png'
import ImgPlaceholder2 from '../../../../img/sucursal-logo-2-placeholder.svg'
import BorderCard from '../../components/BorderCard'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'

const EventCard = () => {
	return (
		<div className='grid grid-cols-1 md:gap-20'>
			<BorderCard
				classNameContainer='md:grid-cols-2'
				classNameContainerImg='md:col-span-1'
				classNameContainerText='md:col-span-1'
				img={ImgPlaceholder}>
				<div className='pt-6 md:p-6 md:text-center lg:p-10'>
					<img
						src={ImgPlaceholder2}
						alt='Enoteca'
						className='mx-auto mb-8 block w-full max-w-[160px]'
					/>
					<Text.Title>Centro Histórico de Mérida, Yuc.</Text.Title>
					<Text>
						Se encuentra en una <span className='italic'>antigua casa del Centro Histórico de Mérida Yucatán.</span>{' '}
						Ofrece un menú de alta cocina Italiana en un ambiente chic industrial. Su lista extensa de más de 200
						etiquetas de vinos ha sido seleccionada personalmente por el Chef para complementar el menú.
					</Text>

					<Link to={'/grupos-y-eventos/formulario'}>
						<Button className=''>Reserva</Button>
					</Link>
				</div>
			</BorderCard>
			<BorderCard
				classNameContainer='md:grid-cols-2'
				classNameContainerImg='md:col-span-1'
				classNameContainerText='md:col-span-1'
				img={ImgPlaceholder}>
				<div className='pt-6 md:p-6 md:text-center lg:p-10'>
					<img
						src={ImgPlaceholder2}
						alt='Enoteca'
						className='mx-auto mb-8 block w-full max-w-[160px]'
					/>
					<Text.Title>Centro Histórico de Mérida, Yuc.</Text.Title>
					<Text>
						Se encuentra en una <span className='italic'>antigua casa del Centro Histórico de Mérida Yucatán.</span>{' '}
						Ofrece un menú de alta cocina Italiana en un ambiente chic industrial. Su lista extensa de más de 200
						etiquetas de vinos ha sido seleccionada personalmente por el Chef para complementar el menú.
					</Text>

					<Link to={'/grupos-y-eventos/formulario'}>
						<Button className=''>Reserva</Button>
					</Link>
				</div>
			</BorderCard>
			<BorderCard
				classNameContainer='md:grid-cols-2'
				classNameContainerImg='md:col-span-1'
				classNameContainerText='md:col-span-1'
				img={ImgPlaceholder}>
				<div className='pt-6 md:p-6 md:text-center lg:p-10'>
					<img
						src={ImgPlaceholder2}
						alt='Enoteca'
						className='mx-auto mb-8 block w-full max-w-[160px]'
					/>
					<Text.Title>Centro Histórico de Mérida, Yuc.</Text.Title>
					<Text>
						Se encuentra en una <span className='italic'>antigua casa del Centro Histórico de Mérida Yucatán.</span>{' '}
						Ofrece un menú de alta cocina Italiana en un ambiente chic industrial. Su lista extensa de más de 200
						etiquetas de vinos ha sido seleccionada personalmente por el Chef para complementar el menú.
					</Text>

					<Link to={'/grupos-y-eventos/formulario'}>
						<Button className=''>Reserva</Button>
					</Link>
				</div>
			</BorderCard>
		</div>
	)
}

export default EventCard
