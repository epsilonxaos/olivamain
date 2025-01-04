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
		<div
			className='border-b border-b-black'
			id={'reservacion'}>
			<Container className='relative min-h-[60svh] py-24 pb-48'>
				<Text.Title className='mb-10 text-center'>{t('btn.reservaAhora')}</Text.Title>

				<div className='min-h-[450px]'>{parse(su.reserva_iframe)}</div>

				<img
					className='absolute bottom-2 left-0 right-0 z-10 mx-auto w-[40px] md:-bottom-[35px]'
					src={ImgCopa}
					alt='Oliva copa'
				/>
			</Container>
		</div>
	)
}

export default Reservation
