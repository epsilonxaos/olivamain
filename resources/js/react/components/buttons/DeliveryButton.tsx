import type { TClassName } from '../../types/main'

import { cn } from '../../utils/cn'

const DeliveryButton = ({ className }: { className?: TClassName }) => {
	return (
		<button
			className={cn('font-apercuPro', className)}
			type='button'>
			DELIVERY
		</button>
	)
}

export default DeliveryButton
