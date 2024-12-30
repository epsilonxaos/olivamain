<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Admin - Oliva') }}</title>
    <link rel="icon" type="image/png" href="{{ 'img/favicon/favicon-96x96.png' }}" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="{{ 'img/favicon/favicon.svg' }}" />
    <link rel="shortcut icon" href="{{ 'img/favicon/favicon.ico' }}" />
    <link rel="apple-touch-icon" sizes="180x180" href="{{ 'img/favicon/apple-touch-icon.png' }}" />
    <meta name="apple-mobile-web-app-title" content="Oliva" />
    <link rel="manifest" href="{{ asset('img/favicon/site.webmanifest') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />


    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/css/panel/app.css', 'resources/js/app.js'])
    <link rel="stylesheet" href="{{ asset('plugins/dropify/css/dropify.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/bootstrap-icons/font/bootstrap-icons.css') }}">
    <style>
        .dropify-render img {
            margin: auto;
        }

        .bg-cover {
            width: 100px;
            height: 60px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 6px
        }
    </style>
    @stack('style')
    @livewireStyles
</head>

<body class="font-sans text-gray-900 bg-slate-100 dark:bg-slate-900 antialiased">

    {{-- //* Navbar --}}
    @include('layouts.includes.navbar')

    {{-- //* Sidebar --}}
    @include('layouts.includes.sidebar')

    <div class="p-4 sm:ml-64 bg-slate-100 dark:bg-slate-900 min-h-svh">
        @include('layouts.includes.breadcrumb')

        <div
            class="p-4 border-2 border-white bg-white dark:bg-gray-900 shadow rounded-lg dark:border-gray-700 mt-2 pb-12">
            @yield('content')
        </div>
    </div>

    <script src="{{ asset('plugins/sweetalert/sweetalert2@11.js') }}"></script>

    <script>
        // var DateTime = luxon.DateTime;

        function deleteSubmitForm(id) {
            Swal.fire({
                title: "¿Finalizar eliminación?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Eliminado!', '', 'success')
                    document.querySelector('.delete-form-' + id).submit();
                }
            });
        }
    </script>

    <script src="{{ asset('plugins/jquery/jquery-3.7.0.min.js') }}"></script>
    <script src="{{ asset('plugins/dropify/js/dropify.js') }}"></script>
    <script src="{{ asset('js/panel/app.js') }}"></script>
    @vite(['resources/js/panel/trumbowygInit.js'])
    @stack('script')
    @livewireScripts
</body>

</html>
