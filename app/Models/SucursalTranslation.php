<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SucursalTranslation extends Model
{
	public $timestamps = false;
	protected $table = 'sucursals_translations';
	protected $fillable = [
		'descripcion',
		'horario',
		'direccion',
		'ubicacion',
		'titulo_reservas',
		'descripcion_reservas',
		'titulo_eventos',
		'descripcion_eventos',
	];
}
