import { AnimatePresence, motion } from 'framer-motion'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { HeaderContext } from '../contexts/HeaderContext'

const an = {
	initial: { opacity: 0, y: -10 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.2 } },
	exit: { opacity: 0, y: -10 },
}

const BranchMenu = () => {
	const { openBranchMenu, setOpenBranchMenu } = useContext(HeaderContext)

	return (
		<AnimatePresence mode='wait'>
			{openBranchMenu && (
				<motion.nav
					initial={an.initial}
					animate={an.animate}
					exit={an.exit}
					className='pt-1'>
					<ul className='grid grid-cols-3 gap-5 pt-[45px] text-center lg:grid-cols-1 lg:gap-2 lg:pt-0 lg:text-left'>
						<li
							className='col-span-1 uppercase'
							onClick={() => setOpenBranchMenu(false)}>
							<Link to={'sucursal/enoteca'}>Enoteca</Link>
						</li>
						<li className='col-span-1 uppercase'>Patio</li>
						<li className='col-span-1 uppercase'>Al mare</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	)
}

export default BranchMenu
