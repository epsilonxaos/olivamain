import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { HeaderContext } from '../contexts/HeaderContext'
import useResponsiveMediaQuery from '../hooks/useResponsiveMediaQuery'
import BranchMenu from './BranchMenu'

const Menu = () => {
	const { openBranchMenu, setOpenBranchMenu, setOpenMenu } = useContext(HeaderContext)
	const { isMobile, isTablet } = useResponsiveMediaQuery()
	const { t } = useTranslation()

	return (
		<nav className='font-apercuPro'>
			<ul className='flex flex-col items-center justify-center gap-[45px] text-center uppercase lg:flex-row lg:gap-4 xl:gap-8'>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => setOpenBranchMenu(!openBranchMenu)}
						type='button'
						className='mx-auto flex items-center text-center uppercase'>
						{t('sucursales')} <FaChevronDown className='ml-2' />
					</button>

					{(isMobile || isTablet) && openBranchMenu && <BranchMenu />}
				</li>
				<li className='w-full md:w-auto'>
					<Link
						onClick={() => {
							setOpenMenu(false)
							setOpenBranchMenu(false)
						}}
						to={'grupos-y-eventos'}>
						{t('gruposEventos')}
					</Link>
				</li>
				<li className='w-full md:w-auto'>
					<Link
						onClick={() => {
							setOpenMenu(false)
							setOpenBranchMenu(false)
						}}
						to={'contacto'}>
						{t('contacto')}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
