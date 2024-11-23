import 'swiper/css'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '../../css/menu.css'
import '../../fonts/index.css'
import Web from './Web'

const root = createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Web />
	</BrowserRouter>
)
