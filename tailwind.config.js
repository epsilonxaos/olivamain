module.exports = {
	content: [
		'./public/index.php',
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./vendor/rappasoft/laravel-livewire-tables/resources/views/**/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/**/*.blade.php',
		'./resources/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class', // or 'class'
	theme: {
		extend: {
			colors: {
				grisClaro: '#fcf9f4',
				crema: '#e6d6b5',
			},
			screens: {
				pointerFine: {
					raw: '(pointer: fine)',
				},
				pointerCoarse: {
					raw: '(pointer: coarse)',
				},
			},
			fontFamily: {
				chassiS: ['Chassi S', 'sans-serif'],
				apercuPro: ['Apercu Pro', 'sans-serif'],
			},
		},
	},

	plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
}
