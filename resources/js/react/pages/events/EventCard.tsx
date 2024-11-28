import { Link } from 'react-router-dom'

import ImgPlaceholder from '../../../../img/sucursal-banner-placeholder.png'
import BorderCard from '../../components/BorderCard'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'

const EventCard = () => {
	return (
		<div className='grid grid-cols-1 md:gap-20'>
			<BorderCard img={ImgPlaceholder}>
				<div className='pt-6 md:p-6 md:text-center lg:p-10'>
					<Text.Title>Oliva Enoteca</Text.Title>
					<Text>
						Se encuentra en una antigua casa del Centro Histórico de Mérida Yucatán. Ofrece un menú de alta cocina
						Italiana en un ambiente chic industrial. Su lista extensa de más de 200 etiquetas de vinos ha sido
						seleccionada personalmente por el Chef para complementar el menú.
					</Text>

					<Link to={'/grupos-y-eventos/formulario'}>
						<Button className='w-full bg-black text-white'>Cotizar</Button>
					</Link>
				</div>
			</BorderCard>
			<BorderCard img={ImgPlaceholder}>
				<div className='p-6 text-center lg:p-10'>
					<Text.Title>Oliva Enoteca</Text.Title>
					<Text>
						Se encuentra en una antigua casa del Centro Histórico de Mérida Yucatán. Ofrece un menú de alta cocina
						Italiana en un ambiente chic industrial. Su lista extensa de más de 200 etiquetas de vinos ha sido
						seleccionada personalmente por el Chef para complementar el menú.
					</Text>

					<Button className='mb-0 w-full bg-black text-white'>Cotizar</Button>
				</div>
			</BorderCard>
			<BorderCard img={ImgPlaceholder}>
				<div className='p-6 text-center lg:p-10'>
					<Text.Title>Oliva Enoteca</Text.Title>
					<Text>
						Se encuentra en una antigua casa del Centro Histórico de Mérida Yucatán. Ofrece un menú de alta cocina
						Italiana en un ambiente chic industrial. Su lista extensa de más de 200 etiquetas de vinos ha sido
						seleccionada personalmente por el Chef para complementar el menú.
					</Text>

					<Button className='w-full bg-black text-white'>Cotizar</Button>
				</div>
			</BorderCard>
		</div>
	)
}

export default EventCard
