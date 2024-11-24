import ImgCopa from '../../../../img/oliva-copa.png'
import Container from '../../components/Container'
import Text from '../../components/Text'

const Reservation = () => {
	return (
		<div className='border-b border-b-black'>
			<Container className='relative min-h-[60svh] py-24'>
				<Text.Title className='text-center'>Reserva ahora</Text.Title>

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
