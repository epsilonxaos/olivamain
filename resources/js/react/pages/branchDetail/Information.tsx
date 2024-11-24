import VideoPlaceholder from '../../../../img/sucursal-video-placeholder.mp4'
import ImgPosterPlaceholder from '../../../../img/sucursal-video-poster-placeholder.jpg'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Information = ({ logo }) => {
	const { isMobile } = useResponsiveMediaQuery()

	return (
		<div className='border-y border-y-black bg-white'>
			<Container className='py-20'>
				<div className='mb-6 w-full items-center lg:mb-6 lg:flex'>
					<div className='mb-5 lg:mb-0 lg:w-[45%] lg:pr-20'>
						<img
							src={logo}
							alt='Logo sucursal'
							className='mx-auto mb-6 w-full max-w-[215px]'
						/>

						<div className='mb-6'>
							<Text>
								Se encuentra en una antigua casa del Centro Histórico de Mérida Yucatán. Ofrece un menú de alta cocina
								Italiana en un ambiente chic industrial.
							</Text>
							<Text className='mb-0'>
								Su lista extensa de más de 200 etiquetas de vinos ha sido seleccionada personalmente por el Chef para
								complementar el menú, el cual está constantemente reinventándose para ofrecer platillos nuevos y de
								temporada.
							</Text>
						</div>

						<Text.Title className='mb-1 tracking-[1.6px]'>Horarios</Text.Title>
						<Text className='mb-0'>
							Lunes a Miércoles 1:00 pm a 11:00 pm <br />
							Jueves a Sábados 1:00 pm a 12:00 am <br />
							Domingo 1:00 pm a 10:00 pm
						</Text>
					</div>
					<div className='lg:w-[55%]'>
						<div className='border border-black p-2 lg:p-4'>
							<video
								autoPlay
								loop
								muted
								className='mx-auto h-auto min-h-[300px] w-full object-cover lg:h-[590px] lg:max-w-[750px]'
								poster={ImgPosterPlaceholder}>
								<source
									src={VideoPlaceholder}
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>

				{isMobile && (
					<ul className='grid grid-cols-1 gap-5'>
						<li>
							<Button className='w-full bg-white'>Menú</Button>
						</li>
						<li>
							<Button className='w-full bg-white'>Reserva</Button>
						</li>
						<li>
							<Button className='w-full bg-white'>Ubicación</Button>
						</li>
					</ul>
				)}
			</Container>
		</div>
	)
}

export default Information
