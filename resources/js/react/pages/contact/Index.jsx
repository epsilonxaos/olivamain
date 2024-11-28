import ImgOliva from '../../../../img/oliva-01.png'
import SectionUi from '../../components/SectionUI'
import Text from '../../components/Text'
import EventSubmissionForm from './EventSubmissionForm'

const Index = () => {
	return (
		<SectionUi className='relative max-w-[1200px] px-0 lg:py-[100px] xl:px-0 xl:py-[300px]'>
			<img
				src={ImgOliva}
				alt='Oliva'
				className='mx-auto mb-8 block h-[160px] rotate-[30deg] lg:hidden'
			/>
			<header className='mx-auto max-w-[740px] px-8 pb-10 text-center xl:px-24'>
				<Text.Title className='mb-4'>Contáctanos</Text.Title>
				<Text className='mb-5'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
					sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</Text>
			</header>

			<EventSubmissionForm />

			<img
				src={ImgOliva}
				alt='Oliva'
				className='absolute bottom-[20px] left-[-300px] hidden h-[800px] rotate-[18deg] transform lg:block xl:-left-[200px]'
			/>
		</SectionUi>
	)
}

export default Index
