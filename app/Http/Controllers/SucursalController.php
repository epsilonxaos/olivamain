<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Sucursal;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SucursalController extends Controller
{
	protected $directorio = "public/sucursales";

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

		$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
		$row = Sucursal::create([
			"title" => $request->title,
			"slug" => Str::slug($request->title, '-'),
			"cover" => $cover
		]);

		if ($request->hasFile('icon')) {
			$icon = Helpers::addFileStorage($request->file('icon'), $this->directorio);
			$row->icon = $icon;
			$row->save();
		}

		if ($request->hasFile('corquisEs')) {
			$corquisEs = Helpers::addFileStorage($request->file('corquisEs'), $this->directorio);
			$row->corquisEs = $corquisEs;
			$row->save();
		}

		if ($request->hasFile('corquisEn')) {
			$corquisEn = Helpers::addFileStorage($request->file('corquisEn'), $this->directorio);
			$row->corquisEn = $corquisEn;
			$row->save();
		}


		$row->address = $request->address;
		$row->phone = $request->phone;
		$row->urlDelivery = $request->urlDelivery;
		$row->urlReservation = $request->urlReservation;
		$row->urlLocation = $request->urlLocation;
		$row->urlIn = $request->urlIn;
		$row->urlFb = $request->urlFb;
		$row->titleIn = $request->titleIn;
		$row->horarioEs = $request->horarioEs;
		$row->horarioEn = $request->horarioEn;

		$row->save();

		return redirect()->back()->with('success', 'El registro se ha creado correctamente');
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Sucursal $sucursal)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Int $id)
	{

		$sucursal = Sucursal::find($id);
		return view('panel.sucursales.edit', [
			'title' => 'Editar valores',
			'breadcrumb' => [
				[
					'title' => 'Valores',
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

		if ($request->hasFile('cover')) {
			Helpers::deleteFileStorage('sucursals', 'cover', $id);
			$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
			$row->cover = $cover;
			$row->save();
		}

		if ($request->hasFile('icon')) {
			Helpers::deleteFileStorage('sucursals', 'icon', $id);
			$icon = Helpers::addFileStorage($request->file('icon'), $this->directorio);
			$row->icon = $icon;
			$row->save();
		}

		if ($request->hasFile('corquisEs')) {
			Helpers::deleteFileStorage('sucursals', 'corquisEs', $id);
			$corquisEs = Helpers::addFileStorage($request->file('corquisEs'), $this->directorio);
			$row->corquisEs = $corquisEs;
			$row->save();
		}

		if ($request->hasFile('corquisEn')) {
			Helpers::deleteFileStorage('sucursals', 'corquisEn', $id);
			$corquisEn = Helpers::addFileStorage($request->file('corquisEn'), $this->directorio);
			$row->corquisEn = $corquisEn;
			$row->save();
		}


		$row->address = $request->address;
		$row->phone = $request->phone;
		$row->urlDelivery = $request->urlDelivery;
		$row->urlReservation = $request->urlReservation;
		$row->urlLocation = $request->urlLocation;
		$row->urlIn = $request->urlIn;
		$row->urlFb = $request->urlFb;
		$row->titleIn = $request->titleIn;
		$row->horarioEs = $request->horarioEs;
		$row->horarioEn = $request->horarioEn;

		$row->save();

		return redirect()->back()->with('success', 'El registro se ha actualizado correctamente');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Sucursal $sucursal)
	{
		//
	}
}
