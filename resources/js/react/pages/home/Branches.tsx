import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FaLocationDot } from 'react-icons/fa6'

import { APP_URL } from '../../constants/constants'

import ImgPasta from '../../../../img/oliva-pasta.png'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'
import useResponsiveMediaQuery from '../../hooks/useResponsiveMediaQuery'

const Branches = () => {
	const { i18n, t } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { sucursals } = state

	return (
		<section className='bg-crema2'>
			<header className='relative border-y border-y-black py-16 text-center'>
				<Text.Title>{t('home.sucursales.title')}</Text.Title>

				<img
					className='absolute -bottom-16 left-0 right-0 mx-auto hidden w-[40px] lg:block'
					src={ImgPasta}
					alt='Oliva pasta'
				/>
			</header>

			<main>
				{sucursals.map(su => (
					<BranchSection
						key={su.slug}
						slug={su.slug}
						cover={su.cover}
						video={su.video}
						logo={su.logo}
						horario={su[language].horario}
						menu={su.menu}
						ubicacion={su[language].direccion}
						reserva={!!su.reserva_iframe}
						delivery={!!su.url_delivery}
					/>
				))}
			</main>
		</section>
	)
}

type TBranchSection = {
	slug: string
	cover: string
	video: string
	logo: string
	horario: string
	menu?: string | null
	ubicacion: string
	reserva: boolean
	delivery: boolean
}

const BranchSection = ({ cover, video, logo, horario, menu, ubicacion, reserva, delivery, slug }: TBranchSection) => {
	const { isDesktop } = useResponsiveMediaQuery()
	const { t } = useTranslation()

	return (
		<div className='border-b border-b-black'>
			<Container className='py-40'>
				<div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 2xl:gap-24'>
					<div>
						<div className='flex items-center justify-center lg:mb-6 lg:justify-start'>
							<img
								src={APP_URL + logo}
								alt='Logo'
								className='size-[90px] lg:size-[130px] xl:size-[190px]'
							/>

							<main className='pl-6 xl:pl-10'>
								<Text.Title className='mb-1 tracking-[1.6px]'>{t('sucursal.horarios')}</Text.Title>
								<Text
									parseHtml
									className='mb-0'>
									{horario}
								</Text>
							</main>
						</div>

						<div className='hidden border-y border-y-black py-8 lg:grid lg:grid-cols-4 lg:gap-5'>
							{delivery && (
								<Button.Navigation
									to='/delivery'
									className='flex items-center justify-center px-2'>
									{t('sucursal.btn.delivery')}
								</Button.Navigation>
							)}
							{reserva && (
								<Button.Navigation
									to={'/sucursal/' + slug + '#reservacion'}
									className='flex items-center justify-center px-2'>
									{t('btn.reserva')}
								</Button.Navigation>
							)}
							{menu && (
								<Button.Url
									href={APP_URL + menu}
									className='flex items-center justify-center px-2'>
									{t('sucursal.btn.menu')}
								</Button.Url>
							)}
							<Button.Navigation
								to={'/sucursal/' + slug}
								className='flex items-center justify-center px-2'>
								{t('sucursal.btn.conoceMas')}
							</Button.Navigation>
						</div>

						<Location
							content={ubicacion}
							className='hidden items-center py-8 lg:flex'
						/>
					</div>

					<div className='border border-black p-2 lg:p-4'>
						{!isDesktop ? (
							<img
								src={APP_URL + cover}
								className='mx-auto h-auto min-h-[230px] w-full object-cover lg:h-[590px] lg:max-w-[750px]'
								alt=''
							/>
						) : (
							<video
								autoPlay
								loop
								muted
								className='mx-auto h-auto min-h-[230px] w-full object-cover lg:h-[590px] lg:max-w-[750px]'
								poster={APP_URL + cover}>
								<source
									src={APP_URL + video}
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						)}
					</div>

					{!isDesktop && (
						<div className='lg:hidden'>
							<Location
								content={ubicacion}
								className='mb-4 flex items-center'
							/>
							<Button.Navigation
								to={'sucursal/' + slug}
								className='w-full px-2'>
								{t('sucursal.btn.conoceMas')}
							</Button.Navigation>
						</div>
					)}
				</div>
			</Container>
		</div>
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
