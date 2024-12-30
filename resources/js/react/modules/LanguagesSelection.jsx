import { useTranslation } from 'react-i18next'
import { cn } from 'resources/js/react/utils/cn'

const LanguagesSelection = () => {
	const { i18n } = useTranslation()

	return (
		<div className='font-apercuPro'>
			<ul className='flex items-center justify-center'>
				<li>
					<BtnLng language={'es'}>ES</BtnLng>
				</li>
				<li className='mx-2'>
					<div className='h-[15px] border-l border-l-black'></div>
				</li>
				<li>
					<BtnLng language={'en'}>EN</BtnLng>
				</li>
			</ul>
		</div>
	)
}

const BtnLng = ({ children, language }) => {
	const { i18n } = useTranslation()

	return (
		<button
			onClick={() => i18n.changeLanguage(language)}
			className={cn(i18n.language === language ? 'font-bold' : 'cursor-pointer opacity-30 hover:opacity-100')}>
			{children}
		</button>
	)
}

export default LanguagesSelection
