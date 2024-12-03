<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sucursal extends Model implements TranslatableContract
{
	use HasFactory;
	use Translatable;

	public $translatedAttributes = [
		'descripcion',
		'horario',
		'direccion',
		'ubicacion',
		'titulo_reservas',
		'descripcion_reservas'
	];

	protected $primaryKey = 'id';
	protected $table = 'sucursals';
	protected $fillable = [
		"sucursal",
		"slug",
		"logo",
		"logo_2",
		"cover",
		"video",
		"cover_reservas",
		"reserva_iframe",
		"delivery",
		"menu",
		"reserva",
		"maps",
		"img_1",
		"img_2",
		"img_3",
		"img_4",
		"img_5",
		"urlIn",
		"urlFb",
		"phone",
		"status",
	];
}
