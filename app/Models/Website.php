<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Website extends Model
{
	use HasFactory;

	protected $primarykey = 'id';
	protected $table = 'websites';
	protected $fillables = [
		'url_fb',
		'url_in',
		'url_sp',
		'url_ta',
		'email_facturacion',
		'email_bolsa',
		'email_eventos',
	];
}
