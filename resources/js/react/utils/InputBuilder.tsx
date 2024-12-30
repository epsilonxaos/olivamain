import { useTranslation } from 'react-i18next'

import Input from '../components/forms/Input'
import Select from '../components/forms/Select'
import Textarea from '../components/forms/Textarea'

export const InputBuilder = input => {
	const { i18n } = useTranslation()

	if (input.type === 'textarea') {
		return (
			<Textarea
				key={'form-event-' + input.id}
				name={input.name}
				label={input[i18n.language].label}
				required={input.required}
				placeholder={input[i18n.language].placeholder}
			/>
		)
	}

	if (input.type === 'select') {
		let options = input.options.split(',').map(option => {
			return {
				value: option,
				label: option,
			}
		})

		return (
			<Select
				key={'form-event-' + input.id}
				name={input.name}
				label={input[i18n.language].label}
				options={options}
				required={input.required}
			/>
		)
	}

	return (
		<Input
			key={'form-event-' + input.id}
			type={input.type}
			name={input.name}
			label={input[i18n.language].label}
			required={input.required}
			placeholder={input[i18n.language].placeholder}
		/>
	)
}
