import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import AppContext from 'resources/js/react/contexts/AppContext'

import ImgBg from '../../../../img/bg-bolsa-placeholder.png'
import ImgSello from '../../../../img/sello-bolsa.png'
import Container from '../../components/Container'
import Text from '../../components/Text'
import FormSubmit from './FormSubmit'

const Index = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website } = state
	return (
		<div className='border-b border-b-black lg:bg-white'>
			<Container className='px-0 lg:pl-0 xl:pl-0'>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<figure className='col-span-1'>
						<img
							src={ImgBg}
							alt='bolsa de trabajo'
							className='size-full max-h-[600px] min-h-[400px] object-cover object-center md:min-h-[550px] lg:max-h-none lg:min-h-[730px]'
						/>
					</figure>
					<div className='col-span-1 px-8 py-20 text-center lg:px-7'>
						{/* <FadeInUpDiv> */}
						<div className='mx-auto w-full max-w-[430px]'>
							<img
								src={ImgSello}
								alt='Sello'
								className='mx-auto mb-10 size-[120px] lg:size-[160px]'
							/>

							<Text.Title className='mb-5 tracking-[2.5px]'>{website[language].bolsa_title}</Text.Title>
							<Text
								parseHtml
								className='mb-10 text-center'>
								{website[language].bolsa_text}
							</Text>

							<FormSubmit />
						</div>

						{/* </FadeInUpDiv> */}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Index
