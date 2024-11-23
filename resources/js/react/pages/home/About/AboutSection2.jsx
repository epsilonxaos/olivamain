import ImgOliva from '../../../../../img/oliva-copa.png'
import Container from '../../../components/Container'
import Text from '../../../components/Text'

const AboutSection2 = () => {
	return (
		<Container className='max-w-[1400px] overflow-hidden py-12 xl:py-16'>
			<div className='relative flex items-center justify-between'>
				<div className='max-w-[835px] py-12 pr-14 md:w-[calc(100%-90px)] md:pr-16 lg:p-0'>
					<Text className='lg:mb-0'>
						Las listas de vinos de cada restaurante tienen una variedad de etiquetas de todo el mundo, y han sido
						seleccionadas personalmente por nuestro Chef para complementar perfectamente nuestro menú.
					</Text>
				</div>

				<img
					className='w-[75px] md:w-[90px]'
					src={ImgOliva}
					alt='Oliva Copa de vino'
				/>
			</div>
		</Container>
	)
}

export default AboutSection2
