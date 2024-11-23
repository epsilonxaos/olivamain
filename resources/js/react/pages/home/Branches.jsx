import { FaLocationDot } from 'react-icons/fa6'

import ImgPasta from '../../../../img/oliva-pasta.png'
import ImgLogoPlaceholder from '../../../../img/sucursal-logo-placeholder.svg'
import VideoPlaceholder from '../../../../img/sucursal-video-placeholder.mp4'
import ImgPosterPlaceholder from '../../../../img/sucursal-video-poster-placeholder.jpg'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Branches = () => {
	return (
		<section className='bg-crema2'>
			<header className='relative border-y border-y-black py-16 text-center'>
				<Text.Title>Nuestras sucursales</Text.Title>

				<img
					className='absolute -bottom-16 left-0 right-0 mx-auto hidden w-[40px] lg:block'
					src={ImgPasta}
					alt='Oliva pasta'
				/>
			</header>

			<main>
				<BranchSection />
			</main>
		</section>
	)
}

const BranchSection = () => {
	const { isDesktop } = useResponsiveMediaQuery()

	return (
		<Container className='border-b border-b-black py-40'>
			<div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 2xl:gap-24'>
				<div>
					<div className='flex items-center justify-center lg:mb-6 lg:justify-start'>
						<img
							src={ImgLogoPlaceholder}
							alt='Logo'
							className='size-[90px] lg:size-[130px] xl:size-[190px]'
						/>

						<main className='pl-6 xl:pl-10'>
							<Text.Title className='mb-1 tracking-[1.6px]'>Horarios</Text.Title>
							<Text className='mb-0'>
								Lunes a Miércoles 1:00 pm a 11:00 pm <br />
								Jueves a Sábados 1:00 pm a 12:00 am <br />
								Domingo 1:00 pm a 10:00 pm
							</Text>
						</main>
					</div>

					<div className='hidden border-y border-y-black py-8 lg:grid lg:grid-cols-4 lg:gap-5'>
						<Button className='px-2'>Delivery</Button>
						<Button className='px-2'>Reserva</Button>
						<Button className='px-2'>Menú</Button>
						<Button className='px-2'>Conoce más</Button>
					</div>

					<Location
						content='Ubicado en el Malecón de La Paz Baja California Sur.'
						className='hidden items-center py-8 lg:flex'
					/>
				</div>

				<div className='border border-black p-2 lg:p-4'>
					<video
						autoPlay
						loop
						muted
						className='mx-auto h-auto min-h-[230px] w-full object-cover lg:h-[590px] lg:max-w-[750px]'
						poster={ImgPosterPlaceholder}>
						<source
							src={VideoPlaceholder}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>

				{!isDesktop && (
					<div className='lg:hidden'>
						<Location
							content='Ubicado en el Malecón de La Paz Baja California Sur.'
							className='mb-4 flex items-center'
						/>
						<Button className='w-full px-2'>Conoce más</Button>
					</div>
				)}
			</div>
		</Container>
	)
}

const Location = ({ content = '', className = '' }) => {
	return (
		<div className={className}>
			<FaLocationDot
				size={26}
				className='mr-2'
			/>
			<Text className='mb-0 italic'>{content}</Text>
		</div>
	)
}

export default Branches
