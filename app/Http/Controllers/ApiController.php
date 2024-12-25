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
		$galeria = Gallery::select('id', 'cover', 'section')->get();
		$sucursales = Sucursal::where('status', 1)->get();

		$resources = [
			"website" => $web,
			"galeria" => $galeria,
			"sucursals" => $sucursales
		];

		return response($resources, 200);
	}

	public function getSucursal(Request $request)
	{
		try {
			$resource = Sucursal::where('slug', $request->slug)->first();
			if ($resource) {
				return response($resource, 200);
			} else {
				return response([], 404);
			}
		} catch (\Throwable $th) {
			Log::error($th);
			return response([], 404);
		}
	}
}
