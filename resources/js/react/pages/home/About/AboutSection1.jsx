import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { APP_URL } from '../../../constants/constants'

import Container from '../../../components/Container'
import Text from '../../../components/Text'
import AppContext from '../../../contexts/AppContext'
import useResponsiveMediaQuery from '../../../hooks/useResponsiveMediaQuery'

const AboutSection1 = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<Container className='pl1650 max-w-[1620px] overflow-hidden py-12 xl:pl-[30px] xl:pr-[45px]'>
			<div className='relative flex items-center justify-between'>
				<div className='max-w-[835px] py-12 pr-24 md:w-[calc(100%-176px)] md:pr-10 lg:p-0'>
					<Text.Title>{website[language].home_nosotros_title}</Text.Title>
					<Text
						parseHtml
						className='lg:mb-0'>
						{website[language].home_nosotros_text}
					</Text>
				</div>

				{website.home_nosotros_img && (
					<IlustrationContainer>
						<img
							className='w-[176px]'
							src={APP_URL + website.home_nosotros_img}
							alt='Oliva 01'
						/>
					</IlustrationContainer>
				)}
			</div>
		</Container>
	)
}

const IlustrationContainer = ({ children }) => {
	const { isMobile } = useResponsiveMediaQuery()

	if (isMobile) return <div className='absolute right-[-62px] top-0 rotate-[30deg]'>{children}</div>

	return children
}

export default AboutSection1
