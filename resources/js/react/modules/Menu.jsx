import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { HeaderContext } from '../contexts/HeaderContext'
import useResponsiveMediaQuery from '../hooks/useResponsiveMediaQuery'
import BranchMenu from './BranchMenu'

const Menu = () => {
	const { openBranchMenu, setOpenBranchMenu, setOpenMenu } = useContext(HeaderContext)
	const { isMobile, isTablet, isDesktop } = useResponsiveMediaQuery()
	const { t } = useTranslation()

	return (
		<nav className='font-apercuPro'>
			<ul className='flex flex-col items-center justify-center gap-[45px] text-center uppercase lg:flex-row lg:gap-4 xl:gap-8'>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => setOpenBranchMenu(!openBranchMenu)}
						type='button'
						className='relative z-[5] mx-auto flex items-center text-center uppercase'>
						{t('sucursales')} <FaChevronDown className='ml-2' />
					</button>

					{(isMobile || isTablet) && openBranchMenu && <BranchMenu />}

					{isDesktop && openBranchMenu && (
						<div className='absolute -left-4 top-[20px] z-[1] min-w-28 bg-grisClaro p-2 px-4'>
							<BranchMenu />
						</div>
					)}
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
