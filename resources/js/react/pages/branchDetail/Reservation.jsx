import parse from 'html-react-parser'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import ImgCopa from '../../../../img/oliva-copa.png'
import Container from '../../components/Container'
import Text from '../../components/Text'
import { SucursalContext } from '../../contexts/SucursalContext'

const Reservation = () => {
	const su = useContext(SucursalContext)
	const { t } = useTranslation()

	if (!su?.reserva_iframe) return null

	return (
		<div className='border-b border-b-black'>
			<Container className='relative min-h-[60svh] py-24'>
				<Text.Title className='text-center'>{t('btn.reservaAhora')}</Text.Title>

				{parse(su.reserva_iframe)}

				<img
					className='absolute -bottom-[35px] left-0 right-0 z-10 mx-auto w-[40px]'
					src={ImgCopa}
					alt='Oliva copa'
				/>
			</Container>
		</div>
	)
}

export default Reservation
