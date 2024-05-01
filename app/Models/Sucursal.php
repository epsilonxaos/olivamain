<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sucursal extends Model
{
	use HasFactory;

	protected $primaryKey = 'id';
	protected $table = 'sucursals';
	protected $fillable = [
		"title",
		"slug",
		"cover",
		"icon",
		"croquisEs",
		"croquisEn",
		"address",
		"phone",
		"menu",
		"urlDelivery",
		"urlReservation",
		"urlLocation",
		"urlIn",
		"urlFb",
		"titleIn",
		"horarioEs",
		"horarioEn"
	];
}
