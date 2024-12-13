<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Website extends Model implements TranslatableContract

{
	use HasFactory;
	use Translatable;

	public $translatedAttributes = [
		'politicas',
		'home_nosotros_title',
		'home_nosotros_text',
		'home_nosotros_text2',
		'events_title',
		'events_text',
		'contact_title',
		'contact_text',
		'reserva_title',
		'reserva_text',
		'reserva_form_title',
		'reserva_form_text',
	];
	protected $primarykey = 'id';
	protected $table = 'websites';
	protected $fillables = [
		'contact_cover',
		'contact_mail_bolsa',
		'contact_cc_mail_bolsa',
		'contact_mail_facturacion',
		'contact_cc_mail_facturacion',
		'contact_mail_eventos',
		'contact_cc_mail_eventos',
		'events_cover',
		'reserva_cover',
	];
}
