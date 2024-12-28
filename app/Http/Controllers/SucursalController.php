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
		'bg',
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
		'cover_reservas',
		'logo_delivery',
		'cover_delivery',
		'cover_eventos',

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
		$row->activo_reservas = isset($request->activo_reservas) ? 1 : 0;
		$row->activo_eventos = isset($request->activo_eventos) ? 1 : 0;
		$row->url_delivery = $request->url_delivery;

		$row->instagram = $request->instagram;
		$row->urlIn = $request->urlIn;
		$row->urlFb = $request->urlFb;
		$row->phone = $request->phone;

		$row->save();

		foreach ($this->locales as $locale) {
			if (isset($request->descripcion[$locale])) {
				$row->translateOrNew($locale)->descripcion = $request->descripcion[$locale];
			}
			if (isset($request->horario[$locale])) {
				$row->translateOrNew($locale)->horario = $request->horario[$locale];
			}
			if (isset($request->direccion[$locale])) {
				$row->translateOrNew($locale)->direccion = $request->direccion[$locale];
			}
			if (isset($request->ubicacion[$locale])) {
				$row->translateOrNew($locale)->ubicacion = $request->ubicacion[$locale];
			}
			if (isset($request->titulo_reservas[$locale])) {
				$row->translateOrNew($locale)->titulo_reservas = $request->titulo_reservas[$locale];
			}
			if (isset($request->descripcion_reservas[$locale])) {
				$row->translateOrNew($locale)->descripcion_reservas = $request->descripcion_reservas[$locale];
			}
			if (isset($request->titulo_eventos[$locale])) {
				$row->translateOrNew($locale)->titulo_eventos = $request->titulo_eventos[$locale];
			}
			if (isset($request->descripcion_eventos[$locale])) {
				$row->translateOrNew($locale)->descripcion_eventos = $request->descripcion_eventos[$locale];
			}
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
		$row = Sucursal::find($id);

		$request->validate([
			'sucursal' => 'required|unique:sucursals,sucursal,' . $row->id . '|max:255'
		], [
			'sucursal.required' => 'El título es obligatorio.',
			'sucursal.unique' => 'El título ya está en uso.',
			'sucursal.max' => 'El título no puede tener más de :max caracteres.',
		]);

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
		$row->activo_reservas = isset($request->activo_reservas) ? 1 : 0;
		$row->activo_eventos = isset($request->activo_eventos) ? 1 : 0;
		$row->url_delivery = $request->url_delivery;

		$row->instagram = $request->instagram;
		$row->urlIn = $request->urlIn;
		$row->urlFb = $request->urlFb;
		$row->phone = $request->phone;

		$row->save();

		foreach ($this->locales as $locale) {
			if (isset($request->descripcion[$locale])) {
				$row->translateOrNew($locale)->descripcion = $request->descripcion[$locale];
			}
			if (isset($request->horario[$locale])) {
				$row->translateOrNew($locale)->horario = $request->horario[$locale];
			}
			if (isset($request->direccion[$locale])) {
				$row->translateOrNew($locale)->direccion = $request->direccion[$locale];
			}
			if (isset($request->ubicacion[$locale])) {
				$row->translateOrNew($locale)->ubicacion = $request->ubicacion[$locale];
			}
			if (isset($request->titulo_reservas[$locale])) {
				$row->translateOrNew($locale)->titulo_reservas = $request->titulo_reservas[$locale];
			}
			if (isset($request->descripcion_reservas[$locale])) {
				$row->translateOrNew($locale)->descripcion_reservas = $request->descripcion_reservas[$locale];
			}
			if (isset($request->titulo_eventos[$locale])) {
				$row->translateOrNew($locale)->titulo_eventos = $request->titulo_eventos[$locale];
			}
			if (isset($request->descripcion_eventos[$locale])) {
				$row->translateOrNew($locale)->descripcion_eventos = $request->descripcion_eventos[$locale];
			}
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
