import { useContext } from 'react'
import { Link } from 'react-router-dom'

import type { TClassName } from '../../types/main'

import { HeaderContext } from '../../contexts/HeaderContext'
import { cn } from '../../utils/cn'

const DeliveryButton = ({ className }: { className?: TClassName }) => {
	const { setOpenMenu, setOpenBranchMenu } = useContext(HeaderContext)

	return (
		<Link
			className='text-center'
			onClick={() => {
				setOpenMenu(false)
				setOpenBranchMenu(false)
			}}
			to={'/delivery'}>
			<button
				className={cn('font-apercuPro', className)}
				type='button'>
				DELIVERY
			</button>
		</Link>
	)
}

export default DeliveryButton
