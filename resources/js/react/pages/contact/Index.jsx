import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../constants/constants'

import ImgOliva from '../../../../img/oliva-01.png'
import SectionUi from '../../components/SectionUI'
import Text from '../../components/Text'
import AppContext from '../../contexts/AppContext'
import EventSubmissionForm from './EventSubmissionForm'

const Index = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<SectionUi
			className='relative max-w-[1200px] px-0 lg:py-[100px] xl:px-0 xl:py-[150px]'
			bg={APP_URL + website.contact_cover}>
			<img
				src={ImgOliva}
				alt='Olivo'
				className='mx-auto mb-8 block h-[160px] rotate-[30deg] lg:hidden'
			/>
			<header className='mx-auto max-w-[740px] px-8 pb-10 text-center xl:px-24'>
				<Text.Title className='mb-4'>{website[language].contact_title}</Text.Title>
				<Text
					parseHtml
					className='mb-5'>
					{website[language].contact_text}
				</Text>
			</header>

			<EventSubmissionForm />

			<img
				src={ImgOliva}
				alt='Oliva'
				className='absolute bottom-[20px] left-[-300px] hidden h-[800px] rotate-[18deg] transform lg:block xl:-left-[200px]'
			/>
		</SectionUi>
	)
}

export default Index
