import ImgCopa from '../../../../img/copa-form-grupos.png'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/buttons/Button'
import Input from '../../components/forms/Input'
import SectionUi from './SectionUI'

const Form = () => {
	return (
		<SectionUi className='max-w-[1200px] px-0 xl:px-0'>
			<header className='mx-auto max-w-[740px] px-8 pb-10 text-center xl:px-24'>
				<img
					src={ImgCopa}
					alt='Copa de vino'
					className='mx-auto mb-4 w-full max-w-[160px] md:mb-8'
				/>
				<Text.Title className='mb-2'>Espacios privados para cenas y eventos</Text.Title>
				<Text className='mb-0'>¿Quieres realizar un evento con nosotros?</Text>
				<Text>Cada sucursal tiene una dinámica diferente que podemos personalizar para tu evento especial.</Text>
			</header>

			<EventSubmissionForm />
		</SectionUi>
	)
}

const EventSubmissionForm = () => {
	return (
		<Container className='max-w-[700px] !p-0'>
			<form
				className='grid w-full grid-cols-1 gap-10'
				action=''
				method='post'>
				<Input
					name='nombre'
					label='Nombre completo'
				/>
				<Input
					name='telefono'
					label='Télefono'
				/>
				<Input
					type='email'
					name='email'
					label='Email'
				/>
				<Input
					name='ubicacion'
					label='Ubicacion del evento'
				/>
				<Input
					name='tipo'
					label='Tipo de evento'
				/>
				<Input
					name='informacion'
					label='Informacion adicional'
				/>
				<Input
					name='cantidad'
					label='Cantidad destinada para el presupuesto'
				/>
				<Input
					name='fecha'
					label='Fecha del evento'
				/>
				<Input
					name='horario'
					label='Horario preferido'
				/>

				<div className='text-center'>
					<Button className='mx-auto mb-10 block w-full max-w-[320px] bg-black text-white'>Enviar</Button>

					<a
						className='mx-auto'
						href='mailto:reservas@olivamerida.com'>
						<Text className='font-apercuPro'>reservas@olivamerida.com</Text>
					</a>
				</div>
			</form>
		</Container>
	)
}

export default Form
