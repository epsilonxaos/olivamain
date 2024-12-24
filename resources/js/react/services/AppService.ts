import ApiRequest, { type ApiRequestOptions } from './ApiRequest'

const apiRequest = new ApiRequest()

export const getCargaInicialService = (opt?: ApiRequestOptions) => {
	const requestOptions = {
		url: '/initial',
	}

	return apiRequest.fetchData({ ...requestOptions, ...opt })
}
