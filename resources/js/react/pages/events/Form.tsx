import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

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
	const { forms } = state

	console.log(forms)

	return (
		<Container className='max-w-[700px] lg:!p-0'>
			<form
				className='grid w-full grid-cols-1 gap-10'
				action=''
				method='post'>
				{forms
					.filter(f => f.section === 'eventos')
					.map(form => {
						return InputBuilder(form)
					})}

				{/* <Input
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
				/> */}

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
