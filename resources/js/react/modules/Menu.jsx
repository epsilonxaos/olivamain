import { useContext } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { HeaderContext } from '../contexts/HeaderContext'
import useResponsiveMediaQuery from '../hooks/useResponsiveMediaQuery'
import BranchMenu from './BranchMenu'

const Menu = () => {
	const { openBranchMenu, setOpenBranchMenu } = useContext(HeaderContext)
	const { isMobile, isTablet } = useResponsiveMediaQuery()

	return (
		<nav className='font-apercuPro'>
			<ul className='flex flex-col items-center justify-center gap-[45px] lg:flex-row lg:gap-4'>
				<li>
					<button
						onClick={() => setOpenBranchMenu(!openBranchMenu)}
						type='button'
						className='mx-auto flex items-center'>
						SUCURSALES <FaChevronDown className='ml-2' />
					</button>

					{(isMobile || isTablet) && openBranchMenu && <BranchMenu />}
				</li>
				<li>GRUPOS Y EVENTOS</li>
				<li>CONTACTO</li>
			</ul>
		</nav>
	)
}

export default Menu
