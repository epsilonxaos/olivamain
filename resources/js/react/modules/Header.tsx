import { motion } from 'framer-motion'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../img/logo.svg'
import Container from '../components/Container'
import { HeaderContext } from '../contexts/HeaderContext'
import BranchMenu from './BranchMenu'
import LanguagesSelection from './LanguagesSelection'
import Menu from './Menu'

const Header = () => {
	const [openBranchMenu, setOpenBranchMenu] = useState<boolean>(false)

	return (
		<HeaderContext.Provider value={{ openBranchMenu, setOpenBranchMenu }}>
			<motion.header className='relative border-b border-black py-7 font-apercuPro text-xs'>
				<Container className='transition-all'>
					<div className='relative flex items-center justify-between'>
						<Menu />

						<Link to={'/'}>
							<img
								className='absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2'
								src={logo}
								alt='Oliva'
							/>
						</Link>

						<div className='flex items-center justify-center gap-8'>
							<LanguagesSelection />
							<button type='button'>DELIVERY</button>
							<button className='h-[36px] border border-black bg-crema px-5'>RESERVA</button>
						</div>
					</div>

					<BranchMenu />
				</Container>
			</motion.header>
		</HeaderContext.Provider>
	)
}

export default Header
