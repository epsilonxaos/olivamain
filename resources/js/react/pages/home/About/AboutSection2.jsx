import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../../constants/constants'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import AppContext from '../../../contexts/AppContext'

const AboutSection2 = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<Container className='pl1650 max-w-[1620px] overflow-hidden py-8 xl:pl-[30px] xl:pr-[45px]'>
			<div className='relative flex items-center justify-between'>
				<div className='max-w-[835px] py-12 pr-14 md:w-[calc(100%-90px)] md:pr-16 lg:p-0'>
					<Text
						parseHtml
						className='lg:mb-0'>
						{website[language].home_nosotros_text2}
					</Text>
				</div>

				{website.home_nosotros_img5 && (
					<img
						className='w-[75px] md:w-[90px]'
						src={APP_URL + website.home_nosotros_img5}
						alt='Oliva Copa de vino'
					/>
				)}
			</div>
		</Container>
	)
}

export default AboutSection2
