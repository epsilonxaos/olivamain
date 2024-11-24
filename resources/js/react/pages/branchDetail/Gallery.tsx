import Container from '../../components/Container'
import Text from '../../components/Text'

const images = [
	'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
	'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
	'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
	'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
	'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
]

const Gallery = () => {
	return (
		<div className='border-b border-b-black bg-white lg:bg-grisClaro'>
			<Container className='py-20'>
				<Text.Title className='mb-8 text-center'>Síguenos en nuestras redes sociales @oliva_merida</Text.Title>
				<div className='gallery'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt='Gallery'
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default Gallery
