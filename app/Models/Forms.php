<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forms extends Model implements TranslatableContract
{
	use HasFactory;
	use Translatable;

	public $translatedAttributes = [
		'label',
		'placeholder',
	];

	protected $primaryKey = 'id';
	protected $table = 'forms';
	protected $fillable = [
		"section",
		"name",
		"type",
		"options",
		"required",
	];
}
