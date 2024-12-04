<?php

namespace App\Livewire;

use App\Models\Sucursal;
use Livewire\Component;

class SucursalStatus extends Component
{

	public $status = null;
	public $id = null;

	public function changestatus()
	{
		// $up = Sucursal::find($this->id);
		// $up->status = $this->status == 1 ? 0 : 1;
		// $up->save();

		flash()->addSuccess('Se actualizo el estado');
	}

	public function mount($id, $status)
	{
		// $this->id = $id;
		// $this->status = $status;
	}

	public function render()
	{
		return view('livewire.sucursal-status');
	}
}
