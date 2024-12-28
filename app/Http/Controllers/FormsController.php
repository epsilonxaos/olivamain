<?php

namespace App\Http\Controllers;

use App\Models\Forms;
use Illuminate\Http\Request;

class FormsController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {}

	/**
	 * Display the specified resource.
	 */
	public function show(Forms $forms)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(String $section)
	{
		$form = Forms::where('section', $section);

		$view = 'panel.forms.' . $section;

		return view($view, [
			'title' => 'Editar formulario',
			'breadcrumb' => [
				[
					'title' => 'Formulario',
					'route' => 'panel.forms.edit',
					'params' => [
						'section' => $section
					],
					'active' => true,
				]
			],
			'data' => $form
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Forms $forms)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Forms $forms)
	{
		//
	}
}
