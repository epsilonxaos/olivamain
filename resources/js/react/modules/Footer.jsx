import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Container from '../components/Container'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='w-full bg-black py-4 font-apercuPro text-xs uppercase tracking-[1.2px] text-white'>
			<Container>
				<ul className='mx-auto flex w-full flex-col items-center justify-between sm:flex-row'>
					<li>
						<Link to={'/politicas-privacidad'}>{t('politicasReservacion')} | Cookies</Link>
					</li>
					<li className='mb-1 sm:mb-0'>
						{t('madeBy')}{' '}
						<a
							href='https://www.madeby.partners/'
							target='_blank'
							rel='noopener noreferrer'>
							<span className='font-bold'>MadebyPartners®</span>
						</a>
					</li>
				</ul>
			</Container>
		</footer>
	)
}

export default Footer
