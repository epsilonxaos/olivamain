<?php

namespace App\Livewire;

use App\Helpers\Helpers;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Sucursal;
use App\Providers\PermissionKey;
use Livewire\Attributes\On;

class SucursalesTable extends DataTableComponent
{
	protected $model = Sucursal::class;

	#[On('changeStatusSucursal')]
	public function changestatus($status, $id)
	{
		$up = Sucursal::find($id);
		$up->status = $status;
		$up->save();

		flash()->addSuccess('Se actualizo el estado');
	}

	public function configure(): void
	{
		$this->setPrimaryKey('id')
			->setPerPageAccepted([25, 50, 100])
			->setPerPage(25)
			->setAdditionalSelects([
				'status',
			])
			->setSearchDebounce(1000);
	}

	public function columns(): array
	{
		$columns = [
			Column::make("Id", "id")
				->sortable(),
			Column::make("Sucursal", "sucursal")
				->sortable(),
			Column::make("Creado", "created_at")
				->label(fn($row) => Helpers::dateSpanishShort($row->created_at))
				->sortable(),
			Column::make("Actualizado", "updated_at")
				->label(fn($row) => Helpers::dateSpanishShort($row->updated_at))
				->sortable(),
		];

		if (auth()->user()->hasPermissionTo(PermissionKey::Sucursales['permissions']['status']['name'])) {
			array_push(
				$columns,
				Column::make('Activar/Desactivar')
					->label(fn($row) => view('livewire.sucursal-status', ["id" => $row->id, "status" => $row->status]))->html()
			);
		}

		array_push(
			$columns,
			Column::make('Acciones')
				->label(
					function ($row) {
						$acciones = '<div class="flex items-start justify-center mx-auto" style="min-width: 100px">';

						if (auth()->user()->hasAllPermissions([PermissionKey::Sucursales['permissions']['edit']['name'], PermissionKey::Sucursales['permissions']['update']['name']])) {

							$acciones .= '<a href="' . route('panel.sucursal.edit', ["id" => $row->id]) . '" type="button" class="font-medium text-emerald-600 dark:text-emerald-500 mr-2">
								<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
									<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
									<path d="M16 5l3 3"></path>
								</svg>
							</button></a>';
						}


						if (auth()->user()->hasPermissionTo(PermissionKey::Sucursales['permissions']['destroy']['name'])) {
							$acciones .= '
								<form action="' . route("panel.sucursal.destroy", ["id" => $row->id]) . '" method="post" class="inline delete-form-' . $row->id . '">
								<input type="hidden" name="_token" value="' . csrf_token() . '" />
								<input type="hidden" name="_method" value="DELETE">
								<button title="Eliminar" type="button" onclick="deleteSubmitForm(' . $row->id . ')" class="font-medium text-pink-600 dark:text-pink-500">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M4 7l16 0"></path>
										<path d="M10 11l0 6"></path>
										<path d="M14 11l0 6"></path>
										<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
										<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
									</svg>
								</button>
							</form>';
						}

						$acciones .= '</div>';
						return $acciones;
					}
				)->html()
		);

		return $columns;
	}
}
