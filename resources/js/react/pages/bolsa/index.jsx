import ImgBg from '../../../../img/bg-bolsa-placeholder.png'
import ImgSello from '../../../../img/sello-bolsa.png'
import Container from '../../components/Container'
import Text from '../../components/Text'
import FormSubmit from './FormSubmit'

const Index = () => {
	return (
		<div className='border-b border-b-black lg:bg-white'>
			<Container className='px-0 lg:pl-0 xl:pl-0'>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<figure className='col-span-1'>
						<img
							src={ImgBg}
							alt='bolsa de trabajo'
							className='size-full max-h-[600px] min-h-[400px] object-cover object-center md:min-h-[550px] lg:max-h-none lg:min-h-[730px]'
						/>
					</figure>
					<div className='col-span-1 px-8 py-20 text-center lg:px-7'>
						{/* <FadeInUpDiv> */}
						<div className='mx-auto w-full max-w-[430px]'>
							<img
								src={ImgSello}
								alt='Sello'
								className='mx-auto mb-10 size-[120px] lg:size-[160px]'
							/>

							<Text.Title className='mb-5 tracking-[2.5px]'>ÚNETE A NUESTRO EQUIPO DE TRABAJO</Text.Title>
							<Text className='mb-10 text-center'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
								massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							</Text>

							<FormSubmit />
						</div>

						{/* </FadeInUpDiv> */}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Index
