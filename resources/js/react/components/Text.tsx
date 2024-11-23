import parse from 'html-react-parser'
import type { ReactNode } from 'react'

import type { TClassName } from '../types/main'

import { cn } from '../utils/cn'

const Text = ({
	children,
	className,
	parseHtml,
}: {
	children: ReactNode
	className?: TClassName
	parseHtml?: boolean
}) => {
	if (parseHtml && !children) return null

	if (parseHtml)
		return (
			<div className={cn('mb-4 font-chassiS text-xs leading-[1.47] md:text-base', className)}>
				{parse(children as string)}
			</div>
		)

	return <p className={cn('mb-4 font-chassiS text-xs leading-[1.47] md:text-base', className)}>{children}</p>
}

const Title = ({
	children,
	className,
	parseHtml,
}: {
	children: ReactNode | string
	className?: TClassName
	parseHtml?: boolean
}) => {
	if (parseHtml && !children) return null

	if (parseHtml)
		return (
			<div className={cn('mb-2 font-apercuPro text-base uppercase tracking-[4.8px]', className)}>
				{parse(children as string)}
			</div>
		)

	return <h3 className={cn('mb-2 font-apercuPro text-base uppercase tracking-[4.8px]', className)}>{children}</h3>
}

Text.Title = Title

export default Text
