<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Sucursal;
use Livewire\Attributes\On;

class SucursalesTable extends DataTableComponent
{
	protected $model = Sucursal::class;

	#[On('change-status')]
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
			->setSearchDebounce(1000);
	}

	public function columns(): array
	{
		$columns = [
			Column::make("Id", "id")
				->sortable(),
			Column::make("Sucursal", "title")
				->sortable(),
			Column::make("Created at", "created_at")
				->sortable(),
			Column::make("Updated at", "updated_at")
				->sortable(),
			Column::make('Activar/Desactivar')
				->label(function ($row) {
					return '';
				}),
		];

		array_push(
			$columns,
			Column::make('Acciones')
				->label(
					function ($row) {
						$edit = '<a href="' . route('panel.sucursal.edit', ["id" => $row->id]) . '" type="button" class="font-medium text-emerald-600 dark:text-emerald-500 mr-2">
							<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
								<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
								<path d="M16 5l3 3"></path>
							</svg>
						</button>';
						return $edit;
					}
				)->html()
		);

		return $columns;
	}
}
