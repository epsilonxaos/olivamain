export type InitialDataResponse = {
	website: Website
	sucursals: Sucursal[]
	galeria: Galeria[]
}

export type Galeria = {
	cover: string
	section: string
}

export type Website = {
	bolsa_cover: string
	bolsa_text: string
	bolsa_title: string
	contact_cc_mail_bolsa: string | null
	contact_cc_mail_eventos: string | null
	contact_cc_mail_facturacion: string | null
	contact_cover: string
	contact_mail_bolsa: string
	contact_mail_eventos: string
	contact_mail_facturacion: string
	contact_text: string
	contact_title: string
	created_at: string
	delivery_img: string
	delivery_text: string
	delivery_title: string
	events_cover: string
	events_text: string
	events_title: string
	home_nosotros_img: string
	home_nosotros_img1: string
	home_nosotros_img2: string
	home_nosotros_img3: string
	home_nosotros_img4: string
	home_nosotros_img5: string
	home_nosotros_text: string
	home_nosotros_text2: string
	home_nosotros_title: string
	politicas: string
	reserva_cover: string
	reserva_form_img: string
	reserva_form_text: string
	reserva_form_title: string
	reserva_text: string
	reserva_title: string
	translations: WebsiteTranslation[]
	es?: WebsiteTranslation
	en?: WebsiteTranslation
}

export type WebsiteTranslation = {
	id: number
	website_id: number
	locale: string
	politicas: string
	home_nosotros_title: string
	home_nosotros_text: string
	home_nosotros_text2: string
	events_title: string
	events_text: string
	contact_title: string
	contact_text: string
	bolsa_title: string
	bolsa_text: string
	reserva_title: string
	reserva_text: string
	reserva_form_title: string
	reserva_form_text: string
	delivery_title: string
	delivery_text: string
	politicas_privacidad: string | null
	politicas_reservacion: string | null
}

export type Sucursal = {
	id: number
	sucursal: string
	slug: string
	cover: string
	logo: string
	logo_2: string
	video: string
	cover_reservas?: string | null
	activo_reservas?: number
	logo_delivery?: string | null
	cover_delivery?: string | null
	url_delivery?: string | null
	cover_eventos?: string | null
	activo_eventos?: number
	reserva_iframe?: string | null
	delivery?: any | null
	menu?: string | null
	reserva?: any | null
	maps?: string | null
	img_1?: string | null
	img_2?: string | null
	img_3?: string | null
	img_4?: string | null
	img_5?: string | null
	urlIn?: string | null
	urlFb?: string | null
	phone?: string | null
	status?: number
	created_at?: string
	updated_at?: string
	descripcion?: string | null
	horario?: string | null
	direccion?: string | null
	ubicacion?: string | null
	titulo_reservas?: string | null
	descripcion_reservas?: string | null
	titulo_eventos?: string | null
	descripcion_eventos?: string | null
	translations: SucursalTranslation[]
	es?: SucursalTranslation
	en?: SucursalTranslation
}

export type SucursalTranslation = {
	id: number
	sucursal_id: number
	locale: string
	descripcion: string | null
	horario: string | null
	direccion: string | null
	ubicacion: string | null
	titulo_reservas: string | null
	descripcion_reservas: string | null
	titulo_eventos: string | null
	descripcion_eventos: string | null
}
