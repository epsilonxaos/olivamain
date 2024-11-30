import { Link } from 'react-router-dom'

import type { TClassName } from '../../types/main'

import { cn } from '../../utils/cn'

const DeliveryButton = ({ className }: { className?: TClassName }) => {
	return (
		<Link to={'/delivery'}>
			<button
				className={cn('font-apercuPro', className)}
				type='button'>
				DELIVERY
			</button>
		</Link>
	)
}

export default DeliveryButton
