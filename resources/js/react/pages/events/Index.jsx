import Text from '../../components/Text'
import EventCard from './EventCard'
import SectionUi from './SectionUI'

const Index = () => {
	return (
		<SectionUi className='max-w-[1200px] px-0 xl:px-0'>
			<header className='mx-auto max-w-[740px] px-8 pb-8 text-center md:pb-0 xl:px-24'>
				<Text.Title className='mb-4'>Espacios privados para cenas y eventos</Text.Title>
				<Text className='mb-5'>
					¿Quieres realizar un evento con nosotros? Permítanos organizar tu próximo evento en uno de nuestros
					restaurantes y espacios exclusivos para eventos, cada sucursal tiene una dinámica diferente que podemos
					personalizar para tu evento especial.
				</Text>
				<Text>¡Contáctanos para más información y cotizaciones!</Text>
			</header>

			<div className='border-t border-t-black md:border-none md:pt-20'>
				<EventCard />
			</div>
		</SectionUi>
	)
}

export default Index
