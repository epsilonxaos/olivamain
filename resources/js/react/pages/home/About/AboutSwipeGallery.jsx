import { Swiper, SwiperSlide } from 'swiper/react'

import Container from '../../../components/Container'

const images = [
	'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
	'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
	'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
	'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
]

const AboutSwipeGallery = () => {
	return (
		<Container className='max-w-none border-y border-y-black p-0 lg:px-[30px] xl:px-[30px]'>
			<Swiper
				className='secondary-slider mx-auto xl:max-w-max'
				slidesPerView={4}
				spaceBetween={30}
				loop={false}
				breakpoints={{
					300: {
						slidesPerView: 1.2,
						spaceBetween: 10,
						initialSlide: 1,
						loop: true,
						centeredSlides: true,
					},
					768: {
						slidesPerView: 1.2,
						spaceBetween: 15,
						initialSlide: 1,
						loop: true,
						centeredSlides: true,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
						loop: false,
						centeredSlides: false,
						initialSlide: 0,
					},
				}}
				centeredSlides={false}>
				{images.map((image, index) => (
					<SwiperSlide
						className='xl:max-w-[375px]'
						key={'main-gallery-' + index}>
						<img
							className='block h-[400px] w-full object-cover'
							src={image}
							alt='Main gallery'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	)
}

export default AboutSwipeGallery
