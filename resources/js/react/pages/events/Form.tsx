import ImgCopa from '../../../../img/copa-form-grupos.png'
import Text from '../../components/Text'
import SectionUi from './SectionUI'

const Form = () => {
	return (
		<SectionUi className='max-w-[1200px] px-0 xl:px-0'>
			<header className='mx-auto max-w-[740px] px-8 pb-8 text-center md:pb-0 xl:px-24'>
				<img
					src={ImgCopa}
					alt='Copa de vino'
					className='mx-auto mb-4 w-full max-w-[160px] md:mb-8'
				/>
				<Text.Title className='mb-2'>Espacios privados para cenas y eventos</Text.Title>
				<Text className='mb-0'>¿Quieres realizar un evento con nosotros?</Text>
				<Text>Cada sucursal tiene una dinámica diferente que podemos personalizar para tu evento especial.</Text>
			</header>

			<div className='border-t border-t-black md:border-none md:pt-20'></div>
		</SectionUi>
	)
}

export default Form
