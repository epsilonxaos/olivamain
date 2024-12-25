import type { InitialDataResponse, Sucursal } from '../types/services/initial'

import ApiRequest, { type ApiRequestOptions } from './ApiRequest'

const apiRequest = new ApiRequest()

export const getCargaInicialService = (opt?: ApiRequestOptions) => {
	const requestOptions: ApiRequestOptions = {
		url: '/initial',
	}

	return apiRequest.fetchData<InitialDataResponse>({ ...requestOptions, ...opt })
}

export const getSucursalService = (opt?: ApiRequestOptions<{ slug: string }>) => {
	const requestOptions: ApiRequestOptions<{ slug: string }> = {
		url: '/sucursal',
		method: 'POST',
	}

	return apiRequest.fetchData<Sucursal>({ ...requestOptions, ...opt })
}
