<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Gallery;
use App\Models\Website;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{

	protected $directorio = "public/website";
	protected $locales = ['es', 'en'];
	protected $columnsFiles = [
		'home_nosotros_img',
		'home_nosotros_img1',
		'home_nosotros_img2',
		'home_nosotros_img3',
		'home_nosotros_img4',
		'home_nosotros_img5',
		'contact_cover',
		'events_cover',
		'reserva_form_img',
		'reserva_cover',
		'delivery_img',
		'bolsa_cover',
	];


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(String $seccion)
	{
		$params = [
			'title' => ucfirst($seccion) . " - Actualizar sección",
			'breadcrumb' => [
				[
					'title' => ucfirst($seccion),
					'route' => 'panel.website.edit',
					'params' => [
						'seccion' => $seccion
					],
					'active' => true,
				]
			],
			'data' => Website::find(1),
			'galeria' => Gallery::all()
		];

		$view = 'panel.website.' . $seccion;
		return view($view, $params);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(String $seccion, Request $request)
	{
		$id = 1;
		$upd = Website::find(1);

		foreach ($this->columnsFiles as $column) {
			if ($request->hasFile($column)) {
				Helpers::deleteFileStorage('websites', $column, $id);
				$file = Helpers::addFileStorage($request->file($column), $this->directorio);
				$upd->$column = $file;
				$upd->save();
			}
		}

		if ($request->has('contact_cover')) $upd->contact_cover = $request->contact_cover;
		if ($request->has('contact_mail_bolsa')) $upd->contact_mail_bolsa = $request->contact_mail_bolsa;
		if ($request->has('contact_cc_mail_bolsa')) $upd->contact_cc_mail_bolsa = $request->contact_cc_mail_bolsa;
		if ($request->has('contact_mail_facturacion')) $upd->contact_mail_facturacion = $request->contact_mail_facturacion;
		if ($request->has('contact_cc_mail_facturacion')) $upd->contact_cc_mail_facturacion = $request->contact_cc_mail_facturacion;
		if ($request->has('contact_mail_eventos')) $upd->contact_mail_eventos = $request->contact_mail_eventos;
		if ($request->has('contact_cc_mail_eventos')) $upd->contact_cc_mail_eventos = $request->contact_cc_mail_eventos;


		foreach ($this->locales as $locale) {
			if ($request->has('politicas')) $upd->translateOrNew($locale)->politicas = $request->politicas[$locale];

			if ($request->has('home_nosotros_title')) $upd->translateOrNew($locale)->home_nosotros_title = $request->home_nosotros_title[$locale];
			if ($request->has('home_nosotros_text')) $upd->translateOrNew($locale)->home_nosotros_text = $request->home_nosotros_text[$locale];
			if ($request->has('home_nosotros_text2')) $upd->translateOrNew($locale)->home_nosotros_text2 = $request->home_nosotros_text2[$locale];

			if ($request->has('events_title')) $upd->translateOrNew($locale)->events_title = $request->events_title[$locale];
			if ($request->has('events_text')) $upd->translateOrNew($locale)->events_text = $request->events_text[$locale];

			if ($request->has('contact_title')) $upd->translateOrNew($locale)->contact_title = $request->contact_title[$locale];
			if ($request->has('contact_text')) $upd->translateOrNew($locale)->contact_text = $request->contact_text[$locale];

			if ($request->has('reserva_title')) $upd->translateOrNew($locale)->reserva_title = $request->reserva_title[$locale];
			if ($request->has('reserva_text')) $upd->translateOrNew($locale)->reserva_text = $request->reserva_text[$locale];
			if ($request->has('reserva_form_title')) $upd->translateOrNew($locale)->reserva_form_title = $request->reserva_form_title[$locale];
			if ($request->has('reserva_form_text')) $upd->translateOrNew($locale)->reserva_form_text = $request->reserva_form_text[$locale];

			if ($request->has('delivery_title')) $upd->translateOrNew($locale)->delivery_title = $request->delivery_title[$locale];
			if ($request->has('delivery_text')) $upd->translateOrNew($locale)->delivery_text = $request->delivery_text[$locale];

			if ($request->has('bolsa_title')) $upd->translateOrNew($locale)->bolsa_title = $request->bolsa_title[$locale];
			if ($request->has('bolsa_text')) $upd->translateOrNew($locale)->bolsa_text = $request->bolsa_text[$locale];
		}

		$upd->save();
		return redirect()->back()->with('success', 'El registro se ha actualizado correctamente');
	}
}
