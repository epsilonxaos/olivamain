import Input from '../components/forms/Input'
import Select from '../components/forms/Select'
import Textarea from '../components/forms/Textarea'

export const InputBuilder = input => {
	if (input.type === 'textarea') {
		return (
			<Textarea
				key={'form-event-' + input.id}
				name={input.name}
				label={input.label}
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
				label={input.label}
				options={options}
				// required={input.required}
			/>
		)
	}

	return (
		<Input
			key={'form-event-' + input.id}
			name={input.name}
			label={input.label}
		/>
	)
}
