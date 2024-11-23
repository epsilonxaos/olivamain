import type { TButton } from '../../types/main'

import { cn } from '../../utils/cn'

const Button = ({ children, onClick, type, className }: TButton) => {
	return (
		<button
			type={type || 'button'}
			className={cn(
				'bg-crema2 border border-black px-5 py-2 font-apercuPro text-xs uppercase tracking-[1.2px] text-black transition-all hover:bg-black hover:text-white',
				className
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
