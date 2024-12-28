import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../constants/constants'

import ImgBgPlaceholder from '../../../../img/bg-bolsa-placeholder.png'
import ImgEnCasa from '../../../../img/en-casa.svg'
import ImgLogoSucursal from '../../../../img/sucursal-logo-2-placeholder.svg'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'

const Index = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website, sucursals } = state

	return (
		<>
			<div className='border-b border-b-black bg-grisClaro'>
				<Container className='max-w-[700px] py-20 text-center'>
					<img
						className='mx-auto mb-10 w-full max-w-[170px]'
						src={APP_URL + website.delivery_img}
						alt='En casa'
					/>
					<Text.Title className='mb-2'>{website.delivery_title}</Text.Title>
					<Text parseHtml>{website[language].delivery_text}</Text>
				</Container>
			</div>

			<div className='bg-white lg:border-b lg:border-b-black'>
				<Container className='grid grid-cols-1 gap-6 px-0 lg:grid-cols-3 lg:py-20 xl:gap-10'>
					{sucursals
						.filter(su => su.url_delivery)
						.map(su => (
							<Card
								key={'delivery-card-' + su.slug}
								logo={APP_URL + su.logo_delivery}
								bg={APP_URL + su.cover_delivery}
								url={su.url_delivery}
							/>
						))}
				</Container>
			</div>
		</>
	)
}

const Card = ({ logo, bg, url }) => {
	return (
		<div className='col-span-1 border-b border-b-black py-20 lg:border-none lg:py-0'>
			<img
				src={logo}
				alt=''
				className='mx-auto mb-6 w-full max-w-[130px]'
			/>

			<img
				src={bg}
				alt=''
				className='mb-6 block h-[380px] w-full object-cover'
			/>

			<Button.Url
				href={url}
				className='mx-auto block w-full max-w-[260px] bg-black text-white'>
				Ordena ahora
			</Button.Url>
		</div>
	)
}

export default Index
