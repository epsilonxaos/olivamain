<?php

namespace App\Http\Controllers;

use App\Models\Forms;
use Illuminate\Http\Request;
use Livewire\Features\SupportFormObjects\Form;

class FormsController extends Controller
{

	protected $locales = ['es', 'en'];

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
		$form = Forms::where('section', $section)->get();

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
			'data' => $form,
			'section' => $section
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(String $section, Request $request)
	{

		if ($request->has('name')) {
			$inputs = $request->name;

			foreach ($inputs as $key => $input) {
				$row = Forms::find($key);
				$row->name = $input;
				$row->type = $request->type[$key];
				$row->options = $request->options[$key];
				$row->required = isset($request->required[$key]) ? 1 : 0;

				foreach ($this->locales as $locale) {
					if (isset($request->label[$locale])) {
						$row->translateOrNew($locale)->label = $request->label[$locale][$key];
					}
					if (isset($request->placeholder[$locale])) {
						$row->translateOrNew($locale)->placeholder = $request->placeholder[$locale][$key];
					}
				}

				$row->save();
			}
		}


		if ($request->has('new_name')) {
			$newInputs = $request->new_name;

			foreach ($newInputs as $key => $input) {
				$row = Forms::create([
					'section' => $section,
					'name' => $input,
					'type' => $request->new_type[$key],
					'options' => $request->new_options[$key],
					'required' => isset($request->new_required[$key]) ? 1 : 0,
				]);

				foreach ($this->locales as $locale) {
					if (isset($request->new_label[$locale])) {

						$row->translateOrNew($locale)->label = $request->new_label[$locale][$key];
					}
					if (isset($request->new_placeholder[$locale])) {
						$row->translateOrNew($locale)->placeholder = $request->new_placeholder[$locale][$key];
					}
				}

				$row->save();
			}
		}

		return redirect()->route('panel.forms.edit', ['section' => $section]);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Int $id)
	{
		Forms::destroy($id);

		return response()->json([
			'success' => true,
			'message' => 'Elemento eliminado correctamente'
		])->setStatusCode(200);
	}
}
