<div>
    <button type="button" wire:click="addField"
        class="px-2 py-1 bg-green-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
        <svg class="w-5 inline-block mr-1" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>Agregar Campo</button>

    <form wire:submit.prevent="save" class="py-4">
        @foreach ($fields as $index => $field)
            <div class="mb-4 border p-3 rounded">
                <h5>Campo {{ $index + 1 }} {{ $field['name'] }}</h5>
                <div class="mb-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="name_{{ $index }}"><span class="text-red-600">*</span> Identicador unico</label>
                    <input type="text" wire:model.defer="fields.{{ $index }}.name"
                        placeholder="Ejemplo: motivo_reservaciones"
                        class="disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="name_{{ $index }}">
                    <small class="block">Este no debe llevar espacios, mayus y en su caso separado por guines
                        bajos</small>
                </div>

                <div class="mb-2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="type_{{ $index }}">Tipo</label>
                    <select wire:model="fields.{{ $index }}.type"
                        class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="type_{{ $index }}">
                        <option value="text">Texto</option>
                        <option value="number">Número</option>
                        <option value="textarea">Área de texto</option>
                        <option value="select">Selección</option>
                    </select>
                </div>

                {{ $fields[$index]['type'] }}

                <div class="mb-2" style="display: {{ $fields[$index]['type'] === 'select' ? 'block' : 'none' }}">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="options_{{ $index }}">Opciones (separadas por coma)</label>
                    <input type="text" wire:model="fields.{{ $index }}.options"
                        class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="options_{{ $index }}">
                </div>

                {{-- <div class="mb-2">
                    <label for="section_{{ $index }}">Sección</label>
                    <input type="text" wire:model="fields.{{ $index }}.section" class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="section_{{ $index }}">
                </div> --}}

                <div class="mb-2">
                    <label>
                        <input type="checkbox" wire:model="fields.{{ $index }}.required"> Requerido
                    </label>
                </div>

                @foreach ($locales as $locale)
                    <div class="mb-2">
                        <h6>Traducción ({{ $locale }})</h6>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="label_{{ $locale }}_{{ $index }}">Etiqueta</label>
                        <input type="text"
                            wire:model="fields.{{ $index }}.translations.{{ $locale }}.label"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="label_{{ $locale }}_{{ $index }}">

                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="placeholder_{{ $locale }}_{{ $index }}">Placeholder</label>
                        <input type="text"
                            wire:model="fields.{{ $index }}.translations.{{ $locale }}.placeholder"
                            class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="placeholder_{{ $locale }}_{{ $index }}">
                    </div>
                @endforeach

                <button wire:click.prevent="removeField({{ $index }})" class="btn btn-danger mt-2">Eliminar
                    Campo</button>
            </div>
        @endforeach

        <button type="submit" class="btn btn-success">Guardar Formulario</button>
    </form>
</div>
