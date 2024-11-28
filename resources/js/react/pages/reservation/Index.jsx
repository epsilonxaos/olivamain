import SectionUi from '../../components/SectionUI'
import Text from '../../components/Text'
import EventCard from './EventCard'

const Index = () => {
	return (
		<div className='bg-crema2'>
			<SectionUi className='max-w-[1200px] px-0 xl:px-0'>
				<header className='mx-auto max-w-[740px] px-8 pb-8 text-center md:pb-0 xl:px-24'>
					<Text.Title className='mb-4'>¿En qué sucursal desea reservar?</Text.Title>
					<Text className='mb-5'>
						Nuestros restaurantes se especializan en cocina Italiana, fresca, autentica, y original. Todo es hecho a
						mano dîa con día en nuestra cocina usando recetas tradicionales y originales.
					</Text>
				</header>

				<div className='border-t border-t-black md:border-none md:pt-20'>
					<EventCard />
				</div>
			</SectionUi>
		</div>
	)
}

export default Index
