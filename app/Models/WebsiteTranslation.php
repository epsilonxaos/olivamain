<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebsiteTranslation extends Model
{
	public $timestamps = false;
	protected $table = 'websites_translations';
	protected $fillable = [
		'home_s1_title',
		'home_s1_text',
		'home_s5_title',
		'bolsa_s1_title',
		'bolsa_s1_text',
		'events_s1_title',
		'events_s1_text',
		'politicas_privacidad',
		'politicas_reservacion'
	];
}
