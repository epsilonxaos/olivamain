import type { ReactNode } from 'react'

export type TClassName = string

export type TButton = {
	children: ReactNode
	onClick: () => void
	type?: 'button' | 'submit' | 'reset'
	className?: TClassName
}
