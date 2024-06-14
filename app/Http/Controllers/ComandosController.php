<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class ComandosController extends Controller
{
	public function executeComands()
	{
		Artisan::call('migrate');
		Artisan::call('optimize:clear');
		Artisan::call('config:clear');
		Artisan::call('migrate');
		// Artisan::call('storage:link');
		// Artisan::call('db:seed', [
		// 	'--class' => 'PermissionSeeder'
		// ]);
		// Artisan::call('db:seed', [
		// 	'--class' => 'AdminSeeder'
		// ]);

		return 'Comandos ejecutados con exito';
	}
}
