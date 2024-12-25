import { Link } from 'react-router-dom'

import type { TButton } from '../../types/main'

import { cn } from '../../utils/cn'

const Button = ({ children, onClick, type, className }: TButton) => {
	return (
		<button
			type={type ?? 'button'}
			className={cn(
				'border border-black bg-crema2 px-5 py-2 font-apercuPro text-xs uppercase tracking-[1.2px] text-black transition-all hover:bg-black hover:text-white',
				className
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}

const Url = ({ children, href, className }: TButton & { href: string }) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn(
				'block border border-black bg-crema2 px-5 py-2 text-center font-apercuPro text-xs uppercase tracking-[1.2px] text-black transition-all hover:bg-black hover:text-white',
				className
			)}>
			{children}
		</a>
	)
}

const Navigation = ({ to, children, onClick, className }: { to: string; children: React.ReactNode; onClick?: () => void; className?: string }) => {
	return (
		<Link
			to={to}
			className={cn(
				'block border border-black bg-crema2 px-5 py-2 text-center font-apercuPro text-xs uppercase tracking-[1.2px] text-black transition-all hover:bg-black hover:text-white',
				className
			)}
			onClick={onClick}>
			{children}
		</Link>
	)
}

Button.Url = Url
Button.Navigation = Navigation

export default Button
