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
		'delivery_title',
		'delivery_text',
		'bolsa_title',
		'bolsa_text',
	];
	protected $primarykey = 'id';
	protected $table = 'websites';
	protected $fillables = [

		'home_nosotros_img',
		'home_nosotros_img1',
		'home_nosotros_img2',
		'home_nosotros_img3',
		'home_nosotros_img4',
		'home_nosotros_img5',

		'contact_cover',
		'contact_mail',
		'contact_cc_mail',
		'contact_mail_bolsa',
		'contact_cc_mail_bolsa',
		'contact_mail_facturacion',
		'contact_cc_mail_facturacion',
		'contact_mail_eventos',
		'contact_cc_mail_eventos',
		'events_cover',
		'reserva_cover',
		'bolsa_cover',
		'reserva_form_img',
		'delivery_img',
		'scripts',
	];
}
