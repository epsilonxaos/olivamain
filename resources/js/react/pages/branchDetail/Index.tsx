import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { APP_URL } from '../../constants/constants'
import type { Sucursal } from '../../types/services/initial'

import AppContext from '../../contexts/AppContext'
import { SucursalContext } from '../../contexts/SucursalContext'
import { getSucursalService } from '../../services/AppService'
import Banner from './Banner'
import Gallery from './Gallery'
import Information from './Information'
import Location from './Location'
import Reservation from './Reservation'

const Index = () => {
	const { id } = useParams<{ id: string }>()
	const { dispatch } = useContext(AppContext)
	const [sucursal, setSucursal] = useState<Sucursal | null>(null)

	useEffect(() => {
		if (id && !sucursal) {
			dispatch({ loading: true })
			getSucursalService({ data: { slug: id } })
				.then(({ data }) => {
					setSucursal(data)
					setTimeout(() => {
						dispatch({ loading: false })
					}, 300)
				})
				.catch(err => {
					console.error(err)
				})
		}
	}, [id])

	if (!sucursal) {
		return null
	}

	return (
		<SucursalContext.Provider value={sucursal}>
			<Banner
				bgImg={APP_URL + sucursal.bg}
				menu={sucursal.menu}
			/>
			<Information />
			<Reservation />
			<Location />
			<Gallery />
		</SucursalContext.Provider>
	)
}

export default Index
