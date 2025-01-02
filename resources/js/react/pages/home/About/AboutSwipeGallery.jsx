import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { APP_URL } from '../../../constants/constants'

import Container from '../../../components/Container'
import AppContext from '../../../contexts/AppContext'

const AboutSwipeGallery = () => {
	const { state } = useContext(AppContext)
	const { website } = state

	return (
		<Container className='max-w-none border-y border-y-black p-0 lg:px-[30px] xl:px-[30px]'>
			<Swiper
				className='secondary-slider mx-auto xl:max-w-[1650px]'
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
				<SwiperSlide
					className='xl:max-w-[375px]'
					key={'main-gallery-imagen_1'}>
					<img
						className='block h-[400px] w-full object-cover'
						src={APP_URL + website.home_nosotros_img1}
						alt='Main gallery'
					/>
				</SwiperSlide>
				<SwiperSlide
					className='xl:max-w-[375px]'
					key={'main-gallery-imagen_2'}>
					<img
						className='block h-[400px] w-full object-cover'
						src={APP_URL + website.home_nosotros_img2}
						alt='Main gallery'
					/>
				</SwiperSlide>
				<SwiperSlide
					className='xl:max-w-[375px]'
					key={'main-gallery-imagen_3'}>
					<img
						className='block h-[400px] w-full object-cover'
						src={APP_URL + website.home_nosotros_img3}
						alt='Main gallery'
					/>
				</SwiperSlide>
				<SwiperSlide
					className='xl:max-w-[375px]'
					key={'main-gallery-imagen_4'}>
					<img
						className='block h-[400px] w-full object-cover'
						src={APP_URL + website.home_nosotros_img4}
						alt='Main gallery'
					/>
				</SwiperSlide>
			</Swiper>
		</Container>
	)
}

export default AboutSwipeGallery
