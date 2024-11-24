import { type CSSProperties, type ReactNode } from 'react'

import { cn } from '../utils/cn'

type ContainerProps = {
	children: ReactNode
	className?: string
	style?: CSSProperties
}

const Container = ({ children, className, style }: ContainerProps) => {
	return (
		<section
			{...(style && { style })}
			className={cn('mx-auto w-full max-w-[1450px] px-8 xl:px-24', className)}>
			{children}
		</section>
	)
}

export default Container
