import ApiRequest, { type ApiRequestOptions } from './ApiRequest'

type MailsResponse = {
	success: boolean
	message: string
}

const apiRequest = new ApiRequest()

export const sendContacto = (opt?: ApiRequestOptions) => {
	const requestOptions: ApiRequestOptions = {
		url: '/send/contact',
		method: 'POST',
	}

	return apiRequest.fetchData<MailsResponse>({ ...requestOptions, ...opt })
}

export const sendEvents = (opt?: ApiRequestOptions) => {
	const requestOptions: ApiRequestOptions = {
		url: '/send/events',
		method: 'POST',
	}

	return apiRequest.fetchData<MailsResponse>({ ...requestOptions, ...opt })
}

export const sendBolsa = (opt?: ApiRequestOptions) => {
	const requestOptions: ApiRequestOptions = {
		url: '/send/bolsa',
		method: 'POST',
	}

	return apiRequest.fetchData<MailsResponse>({ ...requestOptions, ...opt })
}
