import { useContext } from 'react'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import Input from '../../components/forms/Input'
import AppContext from '../../contexts/AppContext'

const EventSubmissionForm = () => {
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<Container className='relative z-10 max-w-[700px] md:p-0'>
			<form
				className='grid w-full grid-cols-1 gap-8'
				action=''
				method='post'>
				<Input
					className='bg-grisClaro bg-opacity-85'
					name='nombre'
					label='Nombre completo'
				/>
				<Input
					className='bg-grisClaro bg-opacity-85'
					name='telefono'
					label='Télefono'
				/>
				<Input
					className='bg-grisClaro bg-opacity-85'
					type='email'
					name='email'
					label='Email'
				/>
				<Input
					className='bg-grisClaro bg-opacity-85'
					name='mensaje'
					label='Mensaje'
				/>

				<div className='text-center'>
					<Button className='mx-auto mb-10 block w-full max-w-[320px] bg-black text-white'>Enviar</Button>

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
