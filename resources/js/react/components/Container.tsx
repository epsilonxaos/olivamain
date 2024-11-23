import React from 'react'

import { cn } from '../utils/cn'

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

const Container = ({ children, className }: ContainerProps) => {
	return <div className={cn('mx-auto max-w-[1450px] px-6 xl:px-24', className)}>{children}</div>
}

export default Container
