<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Collection;

class FormBuilder extends Component
{
	public Collection $fields;
	public $locales = ['es', 'en'];
	public $name = '';

	public function mount()
	{
		$this->fields = collect();
		$this->addField();
	}

	public function addField()
	{
		$this->fields->push([
			'name' => '',
			'type' => 'text',
			'section' => '',
			'options' => [],
			'required' => false,
			'translations' => array_fill_keys($this->locales, ['label' => '', 'placeholder' => '']),
		]);
	}

	public function removeField($index)
	{
		$this->fields->pull($index);
		// unset($this->fields[$index]);
		// $this->fields = array_values($this->fields); // Reindex array
	}

	public function save()
	{


		// Lógica para guardar los datos en la base de datos
		// Valida y guarda en las tablas `forms` y `form_translations`
	}

	public function render()
	{
		return view('livewire.form-builder');
	}
}
