@extends('layouts.admin')

@push('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.css"
        integrity="sha512-jU/7UFiaW5UBGODEopEqnbIAHOI8fO6T99m7Tsmqs2gkdujByJfkCbbfPSN4Wlqlb9TGnsuC0YgUgWkRBK7B9A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
@endpush

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="text-right ">
            <button type="button" onclick="document.getElementById('formSubmit').submit();"
                class="px-2 py-1 ml-auto bg-orange-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
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

        <div class="max-w-7xl mx-auto">
            <h2 class="mb-2 font-semibold text-gray-900 text-base">Primera Sección</h2>

            <div class="pt-4 mb-6">
                <div class="mb-4">
                    <h3 class="font-semibold text-base mb-3">Galeria principal</h3>
                    <p class="text-xs"><span class="font-bold">Formatos de imagen permitidos:</span> Solo se aceptan
                        archivos en formato .jpg, .jpeg o
                        .png, con un tamaño máximo de 1 MiB por archivo.
                    </p>
                    <p class="text-xs"><span class="font-bold">Límite de subida:</span> Puede subir hasta 20 imágenes a
                        la vez. Para añadir más imágenes,
                        haga clic en el botón "Actualizar".
                    </p>
                    <form action="{{ route('panel.galeria.store') }}" method="POST" enctype="multipart/form-data"
                        id="my-dropzone" class="dropzone mt-3" style="border: 2px dashed #d6d6d6;">
                        @csrf
                        <input type="hidden" name="section" value="principal">
                        <div class="dz-message">
                            Suelta tus archivos aquí
                        </div>
                    </form>
                </div>

                <hr class="py-2">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2">
                    @if (count($galeria) > 0)
                        @foreach ($galeria as $item)
                            @if ($item->section == 'principal')
                                <div class="mb-3 position-relative sort px-2" data-orden="{{ $item->order }}"
                                    data-idx="{{ $item->id }}">
                                    <div class="d-flex align-items-center justify-content-end">
                                        <div class="item bg-red-600 text-white flex items-center justify-center cursor-pointer rounded-t delete delete-axios"
                                            data-url="{{ route('panel.galeria.destroy') }}" data-idx="{{ $item->id }}"
                                            title="Eliminar">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                                                    fill="currentColor" />
                                                <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                                                <path d="M13 9H15V17H13V9Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                    <img src="{{ asset($item->cover) }}" alt="Base" class="w-full h-28 object-cover">
                                </div>
                            @endif
                        @endforeach
                    @endif
                </div>
            </div>



            <form id="formSubmit" action="{{ route('panel.website.update', ['seccion' => request('seccion')]) }}"
                enctype="multipart/form-data" class="form-submit-alert-wait" method="POST">
                @csrf
                @method('PUT')

                <div class="w-full">
                    <div class=" mb-6">
                        <h2 class="mb-2 font-semibold text-gray-900 text-base">Segunda Sección</h2>

                        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="tab-seccion1"
                                data-tabs-toggle="#tab-content-secc2" role="tablist">
                                <li class="mr-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="es-tab-secc2"
                                        data-tabs-target="#es-secc2" type="button" role="tab" aria-controls="es-secc2"
                                        aria-selected="false">Español</button>
                                </li>
                                <li class="mr-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="en-tab-secc2"
                                        data-tabs-target="#en-secc2" type="button" role="tab" aria-controls="en-secc2"
                                        aria-selected="false">Inglés</button>
                                </li>
                            </ul>
                        </div>
                        <div id="tab-content-secc2">
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="es-secc2" role="tabpanel"
                                aria-labelledby="es-tab">
                                <small class="pb-2 block">
                                    Recomendamos siempre que al copiar y pegar información desde algún sitio o
                                    archivo eliminar el formato de los textos para un óptimo funcionamiento, esto se
                                    puede realizar desde el mismo editor de texto presionando el siguiente botón
                                    <img src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                        alt="Clear format">
                                </small>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="home_s1_title">Título</label>
                                    <textarea name="home_s1_title[es]" class="shorttext" cols="30" rows="3">{{ $data->{'home_s1_title:es'} }}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="home_s1_text">Contenido</label>
                                    <textarea name="home_s1_text[es]" class="shorttext" cols="30" rows="3">{{ $data->{'home_s1_text:es'} }}</textarea>
                                </div>
                            </div>
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="en-secc2" role="tabpanel"
                                aria-labelledby="en-tab">
                                <small class="pb-2 block">
                                    Recomendamos siempre que al copiar y pegar información desde algún sitio o
                                    archivo eliminar el formato de los textos para un óptimo funcionamiento, esto se
                                    puede realizar desde el mismo editor de texto presionando el siguiente botón
                                    <img src="{{ asset('img/panel/clear-format.png') }}" class="inline"
                                        alt="Clear format">
                                </small>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="home_s1_title">Título</label>
                                    <textarea name="home_s1_title[en]" class="shorttext" cols="30" rows="10">{{ $data->{'home_s1_title:en'} }}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="home_s1_text">Contenido</label>
                                    <textarea name="home_s1_text[en]" class="shorttext" cols="30" rows="10">{{ $data->{'home_s1_text:en'} }}</textarea>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {{-- @endcan --}}
            </form>


            <div class="pt-4">
                <div class="mb-4">
                    <h3 class="font-semibold text-base mb-3">Galeria secundaria</h3>
                    <p class="text-xs"><span class="font-bold">Formatos de imagen permitidos:</span> Solo se aceptan
                        archivos en formato .jpg, .jpeg o
                        .png, con un tamaño máximo de 1 MiB por archivo.
                    </p>
                    <p class="text-xs"><span class="font-bold">Límite de subida:</span> Puede subir hasta 20 imágenes a
                        la vez. Para añadir más imágenes,
                        haga clic en el botón "Actualizar".
                    </p>
                    <form action="{{ route('panel.galeria.store') }}" method="POST" enctype="multipart/form-data"
                        id="my-dropzone" class="dropzone mt-3" style="border: 2px dashed #d6d6d6;">
                        @csrf
                        <input type="hidden" name="section" value="homeSecundary">
                        <div class="dz-message">
                            Suelta tus archivos aquí
                        </div>
                    </form>
                </div>
                {{-- <a href="{{ route('panel.website.edit', ['seccion' => 'inicio']) }}"
                    class="px-2 py-1 block mx-auto mb-2 max-w-max bg-blue-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150  items-center"><i
                        class="fas fa-save mr-2"></i> Guardar imágenes</a> --}}
                <hr class="py-2">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2">
                    @if (count($galeria) > 0)
                        @foreach ($galeria as $item)
                            @if ($item->section == 'homeSecundary')
                                <div class="mb-3 position-relative sort px-2" data-orden="{{ $item->order }}"
                                    data-idx="{{ $item->id }}">
                                    <div class="d-flex align-items-center justify-content-end">
                                        <div class="item bg-red-600 text-white flex items-center justify-center cursor-pointer rounded-t delete delete-axios"
                                            data-url="{{ route('panel.galeria.destroy') }}"
                                            data-idx="{{ $item->id }}" title="Eliminar">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                                                    fill="currentColor" />
                                                <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                                                <path d="M13 9H15V17H13V9Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                    <img src="{{ asset($item->cover) }}" alt="Base"
                                        class="w-full h-28 object-cover">
                                </div>
                            @endif
                        @endforeach
                    @endif
                </div>
            </div>

            <div class="text-center pt-6 ">
                <button type="button" onclick="document.getElementById('formSubmit').submit();"
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
        </div>
    </div>
@endsection

@push('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.js"
        integrity="sha512-U2WE1ktpMTuRBPoCFDzomoIorbOyUv0sP8B+INA3EzNAhehbzED1rOJg6bCqPf/Tuposxb5ja/MAUnC8THSbLQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script type="text/javascript">
        Dropzone.options.myDropzone = {
            paramName: 'file',
            maxFiles: 20,
            maxFilesize: 2,
            maxThumbnailFilesize: 2,
            autoProcessQueue: true,
            acceptedFiles: ".png,.jpg,.jpeg",
            init: function() {
                this.on("error", function(file, errorMessage) {
                    // this.removeFile(file);
                    console.log(errorMessage);

                    let msg = document.querySelector('.messages-alerts');
                    msg.innerHTML =
                        `<div class="alert alert-danger" role="alert"> <small> ${errorMessage}</small>  </div>`;

                    setTimeout(() => {
                        msg.innerHTML = '';
                    }, 4000);
                });
            }
        };
    </script>
@endpush
