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
				<div className='border-b border-b-black py-8 md:py-12'>
					<img
						className='mx-auto w-56'
						src={ImgGrupoOliva}
						alt='Grupo oliva'
					/>
				</div>
			</Container>

			<Container className='py-8 md:py-12'>
				<div className='grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:gap-8 xl:flex xl:items-start xl:justify-between xl:text-left'>
					<div className='col-span-1'>
						<Text.Title className='mb-2 text-[8px] font-bold md:mb-5 md:text-sm'>{t('contacto')}</Text.Title>
						{sucursals
							.filter(({ phone }) => !!phone)
							.map(({ sucursal, phone, slug }) => (
								<Text
									key={'contacto-sucursal-' + slug}
									className='mb-0.5'>
									Oliva {sucursal}
									<a
										href={'tel:+52' + phone}
										className='block underline md:ml-4 md:inline-block'>
										{formatPhoneNumber(phone)}
									</a>
								</Text>
							))}
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-2 text-[8px] font-bold md:mb-5 md:text-sm'>{t('bolsa')}</Text.Title>
						<Text className='mb-0.5 underline'>
							<Link to={'/bolsa-de-trabajo'}>{t('formulario')}</Link>
						</Text>
						<Text className='mb-0.5'>
							<a href={'mailto:' + website.contact_mail_bolsa}>{website.contact_mail_bolsa}</a>
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-2 text-[8px] font-bold md:mb-5 md:text-sm'>{t('facturacion')}</Text.Title>
						{website.url_facturacion && (
							<Text className='mb-0.5 underline'>
								<a
									href={website.url_facturacion}
									target='_blank'
									rel='noopener noreferrer'>
									{t('facturacion.linea')}
								</a>
							</Text>
						)}
						<Text className='mb-0.5'>
							<a href={'mailto:' + website.contact_mail_facturacion}>{website.contact_mail_facturacion}</a>
						</Text>
					</div>
					<div className='col-span-1'>
						<Text.Title className='mb-2 text-[8px] font-bold md:mb-5 md:text-sm'>{t('gruposEventos')}</Text.Title>
						<Text className='mb-0.5 underline'>
							<Link to={'/grupos-y-eventos'}>{t('formulario')}</Link>
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

			<div className='bg-black py-4 font-apercuPro text-[8px] uppercase tracking-[1.2px] text-white md:text-xs'>
				<Container>
					<ul className='mx-auto flex w-full flex-col items-center justify-between sm:flex-row'>
						<li className='mb-1.5 sm:mb-0'>
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
