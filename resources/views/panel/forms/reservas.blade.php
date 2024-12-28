@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="max-w-7xl mx-auto">

            {{-- @can(PermissionKey::Socios['permissions']['create']['name']) --}}
            <form action="{{ route('panel.sucursal.store') }}" method="POST" enctype="multipart/form-data"
                class="form-submit-alert-wait">
                @csrf

                <div class="flex items-center justify-end pb-4">

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
                </div>

                <div class="w-full mb-10 dark:text-gray-200">
                    {{-- Informacion general --}}
                    <div class="mb-8 pb-8">
                        {{-- @livewire('form-builder') --}}

                        <button type="button" id="add-field"
                            class="mn-4 px-2 py-1 bg-green-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                            <svg class="w-5 inline-block mr-1" aria-hidden="true" fill="none" stroke="currentColor"
                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> Agregar nuevo
                            Campo</button>
                        <div class="py-4" id="form-builder">
                            <!-- Los campos se agregarán dinámicamente aquí -->
                        </div>
                        {{-- <button id="save-form" class="btn btn-success mt-3">Guardar Formulario</button> --}}
                    </div>


                    {{-- Boton de gaurdar --}}
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
            </form>
            {{-- @endcan --}}
        </div>
    </div>
@endsection

@push('script')
    @vite(['resources/js/panel/formbuilder.js'])
@endpush
