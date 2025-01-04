import { AnimatePresence, motion } from 'framer-motion'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../contexts/AppContext'
import { HeaderContext } from '../contexts/HeaderContext'

const an = {
	initial: { opacity: 0, y: -10 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.2 } },
	exit: { opacity: 0, y: -10 },
}

const BranchMenu = () => {
	const { openBranchMenu, setOpenBranchMenu, setOpenMenu } = useContext(HeaderContext)
	const { state } = useContext(AppContext)
	const { sucursals } = state

	return (
		<AnimatePresence mode='wait'>
			{openBranchMenu && (
				<motion.nav
					initial={an.initial}
					animate={an.animate}
					exit={an.exit}
					className='pt-8 md:pt-2'>
					<ul className='grid grid-cols-3 gap-5 border-y border-y-black py-[15px] text-center lg:grid-cols-1 lg:gap-2 lg:border-none lg:pt-0 lg:text-left'>
						{sucursals.map(({ sucursal, slug }) => (
							<li
								key={'branch-menu-' + slug}
								className='col-span-1 uppercase'
								onClick={() => {
									setOpenBranchMenu(false)
									setOpenMenu(false)
								}}>
								<Link to={'sucursal/' + slug}>{sucursal}</Link>
							</li>
						))}
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	)
}

export default BranchMenu
