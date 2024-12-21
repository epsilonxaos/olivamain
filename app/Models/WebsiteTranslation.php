<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebsiteTranslation extends Model
{
	public $timestamps = false;
	protected $table = 'websites_translations';
	protected $fillable = [
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
}
