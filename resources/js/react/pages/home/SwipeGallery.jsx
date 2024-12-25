import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { APP_URL } from '../../constants/constants'

import Container from '../../components/Container'
import AppContext from '../../contexts/AppContext'

const SwipeGallery = () => {
	const { state } = useContext(AppContext)
	const { galeria } = state

	return (
		<Container className='max-w-none p-0 xl:p-0'>
			<Swiper slidesPerView={1}>
				{galeria
					.filter(({ section }) => section === 'principal')
					.map(({ cover, id }) => (
						<SwiperSlide key={'main-gallery-' + id}>
							<img
								className='h-[400px] max-h-[800px] w-full object-cover lg:h-[85svh]'
								src={APP_URL + cover}
								alt='Main gallery'
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</Container>
	)
}

export default SwipeGallery
