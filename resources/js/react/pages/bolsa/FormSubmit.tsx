import { toast } from 'sonner'

import { useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { sendBolsa } from 'resources/js/react/services/FormsServices'

import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'
import { InputBuilder } from '../../utils/InputBuilder'

const FormSubmit = () => {
	const { t } = useTranslation()
	const { state } = useContext(AppContext)
	const { forms, website } = state

	const formRef = useRef<HTMLFormElement>(null)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data: { [key: string]: any } = {}
		formData.forEach((value, key) => {
			data[key] = value
		})

		sendBolsa({ data })
			.then(({ data }) => {
				const { success, message } = data

				if (success) {
					toast.success(message)
				}
			})
			.catch(() => {
				toast.error('Por favor intenta mas tarde')
			})
			.finally(() => formRef.current?.reset())
	}

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className='grid w-full grid-cols-1 gap-6'>
			{forms
				.filter(f => f.section === 'bolsa')
				.map(form => {
					return InputBuilder(form)
				})}

			<div className='text-center'>
				<Button
					type='submit'
					className='mx-auto mb-6 block w-full max-w-[320px] bg-black text-white'>
					{t('form.enviar')}
				</Button>

				<a
					className='mx-auto'
					href={'mailto:' + website.contact_mail_bolsa}>
					<Text className='font-apercuPro'>{website.contact_mail_bolsa}</Text>
				</a>
			</div>
		</form>
	)
}

export default FormSubmit
