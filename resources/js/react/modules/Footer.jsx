import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import ImgGrupoOliva from '../../../img/grupo-oliva.svg'
import ImgIsotipo from '../../../img/isotipo.svg'
import Container from '../components/Container'
import Text from '../components/Text'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='w-full bg-white'>
			<Container className='p-0'>
				<div className='border-b border-b-black py-12'>
					<img
						className='mx-auto w-56'
						src={ImgGrupoOliva}
						alt='Grupo oliva'
					/>
				</div>
			</Container>

			<Container className='py-12'>
				<div className='grid grid-cols-1 gap-8 text-center md:grid-cols-2 xl:flex xl:items-start xl:justify-between xl:text-left'>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>Contacto</Text.Title>
						<Text className='mb-0.5'>
							<a
								href='tel:+529999233081'
								className='mr-6 underline'>
								(999) 923 3081
							</a>{' '}
							Oliva Enoteca
						</Text>
						<Text className='mb-0.5'>
							<a
								href='tel:+529999233081'
								className='mr-6 underline'>
								(999) 923 3081
							</a>{' '}
							Oliva Enoteca
						</Text>
						<Text className='mb-0.5'>
							<a
								href='tel:+529999233081'
								className='mr-6 underline'>
								(999) 923 3081
							</a>{' '}
							Oliva Enoteca
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>Bolsa de trabajo</Text.Title>
						<Text className='mb-0.5 underline'>Formulario</Text>
						<Text className='mb-0.5'>
							<a href='mailto:hr@olivamerida.com'>hr@olivamerida.com</a>
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>Facturación</Text.Title>
						<Text className='mb-0.5 underline'>Factura en línea</Text>
						<Text className='mb-0.5'>
							<a href='mailto:factura@olivamerida.com'>factura@olivamerida.com</a>
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>Grupos y eventos</Text.Title>
						<Text className='mb-0.5 underline'>Formulario</Text>
						<Text className='mb-0.5'>
							<a href='mailto:info@olivamerida.com'>info@olivamerida.com</a>
						</Text>
					</div>
					<div className='col-span-1 md:col-span-2'>
						<img
							src={ImgIsotipo}
							alt='Oliva'
							className='mx-auto size-[95px] object-contain xl:ml-auto xl:mr-0'
						/>
					</div>
				</div>
			</Container>

			<div className='bg-black py-4 font-apercuPro text-xs uppercase tracking-[1.2px] text-white'>
				<Container>
					<ul className='mx-auto flex w-full flex-col items-center justify-between sm:flex-row'>
						<li>
							<Link to={'/politicas-privacidad'}>{t('politicasReservacion')} | Cookies</Link>
						</li>
						<li className='mb-1 sm:mb-0'>
							{t('madeBy')}{' '}
							<a
								href='https://www.madeby.partners/'
								target='_blank'
								rel='noopener noreferrer'>
								<span className='font-bold'>MadebyPartners®</span>
							</a>
						</li>
					</ul>
				</Container>
			</div>
		</footer>
	)
}

export default Footer
