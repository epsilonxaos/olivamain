import { createContext } from 'react'

type HeaderContextType = {
	openBranchMenu: boolean
	setOpenBranchMenu: (value: boolean) => void
	openMenu: boolean
	setOpenMenu: (value: boolean) => void
}

export const HeaderContext = createContext<HeaderContextType>({
	openBranchMenu: false,
	setOpenBranchMenu: () => {},
	openMenu: false,
	setOpenMenu: () => {},
})
