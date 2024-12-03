import axios from 'axios'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import 'trumbowyg'
import 'trumbowyg/dist/plugins/base64/trumbowyg.base64'
import 'trumbowyg/dist/plugins/cleanpaste/trumbowyg.cleanpaste'
import 'trumbowyg/dist/plugins/noembed/trumbowyg.noembed'
import 'trumbowyg/dist/ui/trumbowyg.min.css'

import icons from './icons.svg'

$.trumbowyg.svgPath = icons
$('.trumbowyg-panel').trumbowyg({
	btnsDef: {
		base64: {
			ico: 'insert-image',
			title: 'Insertar Imagen',
			text: 'Insertar Imagen',
		},
		noembed: {
			title: 'Insertar URL video',
			text: 'Insertar URL video',
		},
	},
	btns: [
		['viewHTML'],
		['formatting'],
		['strong', 'em', 'del', 'underline'],
		['link'],
		['base64'],
		['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
		['unorderedList', 'orderedList'],
		['horizontalRule'],
		['removeformat'],
		['noembed'],
	],
})

$('.shorttext').trumbowyg({
	btns: [
		['viewHTML'],
		['strong', 'em', 'del', 'underline'],
		['link'],
		['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
		['unorderedList', 'orderedList'],
		['horizontalRule'],
		['removeformat'],
	],
})
$('.shorttext').closest('.trumbowyg-box').css('min-height', '200px')
$('.shorttext').prev('.trumbowyg-editor').css('min-height', '200px')

window.cambiar_status = function (el, id, status, url) {
	axios
		.post(url, {
			id,
			status,
		})
		.then(function (response) {
			document.querySelector('#' + el).removeAttribute('onclick')
			let n = status == 1 ? 0 : 1
			document
				.querySelector('#' + el)
				.setAttribute('onclick', "cambiar_status('" + el + "', " + id + ", '" + n + "', '" + url + "')")
			Toastify({
				text: 'Ajustes aplicados',
				className: 'success',
				style: {
					background: '#00b09b',
				},
			}).showToast()
			// alertify.notify("Hecho!", "success", 2);
		})
		.catch(function (error) {
			console.log(error)
		})
}

if (document.querySelector('.delete-axios')) {
	document.querySelectorAll('.delete-axios').forEach(item => {
		item.addEventListener('click', function () {
			Swal.fire({
				title: '¿Finalizar eliminación?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Eliminar',
				denyButtonText: `Cancelar`,
			}).then(result => {
				if (result.isConfirmed) {
					let idx = this.dataset.idx
					axios
						.post(this.dataset.url, { id: idx })
						.then(response => {
							document.querySelector('.sort[data-idx="' + idx + '"]').remove()
						})
						.catch(err => {
							console.error('Error: ' + err)
						})
				}
			})
		})
	})
}
