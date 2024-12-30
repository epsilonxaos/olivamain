import { toast } from 'sonner'

import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { sendEvents } from 'resources/js/react/services/FormsServices'

import { APP_URL } from '../../constants/constants'

import ImgCopa from '../../../../img/copa-form-grupos.png'
import Container from '../../components/Container'
import SectionUi from '../../components/SectionUI'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'
import { InputBuilder } from '../../utils/InputBuilder'

const Form = () => {
	const { i18n } = useTranslation()
	const { language } = i18n
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<div className='border-b border-b-black md:border-none'>
			<SectionUi
				className='max-w-[1200px] px-0 py-20 xl:px-0'
				bg={APP_URL + website.events_cover}>
				<header className='mx-auto max-w-[740px] px-8 pb-10 text-center xl:px-24'>
					<img
						src={ImgCopa}
						alt='Copa de vino'
						className='mx-auto mb-4 w-full max-w-[160px] md:mb-8'
					/>
					<Text.Title className='mb-2'>{website[language].events_title}</Text.Title>
					<Text
						parseHtml
						className='mb-0'>
						{website[language].events_text}
					</Text>
				</header>

				<EventSubmissionForm />
			</SectionUi>
		</div>
	)
}

const EventSubmissionForm = () => {
	const { state } = useContext(AppContext)
	const { t } = useTranslation()
	const { forms, website } = state

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data: { [key: string]: any } = {}
		formData.forEach((value, key) => {
			data[key] = value
		})

		sendEvents({ data })
			.then(({ data }) => {
				const { success, message } = data

				if (success) {
					toast.success(message)
				}
			})
			.catch(() => {
				toast.error('Por favor intenta mas tarde')
			})
			.finally(() => event.currentTarget.reset())
	}

	return (
		<Container className='max-w-[700px] lg:!p-0'>
			<form
				className='grid w-full grid-cols-1 gap-10'
				onSubmit={handleSubmit}>
				{forms
					.filter(f => f.section === 'eventos')
					.map(form => {
						return InputBuilder(form)
					})}

				<div className='text-center'>
					<Button
						type='submit'
						className='mx-auto mb-10 block w-full max-w-[320px] bg-black text-white'>
						{t('form.enviar')}
					</Button>

					<a
						className='mx-auto'
						href={'mailto:' + website.contact_mail_eventos}>
						<Text className='font-apercuPro'>{website.contact_mail_eventos}</Text>
					</a>
				</div>
			</form>
		</Container>
	)
}

export default Form
