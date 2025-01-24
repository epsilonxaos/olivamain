import { useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import { APP_URL } from '../../constants/constants'

import Container from '../../components/Container'
import Text from '../../components/Text'
import { SucursalContext } from '../../contexts/SucursalContext'

const Gallery = () => {
	const su = useContext(SucursalContext)
	const { t } = useTranslation()
	const [open, setOpen] = useState(false)
	const galleryImg = useMemo(() => {
		const images: any[] = []
		if (su?.img_1) images.push({ src: APP_URL + su.img_1 })
		if (su?.img_2) images.push({ src: APP_URL + su.img_2 })
		if (su?.img_3) images.push({ src: APP_URL + su.img_3 })
		if (su?.img_4) images.push({ src: APP_URL + su.img_4 })
		if (su?.img_5) images.push({ src: APP_URL + su.img_5 })

		return images
	}, [su])

	if (!su) return null

	return (
		<div className='border-b border-b-black bg-white lg:bg-grisClaro'>
			<Container className='py-10 md:py-20'>
				<Text.Title className='mb-10 text-left md:mb-20 md:text-center'>
					{t('siguenos')}{' '}
					{su.urlIn ? (
						<a
							href={su.urlIn}
							target='_blank'
							className='font-bold'
							rel='noopener noreferrer'>
							@{su.instagram}
						</a>
					) : (
						`@${su.instagram}`
					)}
				</Text.Title>
				<div className='gallery'>
					{su?.img_1 && (
						<button
							onClick={() => setOpen(true)}
							type='button'>
							<img
								src={APP_URL + su.img_1}
								alt='Gallery'
							/>
						</button>
					)}

					{su?.img_2 && (
						<button
							onClick={() => setOpen(true)}
							type='button'>
							<img
								src={APP_URL + su.img_2}
								alt='Gallery'
							/>
						</button>
					)}

					{su?.img_3 && (
						<button
							onClick={() => setOpen(true)}
							type='button'>
							<img
								src={APP_URL + su.img_3}
								alt='Gallery'
							/>
						</button>
					)}

					{su?.img_4 && (
						<button
							onClick={() => setOpen(true)}
							type='button'>
							<img
								src={APP_URL + su.img_4}
								alt='Gallery'
							/>
						</button>
					)}

					{su?.img_5 && (
						<button
							onClick={() => setOpen(true)}
							type='button'>
							<img
								src={APP_URL + su.img_5}
								alt='Gallery'
							/>
						</button>
					)}
				</div>

				{galleryImg.length > 0 && (
					<Lightbox
						styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
						open={open}
						close={() => setOpen(false)}
						slides={galleryImg}
					/>
				)}
			</Container>
		</div>
	)
}

export default Gallery
