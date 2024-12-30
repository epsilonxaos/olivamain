import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'
import { InputBuilder } from '../../utils/InputBuilder'

const EventSubmissionForm = () => {
	const { t } = useTranslation()
	const { state } = useContext(AppContext)
	const { website, forms } = state

	return (
		<Container className='relative z-10 max-w-[700px] md:p-0'>
			<form
				className='grid w-full grid-cols-1 gap-8'
				action=''
				method='post'>
				{forms
					.filter(f => f.section === 'contacto')
					.map(form => {
						return InputBuilder(form)
					})}

				<div className='text-center'>
					<Button className='mx-auto mb-10 block w-full max-w-[320px] bg-black text-white'>{t('form.enviar')}</Button>

					<a
						className='mx-auto'
						href={'mailto:' + website.contact_mail}>
						<Text className='font-apercuPro'>{website.contact_mail}</Text>
					</a>
				</div>
			</form>
		</Container>
	)
}

export default EventSubmissionForm
