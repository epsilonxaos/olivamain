import React from 'react'

import { cn } from '../utils/cn'

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

const Container = ({ children, className }: ContainerProps) => {
	return <section className={cn('mx-auto w-full max-w-[1450px] px-6 xl:px-24', className)}>{children}</section>
}

export default Container
