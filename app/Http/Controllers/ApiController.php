<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Sucursal;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{

	public function getHomeResources()
	{


		$web = Website::translated()->where('id', 1)->first();
		$galeria = Gallery::all();
		$sucursales = Sucursal::select(
			'sucursal',
			'slug',
		)->where('status', 1)->get();

		$resources = [
			"website" => $web,
			"galeria" => $galeria,
			"sucursals" => $sucursales
		];

		return response($resources, 200);
	}

	public function getSucursal(String $slug)
	{
		try {
			$resource = Sucursal::where('slug', $slug)->first();
			if ($resource)
				return response($resource, 200);
			else
				return response([], 404);
		} catch (\Throwable $th) {
			Log::error($th);
			return response([], 404);
		}
	}
}
