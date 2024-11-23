import { useMediaQuery } from 'react-responsive'

const useResponsiveMediaQuery = () => {
	const isDesktop = useMediaQuery({ minWidth: 1024 })

	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

	const isMobile = useMediaQuery({ maxWidth: 767 })

	return { isDesktop, isTablet, isMobile }
}

export default useResponsiveMediaQuery
