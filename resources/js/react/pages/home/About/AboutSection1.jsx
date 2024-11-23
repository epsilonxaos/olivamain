import ImgOliva from '../../../../../img/oliva-01.png'
import Container from '../../../components/Container'
import Text from '../../../components/Text'
import useResponsiveMediaQuery from '../../../hooks/useResponsiveMediaQuery'

const AboutSection1 = () => {
	return (
		<Container className='max-w-[1400px] overflow-hidden py-12 xl:py-16'>
			<div className='relative flex items-center justify-between'>
				<div className='max-w-[835px] py-12 pr-24 md:w-[calc(100%-176px)] md:pr-10 lg:p-0'>
					<Text.Title>Nosotros</Text.Title>
					<Text className='lg:mb-0'>
						Nuestros restaurantes se especializan en cocina Italiana, fresca, auténtica, y original.
					</Text>
					<Text>
						Todo es hecho a mano día con día en nuestra cocina usando recetas tradicionales y originales en las cuales
						combinamos los ingredientes importados de sus respectivas regiones de Italia con productos frescos de cada
						región a fin de ofrecerle una experiencia culinaria única.
					</Text>
				</div>

				<IlustrationContainer>
					<img
						className='w-[176px]'
						src={ImgOliva}
						alt='Oliva 01'
					/>
				</IlustrationContainer>
			</div>
		</Container>
	)
}

const IlustrationContainer = ({ children }) => {
	const { isMobile } = useResponsiveMediaQuery()

	if (isMobile) return <div className='absolute right-[-62px] top-0 rotate-[30deg]'>{children}</div>

	return children
}

export default AboutSection1
