import { Swiper, SwiperSlide } from 'swiper/react'

import Container from '../../components/Container'

const images = [
	'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
	'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
	'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
]

const SwipeGallery = () => {
	return (
		<Container className='max-w-none p-0 xl:p-0'>
			<Swiper slidesPerView={1}>
				{images.map((image, index) => (
					<SwiperSlide key={'main-gallery-' + index}>
						<img
							className='h-[400px] max-h-[800px] w-full object-cover lg:h-[85svh]'
							src={image}
							alt='Main gallery'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	)
}

export default SwipeGallery
