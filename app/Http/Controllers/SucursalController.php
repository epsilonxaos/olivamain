<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Sucursal;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SucursalController extends Controller
{
	protected $directorio = "public/sucursales";
	protected $locales = ['es', 'en'];
	protected $columnsFiles = [
		'cover',
		'logo',
		'logo_2',
		'croquisEs',
		'croquisEn',
		'menu',
		'img_1',
		'img_2',
		'img_3',
		'img_4',
		'img_5',
		'video',
		'cover_reservas'
	];

	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return view('panel.sucursales.index', [
			"title" => "Sucursales",
			"breadcrumb" => [
				[
					'title' => 'Sucursales',
					'active' => true,
				],

			]
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return view('panel.sucursales.create', [
			"title" => "Nueva sucursal",
			"breadcrumb" => [
				[
					'title' => 'Sucursales',
					'route' => 'panel.sucursal.index',
					'active' => false,
				],
				[
					'title' => 'Nueva',
					'active' => true,
				]
			]
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{

		$request->validate([
			'sucursal' => 'required|unique:sucursals|max:255',
			'cover' => 'required',
			'logo' => 'required',
			'logo_2' => 'required',
		], [
			'sucursal.required' => 'El título es obligatorio.',
			'sucursal.unique' => 'El título ya está en uso.',
			'sucursal.max' => 'El título no puede tener más de :max caracteres.',
			'cover.required' => 'La portada es obligatoria.',
			'logo.required' => 'El logo es obligatorio.',
			'logo_2.required' => 'La logo secundario es obligatorio.',
		]);

		$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
		$row = Sucursal::create([
			"sucursal" => $request->sucursal,
			"slug" => Str::slug($request->sucursal, '-'),
			"cover" => $cover
		]);

		foreach ($this->columnsFiles as $column) {
			if ($request->hasFile($column) && $column != 'cover') {
				$file = Helpers::addFileStorage($request->file($column), $this->directorio);
				$row->$column = $file;
				$row->save();
			}
		}

		$row->reserva_iframe = $request->reserva_iframe;
		$row->delivery = $request->delivery;
		$row->reserva = $request->reserva;
		$row->maps = $request->maps;

		$row->urlIn = $request->urlIn;
		$row->urlFb = $request->urlFb;
		$row->phone = $request->phone;

		$row->save();

		foreach ($this->locales as $locale) {
			$row->translateOrNew($locale)->descripcion = $request->descripcion[$locale];
			$row->translateOrNew($locale)->horario = $request->horario[$locale];
			$row->translateOrNew($locale)->direccion = $request->direccion[$locale];
			$row->translateOrNew($locale)->ubicacion = $request->ubicacion[$locale];
			$row->translateOrNew($locale)->titulo_reservas = $request->titulo_reservas[$locale];
			$row->translateOrNew($locale)->descripcion_reservas = $request->descripcion_reservas[$locale];
		}

		$row->save();

		return redirect()->back()->with('success', 'El registro se ha creado correctamente');
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Int $id)
	{

		$sucursal = Sucursal::find($id);

		return view('panel.sucursales.edit', [
			'title' => 'Editar Sucursal',
			'breadcrumb' => [
				[
					'title' => 'Sucursal',
					'route' => 'panel.sucursal.index',
					'active' => false,
				],
				[
					'title' => 'Editar',
					'route' => 'panel.sucursal.edit',
					'params' => [
						'id' => $sucursal->id
					],
					'active' => true
				]
			],
			'data' => $sucursal
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Int $id, Request $request)
	{
		$request->validate([
			'sucursal' => 'required|unique:sucursals|max:255'
		], [
			'sucursal.required' => 'El título es obligatorio.',
			'sucursal.unique' => 'El título ya está en uso.',
			'sucursal.max' => 'El título no puede tener más de :max caracteres.',
		]);

		$row = Sucursal::find($id);

		foreach ($this->columnsFiles as $column) {
			if ($request->hasFile($column)) {
				Helpers::deleteFileStorage('sucursals', $column, $id);
				$file = Helpers::addFileStorage($request->file($column), $this->directorio);
				$row->$column = $file;
				$row->save();
			}
		}

		$row->sucursal = $request->sucursal;
		$row->reserva_iframe = $request->reserva_iframe;
		$row->delivery = $request->delivery;
		$row->reserva = $request->reserva;
		$row->maps = $request->maps;

		$row->urlIn = $request->urlIn;
		$row->urlFb = $request->urlFb;
		$row->phone = $request->phone;

		$row->save();

		foreach ($this->locales as $locale) {
			$row->translateOrNew($locale)->descripcion = $request->descripcion[$locale];
			$row->translateOrNew($locale)->horario = $request->horario[$locale];
			$row->translateOrNew($locale)->direccion = $request->direccion[$locale];
			$row->translateOrNew($locale)->ubicacion = $request->ubicacion[$locale];
			$row->translateOrNew($locale)->titulo_reservas = $request->titulo_reservas[$locale];
			$row->translateOrNew($locale)->descripcion_reservas = $request->descripcion_reservas[$locale];
		}

		$row->save();

		return redirect()->back()->with('success', 'El registro se ha actualizado correctamente');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Int $id)
	{

		foreach ($this->columnsFiles as $column) {
			Helpers::deleteFileStorage('sucursals', $column, $id);
		}

		Sucursal::where('id', $id)->delete();
		return redirect()->back()->with('success', 'El registro se ha eliminado correctamente');
	}
}
