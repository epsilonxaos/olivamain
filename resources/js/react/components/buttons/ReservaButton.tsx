import type { TClassName } from '../../types/main'

import { cn } from '../../utils/cn'

const ReservaButton = ({ className }: { className?: TClassName }) => {
	return <button className={cn('h-[36px] border border-black bg-crema px-5 font-apercuPro', className)}>RESERVA</button>
}

export default ReservaButton
