import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import ImgGrupoOliva from '../../../img/grupo-oliva.svg'
import ImgIsotipo from '../../../img/isotipo.svg'
import Container from '../components/Container'
import Text from '../components/Text'
import AppContext from '../contexts/AppContext'

function formatPhoneNumber(phoneNumber) {
	phoneNumber = phoneNumber.toString()
	if (phoneNumber.length !== 10) {
		return phoneNumber
	}
	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 10)}`
}

const Footer = () => {
	const { t } = useTranslation()
	const { state } = useContext(AppContext)
	const { website, sucursals } = state

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
						<Text.Title className='mb-5'>{t('contacto')}</Text.Title>
						{sucursals
							.filter(({ phone }) => !!phone)
							.map(({ sucursal, phone, slug }) => (
								<Text
									key={'contacto-sucursal-' + slug}
									className='mb-0.5'>
									<a
										href={'tel:+52' + phone}
										className='mr-6 underline'>
										{formatPhoneNumber(phone)}
									</a>{' '}
									Oliva {sucursal}
								</Text>
							))}
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>{t('bolsa')}</Text.Title>
						<Text className='mb-0.5 underline'>
							<Link to={'/bolsa-de-trabajo'}>{t('formulario')}</Link>
						</Text>
						<Text className='mb-0.5'>
							<a href={'mailto:' + website.contact_mail_bolsa}>{website.contact_mail_bolsa}</a>
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>{t('facturacion')}</Text.Title>
						<Text className='mb-0.5 underline'>{t('facturacion.linea')}</Text>
						<Text className='mb-0.5'>
							<a href={'mailto:' + website.contact_mail_facturacion}>{website.contact_mail_facturacion}</a>
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-5'>{t('gruposEventos')}</Text.Title>
						<Text className='mb-0.5 underline'>
							<Link to={'/grupos-y-eventos/formulario'}>{t('formulario')}</Link>
						</Text>
						<Text className='mb-0.5'>
							<a href={'mailto:' + website.contact_mail_eventos}>{website.contact_mail_eventos}</a>
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
