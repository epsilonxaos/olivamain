document.addEventListener('DOMContentLoaded', () => {
	const formBuilder = document.getElementById('form-builder')
	const addFieldButton = document.getElementById('add-field')
	// const saveFormButton = document.getElementById('save-form')

	// Lista dinámica de campos
	let fields = []

	const classLabel = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
	const classInput =
		'mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

	// Función para agregar un nuevo campo
	const addField = () => {
		const index = fields.length
		fields.push({
			name: '',
			type: 'text',
			section: '',
			options: '',
			required: false,
			translations: {
				es: {
					label: '',
					placeholder: '',
				},
				en: {
					label: '',
					placeholder: '',
				},
			},
		})

		// Crear elementos DOM
		const fieldDiv = document.createElement('div')
		fieldDiv.className = 'mb-4 border p-3 rounded grid grid-cols-1 gap-4 md:grid-cols-2 relative'
		fieldDiv.setAttribute('data-index', index)

		fieldDiv.innerHTML = `
			<button type="button" title="Eliminar nuevo campo" class="btn btn-danger mt-2 remove-field absolute top-2 right-2 bg-red-600 p-2 rounded-md text-white">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M4 7l16 0"></path>
					<path d="M10 11l0 6"></path>
					<path d="M14 11l0 6"></path>
					<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
					<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
				</svg>
			</button>
			<h5 class="md:col-span-2 font-bold text-green-600">Nuevo campo</h5>
			<input type="hidden" name="section" value="reservas" data-name="section">
			<div class="mb-2">
				<label class="${classLabel}"><span class="text-red-600">*</span> ID campo</label>
				<input type="text" placeholder="Ejemplo: motivo_reservaciones" name="new_name[]" class="${classInput}" required data-name="name">
				<small class="block">Este campo no debe contener espacios, mayúsculas y debe estar separado por guiones bajos.</small>
			</div>
			<div class="mb-2">
				<label class="${classLabel}">Tipo</label>
				<select class="${classInput}" name="new_type[]" data-name="type">
				<option value="text">Texto</option>
				<option value="number">Número</option>
				<option value="email">Correo</option>
				<option value="telefono">Teléfono</option>
				<option value="textarea">Área de texto</option>
				<option value="select">Selección</option>
				</select>
			</div>
			<div class="mb-2 options-field md:col-span-2" style="display: none;">
				<label class="${classLabel}">Opciones (separadas por coma)</label>
				<input type="text" class="${classInput}" placeholder="Ejemplo: Mérida,Tabasco,Campeche" name="new_options[]" data-name="options">
			</div>
			<label class="inline-flex items-center cursor-pointer md:col-span-2">
					<input type="checkbox" name="new_required[]"  data-name="required" value="false" class="sr-only peer">
					<div
						class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
					</div>
					<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-200">Es requerido</span>
				</label>
			
			<div >
				<h6>Traducción (es)</h6>
				<label class="${classLabel}"><span class="text-red-600">*</span> Etiqueta</label>
				<input type="text" class="${classInput}" name="new_label[es][]" data-name="translations.es.label">
			</div>
			<div >
				<h6>Traducción (en)</h6>
				<label class="${classLabel}"><span class="text-red-600">*</span> Etiqueta</label>
				<input type="text" class="${classInput}" name="new_label[en][]" data-name="translations.en.label">
			</div>
			<div class="md:col-span-2">
				
			</div>
			`

		const respaldo = `<div >
				<h6>Traducción (es)</h6>
				<label class="${classLabel}"><span class="text-red-600">*</span> Etiqueta</label>
				<input type="text" class="${classInput}" name="new_label[es][]" data-name="translations.es.label">
				<label class="${classLabel}">Placeholder</label>
				<input type="text" class="${classInput}" name="new_placeholder[es][]" data-name="translations.es.placeholder">
			</div>
			<div >
				<h6>Traducción (en)</h6>
				<label class="${classLabel}"><span class="text-red-600">*</span> Etiqueta</label>
				<input type="text" class="${classInput}" name="new_label[en][]" data-name="translations.en.label">
				<label class="${classLabel}">Placeholder</label>
				<input type="text" class="${classInput}" name="new_placeholder[en][]" data-name="translations.en.placeholder">
			</div>`

		formBuilder.appendChild(fieldDiv)

		// Event listeners para el campo recién creado
		fieldDiv.querySelector('[data-name="type"]').addEventListener('change', e => toggleOptionsField(e, index))
		fieldDiv.querySelector('.remove-field').addEventListener('click', () => removeField(fieldDiv))
		fieldDiv.querySelectorAll('input, select').forEach(input => {
			input.addEventListener('input', e => updateField(e, index))
		})
	}

	// Actualizar el campo en la lista dinámica
	const updateField = (event, index) => {
		const input = event.target
		const name = input.getAttribute('data-name')
		const value = input.type === 'checkbox' ? input.checked : input.value

		// Manejar valores anidados (como translations.es.label)
		const keys = name.split('.')
		let field = fields[index]
		while (keys.length > 1) {
			const key = keys.shift()
			field = field[key]
		}
		field[keys[0]] = value
	}

	// Mostrar u ocultar el campo de opciones
	const toggleOptionsField = (event, index) => {
		const type = event.target.value
		const fieldDiv = formBuilder.querySelector(`[data-index="${index}"]`)
		const optionsField = fieldDiv.querySelector('.options-field')
		optionsField.style.display = type === 'select' ? 'block' : 'none'

		// Actualizar el tipo en la lista de campos
		fields[index].type = type
		if (type !== 'select') {
			fields[index].options = ''
		}
	}

	// Eliminar un campo
	const removeField = fieldDiv => {
		fieldDiv.remove()
	}

	// Event listeners
	addFieldButton.addEventListener('click', addField)
})

const deleteFieldForm = (id, url) => {
	fetch(url, {
		method: 'DELETE',
		headers: {
			'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
		},
	}).then(res => {
		if (res.ok) {
			document.getElementById(`field-${id}`).remove()
		}
	})
}

document.querySelectorAll('.deleteFieldForm').forEach(item => {
	item.addEventListener('click', function () {
		const id = this.dataset.id
		Swal.fire({
			title: '¿Finalizar eliminación?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Eliminar',
			denyButtonText: `Cancelar`,
		}).then(result => {
			if (result.isConfirmed) {
				deleteFieldForm(id, this.dataset.url)
			}
		})
	})
})

document.querySelectorAll('[data-name="type"]').forEach(item => {
	item.addEventListener('change', e => {
		const type = e.target.value
		const optionsField = e.target.closest('.grid').querySelector('.options-field')
		optionsField.style.display = type === 'select' ? 'block' : 'none'
	})
})
