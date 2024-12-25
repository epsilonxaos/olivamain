import { createContext } from 'react'

import type { Sucursal } from '../types/services/initial'

export const SucursalContext = createContext<Sucursal | null>(null)
