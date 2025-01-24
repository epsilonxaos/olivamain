@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="max-w-7xl mx-auto">
            {{-- @can(PermissionKey::Socios['permissions']['update']['name']) --}}
            <form action="{{ route('panel.website.update', ['seccion' => request('seccion')]) }}"
                enctype="multipart/form-data" class="form-submit-alert-wait" method="POST">
                @csrf
                @method('PUT')
                {{-- @elsecan
                    <form> --}}
                {{-- @endcan --}}

                {{-- @canany([PermissionKey::Socios['permissions']['edit']['name'], PermissionKey::Socios['permissions']['update']['name']]) --}}
                <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900">
                    <button type="submit"
                        class="px-2 py-1 bg-orange-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                        <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M14 4l0 4l-6 0l0 -4"></path>
                        </svg>
                        Actualizar
                    </button>
                </div>

                <div class="w-full mb-10 dark:text-gray-200">
                    <div class=" mb-6">

                        <h2 class="mb-2 font-semibold text-gray-900 text-base">Información general</h2>

                        <div class="mb-3">
                            <label for="contact_cover"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen sección
                                Contacto</label>
                            <input type="file" name="contact_cover" class="dropify" data-height="200"
                                data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png webp"
                                data-default-file="{{ asset($data->contact_cover) }}" />
                            <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .jpg, .jpeg, .webp y .png
                                con un maximo de peso de 1MB.</small>
                        </div>

                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="mb-3 md:col-span-2">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="url_facturacion">Url facturación</label>
                                <input id="email_contacto" name="url_facturacion" value="{{ $data->url_facturacion }}"
                                    autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_mail">Email
                                    de contacto</label>
                                <input id="email_contacto" name="contact_mail" value="{{ $data->contact_mail }}"
                                    autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_cc_mail">CC</label>
                                <input name="contact_cc_mail" value="{{ $data->contact_cc_mail }}" autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <span class="text-xs block"><span class="font-bold">Ejemplo:</span>
                                    correo_1@prueba.mx;correo_2@prueba.mx;correo_3@prueba.mx</span>
                            </div>

                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_mail_bolsa">Email
                                    de bolsa de trabajo</label>
                                <input name="contact_mail_bolsa" value="{{ $data->contact_mail_bolsa }}" autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_cc_mail_bolsa">CC</label>
                                <input name="contact_cc_mail_bolsa" value="{{ $data->contact_cc_mail_bolsa }}"
                                    autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <span class="text-xs block"><span class="font-bold">Ejemplo:</span>
                                    correo_1@prueba.mx;correo_2@prueba.mx;correo_3@prueba.mx</span>
                            </div>

                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_mail_eventos">Email
                                    de bolsa de trabajo</label>
                                <input name="contact_mail_eventos" value="{{ $data->contact_mail_eventos }}"
                                    autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_cc_mail_eventos">CC</label>
                                <input name="contact_cc_mail_eventos" value="{{ $data->contact_cc_mail_eventos }}"
                                    autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <span class="text-xs block"><span class="font-bold">Ejemplo:</span>
                                    correo_1@prueba.mx;correo_2@prueba.mx;correo_3@prueba.mx</span>
                            </div>

                            <div class="mb-3 md:col-span-2">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="contact_mail_facturacion">Email
                                    de facturación</label>
                                <input name="contact_mail_facturacion" value="{{ $data->contact_mail_facturacion }}"
                                    autocomplete="off"
                                    class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="w-full">
                    <div class=" mb-6">
                        <h2 class="mb-2 font-semibold text-gray-900 dark:text-gray-200 text-base">Scripts en Head</h2>

                        <div class="mb-3">
                            <textarea cols="30" rows="10" id="scripts" name="scripts" value="{{ $data->scripts }}"
                                autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{{ $data->scripts }}</textarea>
                        </div>
                    </div>
                </div>
                {{-- @endcanany
			
					@can(PermissionKey::Socios['permissions']['update']['name']) --}}
                <div class="text-center pt-6 mt-16">
                    <button type="submit"
                        class="px-2 py-1 mx-auto bg-orange-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                        <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M14 4l0 4l-6 0l0 -4"></path>
                        </svg>
                        Actualizar
                    </button>
                </div>
                {{-- @endcan --}}
            </form>
        </div>
    </div>
@endsection
