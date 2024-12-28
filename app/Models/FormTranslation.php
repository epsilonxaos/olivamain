<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormTranslation extends Model
{
	public $timestamps = false;
	protected $table = 'form_translations';
	protected $fillable = [
		'label',
		'placeholder',
	];
}
