import { useContext } from 'react'

import { APP_URL } from '../../constants/constants'

import Container from '../../components/Container'
import Text from '../../components/Text'
import { SucursalContext } from '../../contexts/SucursalContext'

const Gallery = () => {
	const su = useContext(SucursalContext)

	if (!su) return null

	return (
		<div className='border-b border-b-black bg-white lg:bg-grisClaro'>
			<Container className='py-20'>
				<Text.Title className='mb-8 text-center'>Síguenos en nuestras redes sociales @oliva_merida</Text.Title>
				<div className='gallery'>
					{su?.img_1 && (
						<img
							src={APP_URL + su.img_1}
							alt='Gallery'
						/>
					)}

					{su?.img_2 && (
						<img
							src={APP_URL + su.img_2}
							alt='Gallery'
						/>
					)}

					{su?.img_3 && (
						<img
							src={APP_URL + su.img_3}
							alt='Gallery'
						/>
					)}

					{su?.img_4 && (
						<img
							src={APP_URL + su.img_4}
							alt='Gallery'
						/>
					)}

					{su?.img_5 && (
						<img
							src={APP_URL + su.img_5}
							alt='Gallery'
						/>
					)}
				</div>
			</Container>
		</div>
	)
}

export default Gallery
