<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <style>
        .bg-blanco {
            background-image: url("../img/bg-blanco.webp");
        }

        .bg-negro {
            background-image: url("/img/bg-negro.png");
            background-color: #141414
        }
    </style>

    <title>{{ config('app.name', 'Laravel Clear') }}</title>

    <link rel="icon" type="image/png" href="{{ 'img/favicon/favicon-96x96.png' }}" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="{{ 'img/favicon/favicon.svg' }}" />
    <link rel="shortcut icon" href="{{ 'img/favicon/favicon.ico' }}" />
    <link rel="apple-touch-icon" sizes="180x180" href="{{ 'img/favicon/apple-touch-icon.png' }}" />
    <meta name="apple-mobile-web-app-title" content="Oliva" />
    <link rel="manifest" href="{{ asset('img/favicon/site.webmanifest') }}">

    <meta name="description"
        content="Fundados en 2014, somos un restaurante de tradici&oacute;n italiana con un enfoque &uacute;nico: respetamos los sabores cl&aacute;sicos de Italia, pero exploramos los productos locales para ofrecer una experiencia culinaria renovada." />
    <meta name="author" content="{{ config('app.name', 'Oliva') }}" />
    <meta property="og:type" content="es_MX" />
    <meta property="og:locale" content="website" />
    <meta property="og:site_name" content="{{ config('app.name', 'Oliva') }}" />
    <meta property="og:title" content="{{ config('app.name', 'Oliva') }}" />
    <meta property="og:url" content="{{ config('app.url') }}" />
    <meta property="og:description"
        content="Fundados en 2014, somos un restaurante de tradici&oacute;n italiana con un enfoque &uacute;nico: respetamos los sabores cl&aacute;sicos de Italia, pero exploramos los productos locales para ofrecer una experiencia culinaria renovada." />
    <meta property="og:image" content="{{ asset('img/fb.jpg') }}" />

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/react/App.jsx'])


    @if (isset($st))
        {!! $st !!}
    @endif
</head>

<body class="antialiased min-h-svh bg-grisClaro">
    <div id="root" class="min-h-svh"></div>
</body>

</html>
