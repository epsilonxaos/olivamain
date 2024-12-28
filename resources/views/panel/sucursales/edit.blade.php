@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="max-w-7xl mx-auto dark:text-gray-200">

            {{-- @can(PermissionKey::Socios['permissions']['create']['name']) --}}
            <form action="{{ route('panel.sucursal.update', ['id' => $data->id]) }}" method="POST"
                enctype="multipart/form-data" class="form-submit-alert-wait">
                @csrf
                @method('PATCH')

                <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900 ">

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

                {{-- Informacion general --}}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-b border-b-gray-200 pb-8">
                    <h2 class="col-span-1 md:col-span-2 mb-2 font-semibold uppercase text-gray-900 text-base">
                        Información general</h2>
                    {{-- Sucursal --}}
                    <div class="col-span-1 md:col-span-2">
                        <label for="sucursal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-red-800">*</span> Nombre de la sucursal</label>
                        <input id="sucursal" name="sucursal" value="{{ $data->sucursal }}" required
                            placeholder="Ejemplo: Centro" autocomplete="off"
                            class="mb-1 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <small class="italic text-xs">Solo puede haber una sucursal con el mismo nombre</small>
                    </div>

                    {{-- video --}}
                    <div class="md:col-span-2">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="col-span-1">
                                <label for="video"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                        class="text-red-800">*</span> Video (Escritorio)</label>
                                <input type="file" name="video" class="dropify" data-height="150"
                                    data-max-file-size="3M" data-allowed-file-extensions="mp4" />
                                <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                                <small class="block text-xs">Formato aceptado: .mp4, con un tamaño máximo de 3
                                    MB.</small>
                            </div>
                            <div class="col-span-1">
                                <video width="100%" controls style="height: 200px; max-width: 100%">
                                    <source src="{{ asset($data->video) }}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    {{-- bg --}}
                    <div class="">
                        <label for="bg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-red-800">*</span> Imagen de Fondo</label>
                        <input type="file" data-default-file="{{ asset($data->bg) }}" name="bg" class="dropify"
                            data-height="150" data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png webp" />
                        <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                        <small class="block text-xs">Formatos aceptados: .jpg, .jpeg, .png y .webp, con un tamaño máximo
                            de 1
                            MB.</small>
                    </div>

                    {{-- Cover --}}
                    <div class="">
                        <label for="cover" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-red-800">*</span> Imagen de portada (movil)</label>
                        <input type="file" data-default-file="{{ asset($data->cover) }}" name="cover" class="dropify"
                            data-height="150" data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png webp" />
                        <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                        <small class="block text-xs">Formatos aceptados: .jpg, .jpeg, .png y .webp, con un tamaño máximo
                            de 1
                            MB.</small>
                    </div>

                    {{-- Logo --}}
                    <div class="">
                        <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-red-800">*</span> Logo circular</label>
                        <input type="file" data-default-file="{{ asset($data->logo) }}" name="logo" class="dropify"
                            data-height="150" data-max-file-size="1M" data-allowed-file-extensions="png svg" />
                        <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                        <small class="block text-xs">Formatos aceptados: .png y .svg, con un tamaño máximo de 1
                            MB.</small>
                    </div>

                    {{-- Logo2 --}}
                    <div class="">
                        <label for="logo_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-red-800">*</span> Logo rectangular</label>
                        <input type="file" data-default-file="{{ asset($data->logo_2) }}" name="logo_2" class="dropify"
                            data-height="150" data-max-file-size="1M" data-allowed-file-extensions="png svg" />
                        <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                        <small class="block text-xs">Formatos aceptados: .png y .svg, con un tamaño máximo de 1
                            MB.</small>
                    </div>

                    <div class=" md:col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="phone"><span
                                class="text-red-800">*</span> Telefono</label>
                        <input type="text" name="phone" required value="{{ $data->phone }}"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>

                {{-- Contenido --}}
                <div class="mb-8 border-b border-b-gray-200 pb-8">
                    <h2 class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 text-base">Contenido
                        sucursal
                    </h2>

                    <small class="pt-2 block">
                        Recomendamos siempre que al copiar y pegar información desde algún sitio o
                        archivo eliminar el formato de los textos para un óptimo funcionamiento, esto se
                        puede realizar desde el mismo editor de texto presionando el siguiente botón
                        <img src="{{ asset('img/panel/clear-format.png') }}" class="inline" alt="Clear format">
                    </small>

                    {{-- Tabs de idiomas --}}
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="tab-reser"
                            data-tabs-toggle="#tab-content-sucursal" role="tablist">
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="es-tab-content-sucursal"
                                    data-tabs-target="#content-sucursal-es" type="button" role="tab"
                                    aria-controls="content-sucursal-es" aria-selected="false">Español</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="en-tab-content-sucursal"
                                    data-tabs-target="#content-sucursal-en" type="button" role="tab"
                                    aria-controls="content-sucursal-en" aria-selected="false">Inglés</button>
                            </li>
                        </ul>
                    </div>

                    {{-- Contenido de los tabs --}}
                    <div id="tab-content-sucursal">

                        {{-- Español --}}
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-sucursal-es"
                            role="tabpanel" aria-labelledby="es-tab">
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="descripcion">Contenido</label>
                                <textarea name="descripcion[es]" class="trumbowyg-panel" cols="30" rows="3">{{ $data->{'descripcion:es'} }}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="horario">Horario</label>
                                <textarea name="horario[es]" class="shorttext" cols="30" rows="3">{{ $data->{'horario:es'} }}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="direccion">Dirección</label>
                                <input type="text" name="direccion[es]" value="{{ $data->{'direccion:es'} }}"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="ubicacion">Ubicacion</label>
                                <input type="text" name="ubicacion[es]" value="{{ $data->{'ubicacion:es'} }}"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        {{-- Ingles --}}
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-sucursal-en"
                            role="tabpanel" aria-labelledby="en-tab">
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="descripcion">Contenido</label>
                                <textarea name="descripcion[en]" class="trumbowyg-panel" cols="30" rows="3">
									{{ $data->{'descripcion:en'} }}
								</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="horario">Horario</label>
                                <textarea name="horario[en]" class="shorttext" cols="30" rows="3">
									{{ $data->{'horario:en'} }}
								</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="direccion">Dirección</label>
                                <input type="text" name="direccion[en]" value="{{ $data->{'direccion:en'} }}"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="ubicacion">Ubicacion</label>
                                <input type="text" name="ubicacion[en]" value="{{ $data->{'ubicacion:en'} }}"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Script y ligas --}}
                <div class="mb-8 border-b border-b-gray-200 pb-8">
                    <h2 class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 text-base">Recursos
                        y Scripts
                    </h2>

                    <div class="mb-4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="reserva_iframe">Script o iframe de reservaciones</label>
                        <textarea
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="reserva_iframe" cols="30" rows="5">
							{{ $data->reserva_iframe }}
						</textarea>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="col-span-1 md:col-span-2">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="col-span-1">
                                    <label for="menu"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PDF
                                        Menu</label>
                                    <input type="file" name="menu" class="dropify" data-height="150"
                                        data-max-file-size="2M" data-allowed-file-extensions="pdf" />
                                    <small class="block text-xs">Formato aceptado: .pdf, con un tamaño máximo de 2
                                        MB.</small>
                                </div>
                                <div class="col-span-1 md:pt-6">
                                    <embed src="{{ asset($data->menu) }}" width="100%" height="150"
                                        type="application/pdf">
                                </div>
                            </div>
                        </div>

                        <div class="col-span-1">
                            <label for="instagram"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario
                                instagram</label>
                            <input id="instagram" name="instagram" placeholder="Ejemplo: oliva_merida"
                                value="{{ $data->instagram }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="col-span-1">
                            <label for="urlIn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                Instagram</label>
                            <input id="urlIn" name="urlIn" value="{{ $data->urlIn }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="col-span-1">
                            <label for="urlFb" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                Facebook</label>
                            <input id="urlFb" name="urlFb" value="{{ $data->urlFb }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="maps">Script o iframe Google Maps</label>
                            <textarea
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="maps" cols="30" rows="5">{{ $data->maps }}</textarea>
                            <small class="block">Reemplazar: height -> 400 o mas</small>
                            <small class="block">Reemplazar: width -> 100%</small>
                        </div>
                    </div>
                </div>

                {{-- Galeria --}}
                <div class="mb-8 border-b border-b-gray-200 pb-8">
                    <h2 class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 text-base">Galeria
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        @for ($i = 1; $i <= 5; $i++)
                            <div class="col-span-1">
                                <label for="img_{{ $i }}"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen
                                    #{{ $i }}</label>
                                <input type="file" name="img_{{ $i }}" class="dropify" data-height="150"
                                    data-max-file-size="1M"
                                    data-default-file="{{ isset($data['img_' . $i]) ? asset($data['img_' . $i]) : '' }}"
                                    data-allowed-file-extensions="jpg jpeg png webp" />
                                <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                                <small class="block text-xs">Formato aceptado: .jpg, .jpeg, .png y .webp, con un tamaño
                                    máximo de 1 MB.</small>
                            </div>
                        @endfor
                    </div>
                </div>

                {{-- Seccion para grupo y eventos --}}
                <div class="mb-8 border-b border-b-gray-200 pb-8">
                    <h2
                        class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 dark:text-gray-200 text-base">
                        Seccion
                        de grupos y eventos
                    </h2>


                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" name="activo_eventos" value="{{ !!$data->activo_eventos }}"
                            {{ $data->activo_eventos ? 'checked' : '' }} class="sr-only peer">
                        <div
                            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-200">Activar / Desactivar
                            sección</span>
                    </label>


                    <div class="grid grid-cols-1 gap-4">
                        <div class="col-span-1">
                            <label for="cover_eventos"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen de
                                portada</label>
                            <input type="file" name="cover_eventos" class="dropify" data-height="150"
                                data-max-file-size="1M" data-default-file="{{ asset($data->cover_eventos) }}"
                                data-allowed-file-extensions="jpg jpeg png webp" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .jpg, .jpeg, .png y .webp, con un tamaño
                                máximo
                                de 1
                                MB.</small>
                        </div>
                        <div class="col-span-1">
                            <small class="pt-2 block">
                                Recomendamos siempre que al copiar y pegar información desde algún sitio o
                                archivo eliminar el formato de los textos para un óptimo funcionamiento, esto se
                                puede realizar desde el mismo editor de texto presionando el siguiente botón
                                <img src="{{ asset('img/panel/clear-format.png') }}" class="inline" alt="Clear format">
                            </small>

                            {{-- Tabs de idiomas --}}
                            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="tab-evento"
                                    data-tabs-toggle="#tab-content-evento" role="tablist">
                                    <li class="mr-2" role="presentation">
                                        <button class="inline-block p-4 border-b-2 rounded-t-lg"
                                            id="es-tab-content-evento" data-tabs-target="#content-evento-es"
                                            type="button" role="tab" aria-controls="content-evento-es"
                                            aria-selected="false">Español</button>
                                    </li>
                                    <li class="mr-2" role="presentation">
                                        <button class="inline-block p-4 border-b-2 rounded-t-lg"
                                            id="en-tab-content-evento" data-tabs-target="#content-evento-en"
                                            type="button" role="tab" aria-controls="content-evento-en"
                                            aria-selected="false">Inglés</button>
                                    </li>
                                </ul>
                            </div>

                            {{-- Contenido de los tabs --}}
                            <div id="tab-content-evento">

                                {{-- Español --}}
                                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-evento-es"
                                    role="tabpanel" aria-labelledby="es-tab">
                                    <div class="mb-3">
                                        <label for="titulo_eventos"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                                        <input id="titulo_eventos" name="titulo_eventos[es]"
                                            value="{{ $data['titulo_eventos:es'] }}" autocomplete="off"
                                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mb-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="descripcion_eventos">Descripcion</label>
                                        <textarea name="descripcion_eventos[es]" class="shorttext" cols="30" rows="3">{{ $data['descripcion_eventos:es'] }}</textarea>
                                    </div>
                                </div>

                                {{-- Ingles --}}
                                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-evento-en"
                                    role="tabpanel" aria-labelledby="en-tab">
                                    <div class="mb-3">
                                        <label for="titulo_eventos"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                                        <input id="titulo_eventos" name="titulo_eventos[en]"
                                            value="{{ $data['titulo_eventos:en'] }}" autocomplete="off"
                                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mb-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="descripcion_eventos">Descripcion</label>
                                        <textarea name="descripcion_eventos[en]" class="shorttext" cols="30" rows="3">{{ $data['titulo_eventos:en'] }}</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {{-- Seccion para reservaciones --}}
                <div class="mb-8 border-b border-b-gray-200 pb-8">
                    <h2 class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 text-base">Seccion
                        de Reservaciones
                    </h2>

                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" name="activo_activo_eventos" value="{{ $data->activo_eventos }}"
                            {{ $data->activo_eventos ? 'checked' : '' }} class="sr-only peer">
                        <div
                            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-200">Activar / Desactivar
                            sección</span>
                    </label>

                    <div class="grid grid-cols-1 gap-4">
                        <div class="col-span-1">
                            <label for="cover_reservas"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen de
                                portada</label>
                            <input type="file" name="cover_reservas" class="dropify" data-height="150"
                                data-max-file-size="1M" data-default-file="{{ asset($data->cover_reservas) }}"
                                data-allowed-file-extensions="jpg jpeg png webp" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .jpg, .jpeg, .png y .webp, con un tamaño
                                máximo
                                de 1
                                MB.</small>
                        </div>
                        <div class="col-span-1">
                            <small class="pt-2 block">
                                Recomendamos siempre que al copiar y pegar información desde algún sitio o
                                archivo eliminar el formato de los textos para un óptimo funcionamiento, esto se
                                puede realizar desde el mismo editor de texto presionando el siguiente botón
                                <img src="{{ asset('img/panel/clear-format.png') }}" class="inline" alt="Clear format">
                            </small>

                            {{-- Tabs de idiomas --}}
                            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="tab-reser"
                                    data-tabs-toggle="#tab-content-reserva" role="tablist">
                                    <li class="mr-2" role="presentation">
                                        <button class="inline-block p-4 border-b-2 rounded-t-lg"
                                            id="es-tab-content-reserva" data-tabs-target="#content-reserva-es"
                                            type="button" role="tab" aria-controls="content-reserva-es"
                                            aria-selected="false">Español</button>
                                    </li>
                                    <li class="mr-2" role="presentation">
                                        <button class="inline-block p-4 border-b-2 rounded-t-lg"
                                            id="en-tab-content-reserva" data-tabs-target="#content-reserva-en"
                                            type="button" role="tab" aria-controls="content-reserva-en"
                                            aria-selected="false">Inglés</button>
                                    </li>
                                </ul>
                            </div>

                            {{-- Contenido de los tabs --}}
                            <div id="tab-content-reserva">

                                {{-- Español --}}
                                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-reserva-es"
                                    role="tabpanel" aria-labelledby="es-tab">
                                    <div class="mb-3">
                                        <label for="titulo_eventos"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                                        <input id="titulo_eventos" name="titulo_eventos[es]"
                                            value="{{ $data->{'titulo_reservas:es'} }}" autocomplete="off"
                                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mb-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="descripcion_reservas">Descripcion</label>
                                        <textarea name="descripcion_reservas[es]" class="shorttext" cols="30" rows="3">
											{{ $data->{'descripcion_reservas:es'} }}
										</textarea>
                                    </div>
                                </div>

                                {{-- Ingles --}}
                                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-reserva-en"
                                    role="tabpanel" aria-labelledby="en-tab">
                                    <div class="mb-3">
                                        <label for="titulo_eventos"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                                        <input id="titulo_eventos" name="titulo_eventos[en]"
                                            value="{{ $data->{'titulo_reservas:en'} }}" autocomplete="off"
                                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mb-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="descripcion_reservas">Descripcion</label>
                                        <textarea name="descripcion_reservas[en]" class="shorttext" cols="30" rows="3">
											{{ $data->{'descripcion_reservas:en'} }}
										</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Seccion para delivery --}}
                <div class="mb-8 border-b border-b-gray-200 pb-8">
                    <h2
                        class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 dark:text-gray-200 text-base">
                        Seccion de delivery </h2>

                    <div class="grid grid-cols-1 gap-4">
                        <div class="col-span-1">
                            <label for="logo_delivery"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
                            <input type="file" name="logo_delivery" class="dropify" data-height="150"
                                data-max-file-size="1M" data-default-file="{{ asset($data->logo_delivery) }}"
                                data-allowed-file-extensions="svg" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .svg, con un tamaño máximo de 1
                                MB.</small>
                        </div>
                        <div class="col-span-1">
                            <label for="cover_delivery"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen de
                                portada</label>
                            <input type="file" name="cover_delivery" class="dropify" data-height="150"
                                data-max-file-size="1M" data-default-file="{{ asset($data->cover_delivery) }}"
                                data-allowed-file-extensions="jpg jpeg png webp" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .jpg, .jpeg, .png y .webp, con un tamaño
                                máximo de 1 MB.</small>
                        </div>
                        <div class="col-span-1">
                            <label for="url_delivery"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL
                                delivery</label>
                            <input id="url_delivery" name="url_delivery" value="{{ $data->url_delivery }}"
                                autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>

                </div>



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
            </form>
            {{-- @endcan --}}
        </div>
    </div>
@endsection
