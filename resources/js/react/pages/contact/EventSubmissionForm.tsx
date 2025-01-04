import { toast } from 'sonner'

import { useContext, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { sendContacto } from 'resources/js/react/services/FormsServices'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'
import { InputBuilder } from '../../utils/InputBuilder'

const EventSubmissionForm = () => {
	const { t } = useTranslation()
	const { state } = useContext(AppContext)
	const { website, forms: formData } = state

	const form = useMemo(() => {
		return formData.filter(f => f.section === 'contacto') ?? []
	}, [formData])

	const formRef = useRef<HTMLFormElement>(null)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data: { [key: string]: any } = {}
		formData.forEach((value, key) => {
			data[key] = value
		})

		sendContacto({ data })
			.then(({ data }) => {
				const { success, message } = data

				if (success) {
					toast.success(message)
				}
			})
			.catch(() => {
				toast.error('Por favor intenta mas tarde')
			})
			.finally(() => {
				formRef.current?.reset()
			})
	}

	return (
		<Container className='relative z-10 max-w-[700px] md:p-0'>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='grid w-full grid-cols-1 gap-5 md:gap-10'>
				{form.map(fs => {
					return InputBuilder(fs)
				})}

				<div className='text-center'>
					<Button
						type='submit'
						className='mx-auto mb-10 block w-full max-w-[320px] bg-black text-white'>
						{t('form.enviar')}
					</Button>

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
