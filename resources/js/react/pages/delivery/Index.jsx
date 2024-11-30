import ImgBgPlaceholder from '../../../../img/bg-bolsa-placeholder.png'
import ImgEnCasa from '../../../../img/en-casa.svg'
import ImgLogoSucursal from '../../../../img/sucursal-logo-2-placeholder.svg'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'

const Index = () => {
	return (
		<>
			<div className='border-b border-b-black bg-grisClaro'>
				<Container className='max-w-[700px] py-20 text-center'>
					<img
						className='mx-auto mb-10 w-full max-w-[170px]'
						src={ImgEnCasa}
						alt='En casa'
					/>
					<Text.Title className='mb-2'>¿En qué sucursal desea Ordenar?</Text.Title>
					<Text>
						Nuestros restaurantes se especializan en cocina Italiana, fresca, autentica, y original.  Todo es hecho a
						mano dîa con día en nuestra cocina usando recetas tradicionales y originales.
					</Text>
				</Container>
			</div>

			<div className='bg-white lg:border-b lg:border-b-black'>
				<Container className='grid grid-cols-1 gap-6 px-0 lg:grid-cols-3 lg:py-20 xl:gap-10'>
					<Card />
					<Card />
					<Card />
				</Container>
			</div>
		</>
	)
}

const Card = () => {
	return (
		<div className='col-span-1 border-b border-b-black py-20 lg:border-none lg:py-0'>
			<img
				src={ImgLogoSucursal}
				alt=''
				className='mx-auto mb-6 w-full max-w-[130px]'
			/>

			<img
				src={ImgBgPlaceholder}
				alt=''
				className='mb-6 block h-[380px] w-full object-cover'
			/>

			<Button className='mx-auto block w-full max-w-[260px] bg-black text-white'>Ordena ahora</Button>
		</div>
	)
}

export default Index
