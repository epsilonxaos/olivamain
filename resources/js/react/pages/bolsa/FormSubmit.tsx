import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import AppContext from '../../contexts/AppContext'
import { InputBuilder } from '../../utils/InputBuilder'

const FormSubmit = () => {
	const { t } = useTranslation()
	const { state } = useContext(AppContext)
	const { forms } = state

	return (
		<form
			className='grid w-full grid-cols-1 gap-6'
			action=''
			method='post'>
			{forms
				.filter(f => f.section === 'bolsa')
				.map(form => {
					return InputBuilder(form)
				})}

			<div className='text-center'>
				<Button className='mx-auto mb-6 block w-full max-w-[320px] bg-black text-white'>{t('form.enviar')}</Button>

				<a
					className='mx-auto'
					href='mailto:rh@olivamerida.com'>
					<Text className='font-apercuPro'>rh@olivamerida.com</Text>
				</a>
			</div>
		</form>
	)
}

export default FormSubmit
