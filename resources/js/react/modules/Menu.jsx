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
			<ul className='flex flex-col items-center justify-center gap-[45px] uppercase lg:flex-row lg:gap-4 xl:gap-8'>
				<li>
					<button
						onClick={() => setOpenBranchMenu(!openBranchMenu)}
						type='button'
						className='mx-auto flex items-center uppercase'>
						{t('sucursales')} <FaChevronDown className='ml-2' />
					</button>

					{(isMobile || isTablet) && openBranchMenu && <BranchMenu />}
				</li>
				<li>
					<Link
						onClick={() => setOpenMenu(false)}
						to={'grupos-y-eventos'}>
						{t('gruposEventos')}
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setOpenMenu(false)}
						to={'contacto'}>
						{t('contacto')}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
