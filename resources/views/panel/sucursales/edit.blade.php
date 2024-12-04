@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="max-w-7xl mx-auto">

            {{-- @can(PermissionKey::Socios['permissions']['create']['name']) --}}
            <form action="{{ route('panel.sucursal.update', ['id' => $data->id]) }}" method="POST"
                enctype="multipart/form-data" class="form-submit-alert-wait">
                @csrf
                @method('PATCH')

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

                <div class="w-full mb-10">
                    <h2 class="mb-2 font-semibold uppercase text-gray-900 text-base">Información general</h2>
                    <div class="mb-3">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-red-800">*</span> Nombre de la sucursal</label>
                        <input id="title" name="title" value="{{ $data->title }}" required
                            placeholder="Ejemplo: Centro" autocomplete="off"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="flex flex-wrap">
                        <div class="mb-3 w-full md:pr-3">
                            <label for="cover" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                    class="text-red-800">*</span> Imagen de
                                portada</label>
                            <input type="file" name="cover" class="dropify" data-height="200" data-max-file-size="1M"
                                data-allowed-file-extensions="jpg jpeg png webp"
                                data-default-file="{{ asset($data->cover) }}" />
                            <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .jpg, .jpeg, .webp y .png
                                con un maximo de peso de 1MB.</small>
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pl-3">
                            <label for="icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Icono
                                de sucursal (Escritorio)</label>
                            <input type="file" name="icon" class="dropify" data-height="200" data-max-file-size="1M"
                                data-allowed-file-extensions="png svg" data-default-file="{{ asset($data->icon) }}" />
                            <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .png y .svg
                                con un maximo de peso de 1MB.</small>
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pl-3">
                            <label for="icon_movil"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Icono
                                de sucursal (Movil)</label>
                            <input type="file" name="icon_movil" class="dropify" data-height="200"
                                data-max-file-size="1M" data-allowed-file-extensions="png svg"
                                data-default-file="{{ asset($data->icon) }}" />
                            <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .png y .svg
                                con un maximo de peso de 1MB.</small>
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pr-3">
                            <label for="address"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección
                                de la sucursal</label>
                            <input id="address" name="address" value="{{ $data->address }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pl-3">
                            <label for="phone"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                            <input id="phone" name="phone" value="{{ $data->phone }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pr-3">
                            <label for="menu" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Menú
                                de sucursal</label>
                            <input type="file" name="menu" class="dropify" data-height="200" data-max-file-size="1M"
                                data-allowed-file-extensions="pdf" />
                            <small>Solo se aceptan .pdf con un maximo de peso de 1MB.</small>
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pl-3 flex items-center justify-center text-center">
                            @if ($data->menu)
                                <iframe src="{{ asset($data->menu) }}" class="w-full h-[260px]" frameborder="0"></iframe>
                            @else
                                <p><span class="underline">Sin menú agregado</span> <br><br> <span class="italic">No se
                                        puede visualizar el menú, por favor asegurese de tener uno.</span>
                                </p>
                            @endif
                        </div>

                        <div class="mb-3">
                            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="desc"
                                    data-tabs-toggle="#descContent" role="tablist">
                                    <li class="mr-2" role="presentation">
                                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="ess-tab"
                                            data-tabs-target="#ess" type="button" role="tab" aria-controls="ess"
                                            aria-selected="false">Español</button>
                                    </li>
                                    <li class="mr-2" role="presentation">
                                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="enn-tab"
                                            data-tabs-target="#enn" type="button" role="tab" aria-controls="enn"
                                            aria-selected="false">Inglés</button>
                                    </li>
                                </ul>
                            </div>
                            <div id="descContent">
                                <div class="hidden p-4 rounded-lg  dark:bg-gray-800" id="ess" role="tabpanel"
                                    aria-labelledby="ess-tab">
                                    <div class="mb-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="descEs">Contenido</label>
                                        <small class="pb-2 block">Recomendamos siempre que al copiar y pegar
                                            información desde algún sitio o archivo eliminar el formato de los textos
                                            para un óptimo funcionamiento, esto se puede realizar desde el mismo editor
                                            de texto presionando el siguiente botón <img
                                                src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                                alt="Clear format"></small>
                                        <textarea name="descEs" class="trumbowyg-panel" cols="30" rows="10">{{ $data->descEs }}</textarea>
                                    </div>

                                </div>
                                <div class="hidden p-4 rounded-lg  dark:bg-gray-800" id="enn" role="tabpanel"
                                    aria-labelledby="enn-tab">
                                    <div class="mb-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="descEn">Contenido</label>
                                        <small class="pb-2 block">Recomendamos siempre que al copiar y pegar
                                            información desde algún sitio o archivo eliminar el formato de los textos
                                            para un óptimo funcionamiento, esto se puede realizar desde el mismo editor
                                            de texto presionando el siguiente botón <img
                                                src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                                alt="Clear format"></small>
                                        <textarea name="descEn" class="trumbowyg-panel" cols="30" rows="10">{{ $data->descEn }}</textarea>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="w-full mb-10">
                    <h2 class="mb-2 font-semibold uppercase text-gray-900 text-base">Ligas web y menú</h2>

                    <div class="mb-3 w-full">
                        <label for="urlDelivery" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                            Delivery</label>
                        <input id="urlDelivery" name="urlDelivery" value="{{ $data->urlDelivery }}" autocomplete="off"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-3 w-full">
                        <label for="urlReservation"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                            Reservaciones</label>
                        <input id="urlReservation" name="urlReservation" value="{{ $data->urlReservation }}"
                            autocomplete="off"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-3 w-full">
                        <label for="urlLocation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                            Google Maps</label>
                        <input id="urlLocation" name="urlLocation" value="{{ $data->urlLocation }}" autocomplete="off"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="flex flex-wrap">
                        <div class="mb-3 w-full md:w-1/2 md:pr-3">
                            <label for="urlIn"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram</label>
                            <input id="urlIn" name="urlIn" value="{{ $data->urlIn }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="mb-3 w-full md:w-1/2 md:pl-3">
                            <label for="titleIn"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram nick</label>
                            <input id="titleIn" name="titleIn" value="{{ $data->titleIn }}" autocomplete="off"
                                placeholder="Ejemplo: @PizzeriaMid"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class="mb-3 w-full">
                        <label for="urlFb"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
                        <input id="urlFb" name="urlFb" value="{{ $data->urlFb }}" autocomplete="off"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-3 w-full">
                        <label for="urlfacturacion"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url facturación</label>
                        <input id="urlfacturacion" name="urlfacturacion" value="{{ $data->urlfacturacion }}"
                            autocomplete="off"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
                <div class="w-full mb-10">
                    <h2 class="mb-2 font-semibold uppercase text-gray-900 text-base">Horarios y Croquis</h2>

                    <div class=" mb-6">
                        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                                data-tabs-toggle="#myTabContent" role="tablist">
                                <li class="mr-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="es-tab"
                                        data-tabs-target="#es" type="button" role="tab" aria-controls="es"
                                        aria-selected="false">Español</button>
                                </li>
                                <li class="mr-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="en-tab"
                                        data-tabs-target="#en" type="button" role="tab" aria-controls="en"
                                        aria-selected="false">Inglés</button>
                                </li>
                            </ul>
                        </div>
                        <div id="myTabContent">
                            <div class="hidden p-4 rounded-lg  dark:bg-gray-800" id="es" role="tabpanel"
                                aria-labelledby="es-tab">
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="horarioEs">Horarios</label>
                                    <small class="pb-2 block">Recomendamos siempre que al copiar y pegar
                                        información desde algún sitio o archivo eliminar el formato de los textos
                                        para un óptimo funcionamiento, esto se puede realizar desde el mismo editor
                                        de texto presionando el siguiente botón <img
                                            src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                            alt="Clear format"></small>
                                    <textarea name="horarioEs" class="trumbowyg-panel" cols="30" rows="10">{{ $data->horarioEs }}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="croquisEs"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Croquis</label>
                                    <input type="file" name="croquisEs" class="dropify" data-height="200"
                                        data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png"
                                        data-default-file="{{ asset($data->croquisEs) }}" />
                                    <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .jpg, .jpeg y .png
                                        con un maximo de peso de 1MB.</small>
                                </div>
                            </div>
                            <div class="hidden p-4 rounded-lg  dark:bg-gray-800" id="en" role="tabpanel"
                                aria-labelledby="en-tab">
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="horarioEn">Horarios</label>
                                    <small class="pb-2 block">Recomendamos siempre que al copiar y pegar
                                        información desde algún sitio o archivo eliminar el formato de los textos
                                        para un óptimo funcionamiento, esto se puede realizar desde el mismo editor
                                        de texto presionando el siguiente botón <img
                                            src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                            alt="Clear format"></small>
                                    <textarea name="horarioEn" class="trumbowyg-panel" cols="30" rows="10">{{ $data->horarioEn }}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="croquisEn"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Croquis</label>
                                    <input type="file" name="croquisEn" class="dropify" data-height="200"
                                        data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png"
                                        data-default-file="{{ asset($data->croquisEn) }}" />
                                    <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .jpg, .jpeg y .png
                                        con un maximo de peso de 1MB.</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="w-full mb-10">
                    {{-- Informacion general --}}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-b border-b-gray-200 pb-8">
                        <h2 class="col-span-1 md:col-span-2 mb-2 font-semibold uppercase text-gray-900 text-base">
                            Información general</h2>
                        {{-- Sucursal --}}
                        <div class="col-span-1 md:col-span-2">
                            <label for="sucursal"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                    class="text-red-800">*</span> Nombre de la sucursal</label>
                            <input id="sucursal" name="sucursal" value="{{ $data->sucursal }}" required
                                placeholder="Ejemplo: Centro" autocomplete="off"
                                class="mb-1 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <small class="italic text-xs">Solo puede haber una sucursal con el mismo nombre</small>
                        </div>

                        {{-- video --}}
                        <div class="col-span-1">
                            <label for="video"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video
                                (Escritorio)</label>
                            <div class="relative">

                                <input type="file" name="video" class="dropify" data-height="150"
                                    data-max-file-size="3M" data-allowed-file-extensions="mp4" />
                            </div>
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formato aceptado: .mp4, con un tamaño máximo de 3
                                MB.</small>
                        </div>

                        <div class="col-span-1">
                            <video class="w-full h-full min-h-[150px]" controls>
                                <source src="{{ asset($data->video) }}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {{-- Cover --}}
                        <div class="col-span-1">
                            <label for="cover"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                    class="text-red-800">*</span> Imagen de portada (movil)</label>
                            <input type="file" required name="cover" class="dropify" data-height="150"
                                data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png webp" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .jpg, .jpeg, .png y .webp, con un tamaño
                                máximo
                                de 1
                                MB.</small>
                        </div>

                        {{-- Logo --}}
                        <div class="col-span-1">
                            <label for="logo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                    class="text-red-800">*</span> Logo circular</label>
                            <input type="file" required name="logo" class="dropify" data-height="150"
                                data-max-file-size="1M" data-allowed-file-extensions="png svg" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .png y .svg, con un tamaño máximo de 1
                                MB.</small>
                        </div>

                        {{-- Logo2 --}}
                        <div class="col-span-1">
                            <label for="logo_2"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                    class="text-red-800">*</span> Logo rectangular</label>
                            <input type="file" required name="logo_2" class="dropify" data-height="150"
                                data-max-file-size="1M" data-allowed-file-extensions="png svg" />
                            <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                            <small class="block text-xs">Formatos aceptados: .png y .svg, con un tamaño máximo de 1
                                MB.</small>
                        </div>

                        <div class="col-span-1 md:col-span-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="phone"><span class="text-red-800">*</span> Telefono</label>
                            <input type="text" name="phone" required value="{{ old('phone') }}"
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
                                    <textarea name="descripcion[es]" class="trumbowyg-panel" cols="30" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="horario">Horario</label>
                                    <textarea name="horario[es]" class="shorttext" cols="30" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="direccion">Dirección</label>
                                    <input type="text" name="direccion[es]"
                                        class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="ubicacion">Ubicacion</label>
                                    <input type="text" name="ubicacion[es]"
                                        class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                            </div>

                            {{-- Ingles --}}
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-sucursal-en"
                                role="tabpanel" aria-labelledby="en-tab">
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="descripcion">Contenido</label>
                                    <textarea name="descripcion[en]" class="trumbowyg-panel" cols="30" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="horario">Horario</label>
                                    <textarea name="horario[en]" class="shorttext" cols="30" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="direccion">Dirección</label>
                                    <input type="text" name="direccion[en]"
                                        class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="ubicacion">Ubicacion</label>
                                    <input type="text" name="ubicacion[en]"
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
                                name="reserva_iframe" cols="30" rows="5"></textarea>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="col-span-1 md:col-span-2">
                                <label for="menu"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PDF
                                    Menu</label>
                                <input type="file" name="menu" class="dropify" data-height="150"
                                    data-max-file-size="2M" data-allowed-file-extensions="pdf" />
                                <small class="block text-xs">Formato aceptado: .pdf, con un tamaño máximo de 2
                                    MB.</small>
                            </div>
                            <div class="col-span-1">
                                <label for="delivery"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                    Delivery</label>
                                <input id="delivery" name="delivery" value="{{ old('delivery') }}" autocomplete="off"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="col-span-1">
                                <label for="reserva"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                    Reservacion</label>
                                <input id="reserva" name="reserva" value="{{ old('reserva') }}" autocomplete="off"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="col-span-1">
                                <label for="urlIn"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                    Instagram</label>
                                <input id="urlIn" name="urlIn" value="{{ old('urlIn') }}" autocomplete="off"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="col-span-1">
                                <label for="urlFb"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                    Facebook</label>
                                <input id="urlFb" name="urlFb" value="{{ old('urlFb') }}" autocomplete="off"
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="col-span-1 md:col-span-2">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="maps">Script o iframe Google Maps</label>
                                <textarea
                                    class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="maps" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                    </div>

                    {{-- Galeria --}}
                    <div class="mb-8 border-b border-b-gray-200 pb-8">
                        <h2 class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 text-base">Galeria
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            @foreach ([1, 2, 3, 4, 5] as $item)
                                <div class="col-span-1">
                                    <label for="img_{{ $item }}"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen
                                        #{{ $item }}</label>
                                    <input type="file" name="img_{{ $item }}" class="dropify"
                                        data-height="150" data-max-file-size="1M"
                                        data-allowed-file-extensions="jpg jpeg png webp" />
                                    <small class="block text-xs">Las medidas recomendadas son 750x600 px.</small>
                                    <small class="block text-xs">Formato aceptado: .jpg, .jpeg, .png y .webp, con un tamaño
                                        máximo de 1
                                        MB.</small>
                                </div>
                            @endforeach
                        </div>
                    </div>

                    {{-- Seccion para reservaciones --}}
                    <div class="mb-8 border-b border-b-gray-200 pb-8">
                        <h2 class="mb-2 col-cols-1 md:col-span-3 font-semibold uppercase text-gray-900 text-base">Seccion
                            de Reservaciones
                        </h2>

                        <div class="grid grid-cols-1 gap-4">
                            <div class="col-span-1">
                                <label for="cover_reservas"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen de
                                    portada</label>
                                <input type="file" name="cover_reservas" class="dropify" data-height="150"
                                    data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png webp" />
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
                                    <img src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                        alt="Clear format">
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
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                for="titulo_reservas">Contenido</label>
                                            <textarea name="titulo_reservas[es]" class="trumbowyg-panel" cols="30" rows="3"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                for="descripcion_reservas">Descripcion</label>
                                            <textarea name="descripcion_reservas[es]" class="shorttext" cols="30" rows="3"></textarea>
                                        </div>
                                    </div>

                                    {{-- Ingles --}}
                                    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="content-reserva-en"
                                        role="tabpanel" aria-labelledby="en-tab">
                                        <div class="mb-3">
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                for="titulo_reservas">Contenido</label>
                                            <textarea name="titulo_reservas[en]" class="trumbowyg-panel" cols="30" rows="3"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                for="descripcion_reservas">Descripcion</label>
                                            <textarea name="descripcion_reservas[en]" class="shorttext" cols="30" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center pt-6 mt-16">
                            <button type="submit"
                                class="px-2 py-1 mx-auto bg-blue-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                                <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                    <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M14 4l0 4l-6 0l0 -4"></path>
                                </svg>
                                Guardar
                            </button>
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
