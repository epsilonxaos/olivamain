@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="max-w-7xl mx-auto">

            <form method="POST"
                @can(PermissionKey::Forms['permissions']['update']['name'])
					action="{{ route('panel.forms.update', ['section' => $section]) }}"
				@endcan
                enctype="multipart/form-data" class="form-submit-alert-wait">
                @csrf
                @method('PATCH')

                <div class="flex items-center justify-end pb-4">
                    @can(PermissionKey::Forms['permissions']['update']['name'])
                        <button type="submit"
                            class="px-2 py-1 bg-blue-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                            <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M14 4l0 4l-6 0l0 -4"></path>
                            </svg>
                            Guardar
                        </button>
                    @endcan
                </div>

                <div class="w-full mb-10 dark:text-gray-200">
                    {{-- Informacion general --}}
                    <div class="mb-8 pb-8">
                        {{-- @livewire('form-builder') --}}

                        @can(PermissionKey::Forms['permissions']['create']['name'])
                            <button type="button" id="add-field"
                                class="mn-4 px-2 py-1 bg-green-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                                <svg class="w-5 inline-block mr-1" aria-hidden="true" fill="none" stroke="currentColor"
                                    stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg> Agregar nuevo
                                Campo</button>
                        @endcan

                        <div class="py-4" id="form-builder">

                            @if ($data && count($data) > 0)
                                @foreach ($data as $d)
                                    <div id="field-{{ $d->id }}"
                                        class="mb-4 border p-3 rounded grid grid-cols-1 gap-4 md:grid-cols-2 relative"
                                        data-field="field-edit-{{ $d->id }}" data-index="0">
                                        <button type="button" data-id="{{ $d->id }}"
                                            data-url="{{ route('panel.forms.destroy', ['id' => $d->id]) }}"
                                            title="Eliminar nuevo campo"
                                            class="text-white btn btn-danger mt-2 deleteFieldForm absolute top-2 right-2 bg-red-600 p-2 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 7l16 0"></path>
                                                <path d="M10 11l0 6"></path>
                                                <path d="M14 11l0 6"></path>
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                            </svg>
                                        </button>
                                        <h5 class="md:col-span-2 font-bold text-yellow-600">Editar campo</h5>
                                        <input type="hidden" name="section" value="{{ $section }}" <input
                                            type="hidden" name="id[{{ $d->id }}]" value="{{ $d->id }}"
                                            data-name="section">
                                        <div class="mb-2">
                                            <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                                    class="text-red-600">*</span> ID campo</label>
                                            <input type="text" placeholder="Ejemplo: motivo_reservaciones"
                                                name="name[{{ $d->id }}]" value="{{ $d->name }}"
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required="" data-name="name">
                                            <small class="block">Este campo no debe contener espacios, mayúsculas y debe
                                                estar separado por guiones bajos.</small>
                                        </div>
                                        <div class="mb-2">
                                            <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                                            <select
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="type[{{ $d->id }}]" data-name="type">
                                                <option {{ $d->type == 'text' ? 'selected' : '' }} value="text">Texto
                                                </option>
                                                <option {{ $d->type == 'number' ? 'selected' : '' }} value="number">Número
                                                </option>
                                                <option {{ $d->type == 'email' ? 'selected' : '' }} value="email">Correo
                                                </option>
                                                <option {{ $d->type == 'telefono' ? 'selected' : '' }} value="telefono">
                                                    Teléfono</option>
                                                <option {{ $d->type == 'textarea' ? 'selected' : '' }} value="textarea">
                                                    Área
                                                    de texto</option>
                                                <option {{ $d->type == 'select' ? 'selected' : '' }} value="select">
                                                    Selección</option>
                                            </select>
                                        </div>
                                        <div class="mb-2 options-field md:col-span-2"
                                            {{ $d->type == 'select' ? '' : 'style=display:none' }}>
                                            <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opciones
                                                (separadas por coma)
                                            </label>
                                            <input type="text" value="{{ $d->options }}"
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Ejemplo: Mérida,Tabasco,Campeche"
                                                name="options[{{ $d->id }}]" data-name="options">
                                        </div>
                                        <label class="inline-flex items-center cursor-pointer md:col-span-2">
                                            <input type="checkbox" name="required[{{ $d->id }}]"
                                                data-name="required" value="{{ $d->required }}"
                                                {{ $d->required ? 'checked' : '' }} class="sr-only peer">
                                            <div
                                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-200">Es
                                                requerido</span>
                                        </label>

                                        <div>
                                            <h6>Traducción (es)</h6>
                                            <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                                    class="text-red-600">*</span> Etiqueta</label>
                                            <input type="text"
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="label[es][{{ $d->id }}]" value="{{ $d['label:es'] }}"
                                                data-name="translations.es.label">
                                            {{-- <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Placeholder</label>
                                            <input type="text"
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="placeholder[es][{{ $d->id }}]"
                                                value="{{ $d['placeholder:es'] }}"
                                                data-name="translations.es.placeholder"> --}}
                                        </div>
                                        <div>
                                            <h6>Traducción (en)</h6>
                                            <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                                    class="text-red-600">*</span> Etiqueta</label>
                                            <input type="text"
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="label[en][{{ $d->id }}]" value="{{ $d['label:en'] }}"
                                                data-name="translations.en.label">
                                            {{-- <label
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Placeholder</label>
                                            <input type="text"
                                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="placeholder[en][{{ $d->id }}]"
                                                value="{{ $d['placeholder:en'] }}"
                                                data-name="translations.en.placeholder"> --}}
                                        </div>
                                        <div class="md:col-span-2">

                                        </div>
                                    </div>
                                @endforeach
                            @endif

                            <!-- Los campos se agregarán dinámicamente aquí -->
                        </div>
                        {{-- <button id="save-form" class="btn btn-success mt-3">Guardar Formulario</button> --}}
                    </div>


                    {{-- Boton de gaurdar --}}
                    @can(PermissionKey::Forms['permissions']['update']['name'])
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
                    @endcan

                </div>
            </form>
        </div>
    </div>
@endsection

@push('script')
    @vite(['resources/js/panel/formbuilder.js'])
@endpush
