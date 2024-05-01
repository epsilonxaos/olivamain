<?php

namespace App\Helpers;

use App\Providers\PermissionKey;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;

class Helpers
{
	/**
	 * Add files to storage.
	 *
	 * @param $request -> file  $file
	 * @param $directorio  $directorio
	 * @return $ruta
	 */
	public static function addFileStorage($file, $directorio)
	{
		$ruta = $file->store($directorio);
		$exploded = explode('/', $ruta);
		$exploded[0] = 'storage';
		$ruta = implode('/', $exploded);

		return $ruta;
	}

	/**
	 * Delete files from storage
	 *
	 * @param string Name table database $table
	 * @param string name column to database table  $name
	 * @param string Id of row  $id
	 */
	public static function deleteFileStorage(String $table, String $name, Int $id)
	{
		$file  = DB::table($table)->select($name)->where('id', $id)->first();

		if (File::exists($file->$name)) {
			File::delete($file->$name);
		}
	}

	/**
	 * Change status to show - hidden
	 *
	 * @param string Name table database $table
	 * @param string Id of row  $id
	 * @param string New status  $status
	 */
	public static function changeStatus($table, $id, $status)
	{
		DB::table($table)->where('id', $id)->update(['status' => $status]);
	}

	/**
	 * Return fecha en español - 01 de Marzo del 2021
	 * @param string Required date  $fecha
	 * @return string New Date
	 */
	/**
	 * Return fecha en español - 01 de Marzo del 2021
	 * @param string Required date  $fecha
	 * @return string New Date
	 */
	public static function dateSpanishComplete($fecha)
	{
		$meses = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

		$fecha = Carbon::parse($fecha);
		$mes = $meses[($fecha->format('n')) - 1];
		return $fecha->format('d') . ' de ' . $mes . ' del ' . $fecha->format('Y');
	}

	/**
	 * Return fecha en español corto - 01/Mar/2021
	 * @param string Required date  $fecha
	 * @return string New Date
	 */
	public static function dateSpanishShort($fecha)
	{
		$meses = array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic");

		$fecha = Carbon::parse($fecha);
		$mes = $meses[($fecha->format('n')) - 1];
		return $fecha->format('d') . '/' . $mes . '/' . $fecha->format('Y');
	}

	public static function validPermission($seccion, $accion)
	{
		if ($accion == 'editAndUpdate') {
			if (
				$seccion == 'capital' &&
				auth()->user()->hasAllPermissions([
					PermissionKey::Capital['permissions']['edit']['name'],
					PermissionKey::Capital['permissions']['update']['name']
				])
			) {
				return true;
			}
			if (
				$seccion == 'real' &&
				auth()->user()->hasAllPermissions([
					PermissionKey::Real['permissions']['edit']['name'],
					PermissionKey::Real['permissions']['update']['name']
				])
			) {
				return true;
			}
			if (
				$seccion == 'hospitality' &&
				auth()->user()->hasAllPermissions([
					PermissionKey::Hospitality['permissions']['edit']['name'],
					PermissionKey::Hospitality['permissions']['update']['name']
				])
			) {
				return true;
			}
			if (
				$seccion == 'entregados' &&
				auth()->user()->hasAllPermissions([
					PermissionKey::Entregados['permissions']['edit']['name'],
					PermissionKey::Entregados['permissions']['update']['name']
				])
			) {
				return true;
			}
		}

		if ($accion == 'update') {
			if (
				$seccion == 'capital' &&
				auth()->user()->hasPermissionTo(PermissionKey::Capital['permissions']['update']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'real' &&
				auth()->user()->hasPermissionTo(PermissionKey::Real['permissions']['update']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'hospitality' &&
				auth()->user()->hasPermissionTo(PermissionKey::Hospitality['permissions']['update']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'entregados' &&
				auth()->user()->hasPermissionTo(PermissionKey::Entregados['permissions']['update']['name'])
			) {
				return true;
			}
		}

		if ($accion == 'edit') {
			if (
				$seccion == 'capital' &&
				auth()->user()->hasPermissionTo(PermissionKey::Capital['permissions']['edit']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'real' &&
				auth()->user()->hasPermissionTo(PermissionKey::Real['permissions']['edit']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'hospitality' &&
				auth()->user()->hasPermissionTo(PermissionKey::Hospitality['permissions']['edit']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'entregados' &&
				auth()->user()->hasPermissionTo(PermissionKey::Entregados['permissions']['edit']['name'])
			) {
				return true;
			}
		}

		if ($accion == 'destroy') {
			if (
				$seccion == 'capital' &&
				auth()->user()->hasPermissionTo(PermissionKey::Capital['permissions']['destroy']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'real' &&
				auth()->user()->hasPermissionTo(PermissionKey::Real['permissions']['destroy']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'hospitality' &&
				auth()->user()->hasPermissionTo(PermissionKey::Hospitality['permissions']['destroy']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'entregados' &&
				auth()->user()->hasPermissionTo(PermissionKey::Entregados['permissions']['destroy']['name'])
			) {
				return true;
			}
		}

		if ($accion == 'create') {
			if (
				$seccion == 'capital' &&
				auth()->user()->hasPermissionTo(PermissionKey::Capital['permissions']['create']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'real' &&
				auth()->user()->hasPermissionTo(PermissionKey::Real['permissions']['create']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'hospitality' &&
				auth()->user()->hasPermissionTo(PermissionKey::Hospitality['permissions']['create']['name'])
			) {
				return true;
			}
			if (
				$seccion == 'entregados' &&
				auth()->user()->hasPermissionTo(PermissionKey::Entregados['permissions']['create']['name'])
			) {
				return true;
			}
		}
	}
}
