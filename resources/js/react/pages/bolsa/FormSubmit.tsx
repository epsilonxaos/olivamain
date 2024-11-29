import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import Input from '../../components/forms/Input'

const FormSubmit = () => {
	return (
		<form
			className='grid w-full grid-cols-1 gap-6'
			action=''
			method='post'>
			<Input
				className=''
				name='nombre'
				label='Nombre completo'
			/>
			<Input
				className=''
				name='telefono'
				label='Télefono'
			/>
			<Input
				className=''
				type='email'
				name='email'
				label='Email'
			/>
			<Input
				className=''
				name='mensaje'
				label='Mensaje'
			/>

			<div className='text-center'>
				<Button className='mx-auto mb-6 block w-full max-w-[320px] bg-black text-white'>Enviar</Button>

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
