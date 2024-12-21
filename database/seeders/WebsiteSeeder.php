<?php

namespace Database\Seeders;

use App\Models\Website;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class WebsiteSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		$locales = config('translatable.locale') ?? ['es', 'en'];
		$textES = File::get(database_path("data/lang/es.json"));
		$textEN = File::get(database_path("data/lang/en.json"));

		$textos = [
			'es' => json_decode($textES),
			'en' => json_decode($textEN),
		];

		DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
		DB::table('websites')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS = 1;');

		$web = Website::create([
			"contact_mail_bolsa" => 'rh@olivamerida.com',
		]);

		foreach ($locales as $locale) {
			$web->translateOrNew($locale)->home_nosotros_title = $textos[$locale]->home_nosotros_title;
		}

		$web->save();
	}
}
