import { useContext } from 'react'
import { Link } from 'react-router-dom'

import type { TClassName } from '../../types/main'

import { HeaderContext } from '../../contexts/HeaderContext'
import { cn } from '../../utils/cn'

const ReservaButton = ({ className }: { className?: TClassName }) => {
	const { setOpenMenu } = useContext(HeaderContext)

	return (
		<Link
			onClick={() => setOpenMenu(false)}
			to={'/reservacion'}>
			<button className={cn('h-[36px] border border-black bg-crema px-5 font-apercuPro', className)}>RESERVA</button>
		</Link>
	)
}

export default ReservaButton
