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
			'video' => 'video/video.mp4',
			'videoM' => 'video/video-movil.mp4',
			"email_facturacion" => 'factura@olivamerida.com',
			"email_bolsa" => 'rh@olivamerida.com',
			"email_eventos" => 'reservas@olivamerida.com'
		]);

		foreach ($locales as $locale) {
			$web->translateOrNew($locale)->home_s1_title = $textos[$locale]->home_s1_title;
			$web->translateOrNew($locale)->home_s1_text = $textos[$locale]->home_s1_text;
			$web->translateOrNew($locale)->home_s5_title = $textos[$locale]->home_s5_title;
			$web->translateOrNew($locale)->bolsa_s1_title = $textos[$locale]->bolsa_s1_title;
			$web->translateOrNew($locale)->bolsa_s1_text = $textos[$locale]->bolsa_s1_text;
			$web->translateOrNew($locale)->events_s1_title = $textos[$locale]->events_s1_title;
			$web->translateOrNew($locale)->events_s1_text = $textos[$locale]->events_s1_text;
		}

		$web->save();
	}
}
