import { useContext } from 'react'

import { APP_URL } from '../../constants/constants'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import { SucursalContext } from '../../contexts/SucursalContext'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Information = () => {
	const { isMobile } = useResponsiveMediaQuery()
	const su = useContext(SucursalContext)

	if (!su) return null

	return (
		<div className='border-y border-y-black bg-white'>
			<Container className='py-20'>
				<div className='mb-6 w-full items-center lg:mb-6 lg:flex'>
					<div className='mb-5 lg:mb-0 lg:w-[45%] lg:pr-20'>
						<img
							src={APP_URL + su.logo_2}
							alt='Logo sucursal'
							className='mx-auto mb-6 w-full max-w-[215px]'
						/>

						<div className='mb-6'>
							<Text
								parseHtml
								className='mb-0'>
								{su.descripcion}
							</Text>
						</div>

						<Text.Title className='mb-1 tracking-[1.6px]'>Horarios</Text.Title>
						<Text
							parseHtml
							className='mb-0'>
							{su.horario}
						</Text>
					</div>
					<div className='lg:w-[55%]'>
						<div className='border border-black p-2 lg:p-4'>
							{isMobile ? (
								<img
									src={APP_URL + su.cover}
									className='mx-auto h-auto min-h-[230px] w-full object-cover lg:h-[590px] lg:max-w-[750px]'
									alt=''
								/>
							) : (
								<video
									autoPlay
									loop
									muted
									className='mx-auto h-auto min-h-[300px] w-full object-cover lg:h-[590px] lg:max-w-[750px]'
									poster={APP_URL + su.cover}>
									<source
										src={APP_URL + su.video}
										type='video/mp4'
									/>
									Your browser does not support the video tag.
								</video>
							)}
						</div>
					</div>
				</div>

				{isMobile && (
					<ul className='grid grid-cols-1 gap-5'>
						{su.menu && (
							<li>
								<Button.Url
									href={APP_URL + su.menu}
									className='w-full bg-white'>
									Menú
								</Button.Url>
							</li>
						)}

						{/* // TODO: Implementar navegacion por ID */}
						{su.reserva_iframe && (
							<li>
								<Button className='w-full bg-white'>Reserva</Button>
							</li>
						)}

						{/* // TODO: Implementar navegacion por ID */}
						{su.maps && (
							<li>
								<Button className='w-full bg-white'>Ubicación</Button>
							</li>
						)}
					</ul>
				)}
			</Container>
		</div>
	)
}

export default Information
