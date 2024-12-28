import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../constants/constants'

import SectionUi from '../../components/SectionUI'
import Text from '../../components/Text'
import AppContext from '../../contexts/AppContext'
import EventCard from './EventCard'

const Index = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<div className='bg-grisClaro'>
			<SectionUi
				className='max-w-[1200px] px-0 xl:px-0'
				bg={APP_URL + website.reserva_cover}>
				<header className='mx-auto max-w-[740px] px-8 pb-8 text-center md:pb-0 xl:px-24'>
					<Text.Title className='mb-4'>{website[language].reserva_title}</Text.Title>
					<Text
						parseHtml
						className='mb-5'>
						{website[language].reserva_text}
					</Text>
				</header>

				<div className='border-t border-t-black md:border-none md:pt-20'>
					<EventCard />
				</div>
			</SectionUi>
		</div>
	)
}

export default Index
