import { Link } from 'react-router-dom'

import type { TClassName } from '../../types/main'

import { cn } from '../../utils/cn'

const ReservaButton = ({ className }: { className?: TClassName }) => {
	return (
		<Link to={'/reservacion'}>
			<button className={cn('h-[36px] border border-black bg-crema px-5 font-apercuPro', className)}>RESERVA</button>
		</Link>
	)
}

export default ReservaButton
