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

		$columnsInWebsite = [
			'scripts',
			'contact_mail',
			'contact_cc_mail',
			'contact_cover',
			'contact_mail_bolsa',
			'contact_cc_mail_bolsa',
			'contact_mail_facturacion',
			'contact_cc_mail_facturacion',
			'contact_mail_eventos',
			'contact_cc_mail_eventos',
		];

		foreach ($columnsInWebsite as $column) {
			if ($request->has($column)) {
				$upd->$column = $request->$column;
			}
		}

		$columnsInWebsiteTranslate = [
			'politicas',
			'home_nosotros_title',
			'home_nosotros_text',
			'home_nosotros_text2',
			'events_title',
			'events_text',
			'contact_title',
			'contact_text',
			'reserva_title',
			'reserva_text',
			'reserva_form_title',
			'reserva_form_text',
			'delivery_title',
			'delivery_text',
			'bolsa_title',
			'bolsa_text',
		];

		foreach ($this->locales as $locale) {


			foreach ($columnsInWebsiteTranslate as $column) {
				if ($request->has($column)) {
					$upd->translateOrNew($locale)->$column = $request->$column[$locale];
				}
			}
		}

		$upd->save();
		return redirect()->back()->with('success', 'El registro se ha actualizado correctamente');
	}
}
