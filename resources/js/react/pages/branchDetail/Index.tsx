import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ImgBannerPlaceholder from '../../../../img/sucursal-banner-placeholder.png'
import ImgLogoPlaceholder from '../../../../img/sucursal-logo-2-placeholder.svg'
import { ThemeContext } from '../../contexts/ThemeContext'
import Banner from './Banner'
import Gallery from './Gallery'
import Information from './Information'
import Location from './Location'
import Reservation from './Reservation'

const Index = () => {
	const { id } = useParams<{ id: string }>()
	const { setTheme } = useContext(ThemeContext)

	useEffect(() => {
		setTheme('white')
	}, [])

	useEffect(() => {
		console.log(id)
	}, [id])

	return (
		<>
			<Banner bgImg={ImgBannerPlaceholder} />
			<Information logo={ImgLogoPlaceholder} />
			<Reservation />
			<Location />
			<Gallery />
		</>
	)
}

export default Index
