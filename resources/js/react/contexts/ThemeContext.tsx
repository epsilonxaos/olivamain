import { createContext } from 'react'

import type { TThemeContext } from '../types/main'

export const ThemeContext = createContext<TThemeContext>({
	theme: 'cream',
	setTheme: () => {},
})
