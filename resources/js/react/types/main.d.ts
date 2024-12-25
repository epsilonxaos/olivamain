import type { ReactNode } from 'react'

import type { InitialDataResponse } from './services/initial'

export type TClassName = string

export type TButton = {
	children: ReactNode
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	className?: TClassName
}

export type Theme = 'white' | 'cream'

export type TThemeContext = {
	theme: Theme
	setTheme: (value: Theme) => void
}

export type TBannerSection = {
	bgImg: string
	children?: ReactNode
	className?: TClassName
}

type StateApp = InitialDataResponse & { loading: boolean; completeTask: boolean }
type ActionApp = Partial<StateApp>
