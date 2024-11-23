import type { ReactNode } from 'react'

import type { TClassName } from '../types/main'

import { cn } from '../utils/cn'

const Text = ({ children, className }: { children: ReactNode; className?: TClassName }) => {
	return <p className={cn('mb-4 font-chassiS text-xs leading-[1.47] md:text-base', className)}>{children}</p>
}

const Title = ({ children, className }: { children: ReactNode; className?: TClassName }) => {
	return <h3 className={cn('mb-2 font-apercuPro text-base uppercase tracking-[4.8px]', className)}>{children}</h3>
}

Text.Title = Title

export default Text
