<aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 text-sm">

        {{-- * Sucursales --}}
        @can(PermissionKey::Sucursales['permissions']['index']['name'])
            <h3 class="flex items-center justify-start font-bold dark:text-white ">
                <svg class="icon icon-tabler icon-tabler-app-window mr-2" width="30" height="20" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M6 8h.01"></path>
                    <path d="M9 8h.01"></path>
                </svg> Modulos
            </h3>

            <ul class="pt-1 mt-1 mb-[30px] space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                <li>
                    <a href="{{ route('panel.sucursal.index') }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/sucursal/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white icon icon-tabler icons-tabler-outline icon-tabler-building-estate">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21h18" />
                            <path d="M19 21v-4" />
                            <path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z" />
                            <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14" />
                            <path d="M9 17v4" />
                            <path d="M8 13h2" />
                            <path d="M8 9h2" />
                        </svg>
                        <span class="ml-3">Sucursales</span>
                    </a>
                </li>
            </ul>
        @endcan


        {{-- * Website, contacto y recursos --}}
        @can(PermissionKey::Website['permissions']['index']['name'])
            <h3 class="flex items-center justify-start font-bold dark:text-white ">
                <svg class="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" width="24" height="24" stroke-width="2">
                    <path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M4 12v-5a3 3 0 1 1 6 0v5"></path>
                    <path d="M4 9h6"></path>
                    <path d="M20 6v6"></path>
                    <path d="M4 16h12"></path>
                    <path d="M4 20h6"></path>
                    <path d="M14 20l2 2l5 -5"></path>
                </svg>
                Textos y recursos
            </h3>

            <ul class="pt-1 mt-1 mb-[30px] space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'inicio']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/inicio/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Inicio</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'bolsa']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/bolsa/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Bolsa de trabajo</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'delivery']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/delivery/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Delivery</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'reservas']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/reservas/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Reservas</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'eventos']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/eventos/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Eventos</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'general']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/general/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
                            stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Generales</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.website.edit', ['seccion' => 'legales']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/website/legales/*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
                            stroke-width="2">
                            <path d="M6 15h15"></path>
                            <path d="M21 19h-15"></path>
                            <path d="M15 11h6"></path>
                            <path d="M21 7h-6"></path>
                            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span class="ml-3">Legales</span>
                    </a>
                </li>

            </ul>
        @endcan

        {{-- * Formularios --}}
        @can(PermissionKey::Forms['permissions']['index']['name'])
            <h3 class="flex items-center justify-start font-bold dark:text-white ">
                <svg class="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" width="24" height="24" stroke-width="2">
                    <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"></path>
                    <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"></path>
                    <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"></path>
                    <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"></path>
                    <path d="M17 12h.01"></path>
                    <path d="M13 12h.01"></path>
                </svg> Formularios
            </h3>

            <ul class="pt-1 mt-1 mb-[30px] space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                {{-- @can(PermissionKey::General['permissions']['inicio']['name']) --}}

                <li>
                    <a href="{{ route('panel.forms.edit', ['section' => 'eventos']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/formulario/edit/eventos') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
                            stroke-width="2">
                            <path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h6"></path>
                            <path d="M15 19l2 2l4 -4"></path>
                        </svg>
                        <span class="ml-3">Grupos y eventos</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.forms.edit', ['section' => 'contacto']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/formulario/edit/contacto') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
                            stroke-width="2">
                            <path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h6"></path>
                            <path d="M15 19l2 2l4 -4"></path>
                        </svg>
                        <span class="ml-3">Contacto</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('panel.forms.edit', ['section' => 'bolsa']) }}"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 {{ request()->is('admin/formulario/edit/bolsa') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                        <svg class="mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
                            stroke-width="2">
                            <path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h6"></path>
                            <path d="M15 19l2 2l4 -4"></path>
                        </svg>
                        <span class="ml-3">Bolsa de trabajo</span>
                    </a>
                </li>
            </ul>
        @endcan



        {{-- * usuarios y permisos --}}
        @canany([PermissionKey::Admin['permissions']['index']['name'],
            PermissionKey::Role['permissions']['index']['name']])
            <h3 class="flex items-center justify-start font-bold dark:text-white">
                <svg class="icon icon-tabler icon-tabler-adjustments mr-2" width="30" height="20"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M6 4v4"></path>
                    <path d="M6 12v8"></path>
                    <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M12 4v10"></path>
                    <path d="M12 18v2"></path>
                    <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M18 4v1"></path>
                    <path d="M18 9v11"></path>
                </svg> Configuraciones
            </h3>
            <ul class="pt-1 mt-1 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                @can(PermissionKey::Admin['permissions']['index']['name'])
                    <li>
                        <a href="{{ route('panel.usuarios.index') }}"
                            class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group {{ request()->is('admin/usuarios*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span class="ml-4">Administrar usuarios</span>
                        </a>
                    </li>
                @endcan
                @can(PermissionKey::Role['permissions']['index']['name'])
                    <li>
                        <a href="{{ route('panel.roles.index') }}"
                            class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group {{ request()->is('admin/roles*') ? 'bg-gray-100 dark:bg-gray-900' : '' }}">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3">
                                </path>
                                <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                <path d="M12 12l0 2.5"></path>
                            </svg>
                            <span class="ml-4">Roles y permisos</span>
                        </a>
                    </li>
                @endcan
            </ul>
        @endcanany
    </div>
</aside>
