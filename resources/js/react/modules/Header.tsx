import { AnimatePresence, motion } from 'framer-motion'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ImgIsotipo from '../../../img/isotipo.svg'
import ImgLogo from '../../../img/logo.svg'
import Container from '../components/Container'
import DeliveryButton from '../components/buttons/DeliveryButton'
import ReservaButton from '../components/buttons/ReservaButton'
import { HeaderContext } from '../contexts/HeaderContext'
import useResponsiveMediaQuery from '../hooks/useResponsiveMediaQuery'
import BranchMenu from './BranchMenu'
import LanguagesSelection from './LanguagesSelection'
import Menu from './Menu'

const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false)
	const [openBranchMenu, setOpenBranchMenu] = useState<boolean>(false)
	const { isDesktop, isMobile, isTablet } = useResponsiveMediaQuery()

	useEffect(() => {
		if (openMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [openMenu])

	return (
		<HeaderContext.Provider value={{ openBranchMenu, setOpenBranchMenu, openMenu, setOpenMenu }}>
			<motion.header className='relative z-30 border-b border-black bg-white py-7 font-apercuPro text-xs'>
				<Container className='transition-all'>
					<div className='relative flex items-center justify-between'>
						<div className='hidden lg:block'>
							<Menu />
						</div>

						<Link to={'/'}>
							<img
								className='w-[140px] lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[180px] lg:-translate-x-1/2 lg:-translate-y-1/2'
								src={ImgLogo}
								alt='Oliva'
							/>
						</Link>

						{/* // TODO: Reemplazar por menu real */}
						{(isMobile || isTablet) && (
							<button onClick={() => setOpenMenu(!openMenu)}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M3 12H21'
										stroke='black'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 6H21'
										stroke='black'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 18H21'
										stroke='black'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
						)}

						<div className='hidden items-center justify-center gap-8 lg:flex'>
							<LanguagesSelection />
							<DeliveryButton />
							<ReservaButton />
						</div>
					</div>

					{isDesktop && <BranchMenu />}
				</Container>
			</motion.header>

			<AnimatePresence mode='wait'>
				{openMenu && (isMobile || isTablet) && (
					<motion.div
						className='fixed left-0 top-[100px] z-20 flex h-[calc(100svh-100px)] w-full flex-col items-center justify-center overflow-hidden bg-grisClaro'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<Container className='overflow-auto py-10'>
							<Menu />

							<div className='mx-auto grid max-w-max grid-cols-1 gap-[45px] pt-[45px]'>
								<LanguagesSelection />
								<DeliveryButton />
								<ReservaButton />
								<img
									className='size-[95px]'
									src={ImgIsotipo}
									alt='Oliva'
								/>
							</div>
						</Container>
					</motion.div>
				)}
			</AnimatePresence>
		</HeaderContext.Provider>
	)
}

export default Header
