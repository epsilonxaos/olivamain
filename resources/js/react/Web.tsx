import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'

import { useEffect, useReducer, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import type { Theme } from './types/main'

import { MessageConsent } from './components/MessageConsent'
import PageTransition from './components/animations/PageTransition'
import AppContext from './contexts/AppContext'
import { ThemeContext } from './contexts/ThemeContext'
import './lang/i18n'
import Footer from './modules/Footer'
import Header from './modules/Header'
import BranchDetail from './pages/branchDetail/Index'
import FormEvents from './pages/events/Form'
import Events from './pages/events/Index'
import Index from './pages/home/Index'

const initialArgs = {
	loading: true,
}
const reducer = (prev, next) => ({ ...prev, ...next })

export default function Web() {
	const location = useLocation()
	const [state, dispatch] = useReducer(reducer, initialArgs)
	const [theme, setTheme] = useState<Theme>('cream')

	useEffect(() => {
		// async function fetchData() {
		//     const response = await axios.get(
		//         import.meta.env.VITE_APP_URL + "api/initial",
		//     );

		//     const { website, sucursals, galeria } = response.data;
		//     website.translations.forEach((translation) => {
		//         let locale = translation.locale;
		//         website[locale] = translation;
		//     });
		//     dispatch({ website, sucursals, galeria });

		// }
		// fetchData();

		setTimeout(() => {
			dispatch({ loading: false })
		}, 1500)
	}, [])

	if (state.loading)
		return (
			<div className='flex h-screen w-full items-center justify-center bg-grisClaro text-black'>
				<span className='spinner'></span>
			</div>
		)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Header />

				<Toaster />

				<main className='mx-auto min-h-svh'>
					<AnimatePresence mode='wait'>
						<Routes
							location={location}
							key={location.pathname}>
							<Route
								index
								path='/'
								element={
									<PageTransition>
										<Index />
									</PageTransition>
								}
							/>
							<Route
								path='/grupos-y-eventos'
								element={
									<PageTransition>
										<Events />
									</PageTransition>
								}
							/>
							<Route
								path='/grupos-y-eventos/formulario'
								element={
									<PageTransition>
										<FormEvents />
									</PageTransition>
								}
							/>
							<Route
								path='/sucursal/:id'
								element={
									<PageTransition>
										<BranchDetail />
									</PageTransition>
								}
							/>
							<Route
								path='*'
								element={
									<PageTransition>
										<h1>404</h1>
									</PageTransition>
								}
							/>
						</Routes>
					</AnimatePresence>
				</main>
				<Footer />
				<MessageConsent />
			</ThemeContext.Provider>
		</AppContext.Provider>
	)
}
