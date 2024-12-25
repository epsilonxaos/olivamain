import { type Dispatch, createContext } from 'react'

import type { ActionApp, StateApp } from '../types/main'

type AppContextType = {
	state: StateApp
	dispatch: Dispatch<ActionApp>
}
const AppContext = createContext<AppContextType>({
	state: {} as StateApp,
	dispatch: () => {},
})
export default AppContext
