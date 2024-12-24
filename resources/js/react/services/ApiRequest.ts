import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'sonner'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type ResponseTypes = 'json' | 'arraybuffer' | 'blob' | 'document' | 'text' | 'stream'
export type TonSuccessCallback<T> = (response: AxiosResponse<T>) => void
export type TonErrorCallback = (error: Error | AxiosError) => void

export interface ApiRequestOptions<Q = any> {
	/**
	 * Metodo peticion
	 */
	method?: HttpMethod
	/**
	 * Base URL
	 * @default APP_ENV.API_URL
	 */
	base?: string
	/**
	 * Url peticion
	 */
	url?: string
	/**
	 * Datos a enviar
	 * @property {Object} Q Object data
	 */
	data?: Q
	/**
	 * Datos a enviar usando GET
	 * @property {Object} Q Object params data
	 */
	params?: Q
	/**
	 * Cabeceras en la peticion
	 * @constant headers.token Token de la aplicacion
	 * @example { "auth": "12333" }
	 */
	headers?: object
	/**
	 * Tipo de respuesta de la peticion
	 */
	responseType?: ResponseTypes
	/**
	 * Activa alertas toast
	 * @default false
	 * @property {Object | boolean} showToast true or Object
	 */
	showToast?: boolean | TShowToast
	/**
	 *  Descomprimir gzip enviado de la peticion
	 *  @param
	 *  @return
	 *  @example
	 */
	decompress?: boolean
}

export type TShowToast = {
	/**
	 * @default 'Cargando...'
	 */
	loading?: string
	/**
	 * @default 'Solicitud exitosa'
	 */
	success?: string
	/**
	 * @default 'Error en la solicitud'
	 */
	error?: string
}

class ApiRequest {
	private controller?: any
	private readonly base: string = import.meta.env.VITE_APP_URL + 'api'
	private readonly defaultHeaders = {
		'Cache-Control': 'no-cache',
		'Access-Control-Allow-Origin': '*',
	}
	private readonly defaultShowToast = {
		loading: 'Cargando...',
		success: 'Solicitud exitosa',
		error: 'Error en la solicitud',
	}

	/**
	 * Realiza una solicitud a una API con las opciones proporcionadas y devuelve una promesa con la respuesta de la API.
	 * @param {ApiRequestOptions} options - Las opciones de la solicitud a la API.
	 * @returns {Promise<AxiosResponse<T>>} Una promesa que se resuelve con la respuesta de la API en formato AxiosResponse con un tipo genérico T opcional.
	 * @template T - Opcional: El tipo de datos esperado en la respuesta de la API.
	 */
	fetchData = <T>(options: ApiRequestOptions): Promise<AxiosResponse<T>> => {
		const abortController = new AbortController()
		const signal = abortController.signal
		this.controller = abortController

		return new Promise(async (resolve, reject) => {
			const { method, url, data, headers, responseType, base, showToast = false, decompress = false, params } = options
			const mergedHeaders = { ...this.defaultHeaders, ...headers }
			let mergedToast: TShowToast | boolean = false

			if (showToast === true) {
				mergedToast = this.defaultShowToast
			} else if (typeof showToast === 'object') {
				mergedToast = showToast
			}

			if (mergedToast && mergedToast?.loading) {
				toast.custom(mergedToast.loading)
			}
			const config: AxiosRequestConfig = {
				method: method ?? 'GET',
				url: base ? base + url : this.base + url,
				data,
				params,
				headers: mergedHeaders,
				responseType,
				decompress,
				signal,
				validateStatus: status => {
					return status <= 299
				},
			}

			try {
				const response = await axios.request<T>(config)
				if (response.status >= 200 && response.status <= 299) {
					if (mergedToast) toast.dismiss()
					if (mergedToast && mergedToast?.success) toast.success(mergedToast.success)
					resolve(response)
				}
			} catch (data) {
				console.error(data)
				if (mergedToast) toast.dismiss()
				if (mergedToast && mergedToast?.error) toast.error(mergedToast.error)
				reject(new Error(data))
			}
		})
	}

	/**
	 * Cancelación la solicitud en curso de manera manual
	 */
	cancelRequest = () => {
		if (this.controller) {
			this.controller.abort()
			this.controller = null
		}
	}
}

export default ApiRequest
