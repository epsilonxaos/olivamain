<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
{
	private $directorio = "public/galeria";

	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return view('panel.galeria.index', [
			"title" => "Galeria Home",
			"breadcrumb" => [
				[
					'title' => 'Galeria',
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
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$input = $request->all();
		$rules = [
			'file' => 'mimes:jpeg,jpg,png,webp|max:1024'
		];

		$validation = Validator::make($input, $rules);

		if ($validation->fails()) {
			return Response::json('Limite de peso excedido', 400);
		}

		$file = $request->file('file');
		$cover = Helpers::addFileStorage($file, $this->directorio);
		$add = new Gallery();
		$add->cover = $cover;
		$add->section = $request->section;
		$add->save();

		return Response::json('success', 200);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Gallery $gallery)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Gallery $gallery)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Gallery $gallery)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Request $request)
	{
		Helpers::deleteFileStorage('galleries', 'cover', $request->id);
		Gallery::where('id', $request->id)->delete();

		return 'true';
	}
}
