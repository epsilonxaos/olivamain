<?php

namespace Database\Seeders;

use App\Models\Gallery;
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
		DB::table('galleries')->truncate();
		DB::table('websites')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS = 1;');

		for ($i = 1; $i <= 13; $i++) {
			Gallery::create([
				"cover" => "img/home/galeria/$i.webp",
				"section" => 'principal'
			]);
		}

		$web = Website::create([
			"contact_mail_bolsa" => 'rh@olivamerida.com',
			'contact_mail_facturacion' => 'factura@olivamerida.com',
			'contact_mail_eventos' => 'info@olivamerida.com',
			'home_nosotros_img' => 'img/home/olivo.png',
			'home_nosotros_img1' => 'img/home/slide/1.webp',
			'home_nosotros_img2' => 'img/home/slide/2.webp',
			'home_nosotros_img3' => 'img/home/slide/3.webp',
			'home_nosotros_img4' => 'img/home/slide/4.webp',
			'home_nosotros_img5' => 'img/home/copa.png',
			'delivery_img' => 'img/en-casa.svg',
			'contact_cover' => 'img/contacto.webp',
			'bolsa_cover' => 'img/bolsa.webp',
			'events_cover' => 'img/events.webp',
			'reserva_cover' => 'img/reserva.webp',
			'reserva_form_img' => 'img/copa-form.png',
		]);

		foreach ($locales as $locale) {
			$web->translateOrNew($locale)->home_nosotros_title = $textos[$locale]->home_nosotros_title;
			$web->translateOrNew($locale)->home_nosotros_text = $textos[$locale]->home_nosotros_text;
			$web->translateOrNew($locale)->home_nosotros_text2 = $textos[$locale]->home_nosotros_text2;
			$web->translateOrNew($locale)->events_title = $textos[$locale]->events_title;
			$web->translateOrNew($locale)->events_text = $textos[$locale]->events_text;
			$web->translateOrNew($locale)->contact_title = $textos[$locale]->contact_title;
			$web->translateOrNew($locale)->contact_text = $textos[$locale]->contact_text;
			$web->translateOrNew($locale)->reserva_title = $textos[$locale]->reserva_title;
			$web->translateOrNew($locale)->reserva_text = $textos[$locale]->reserva_text;
			$web->translateOrNew($locale)->reserva_form_title = $textos[$locale]->reserva_form_title;
			$web->translateOrNew($locale)->reserva_form_text = $textos[$locale]->reserva_form_text;
			$web->translateOrNew($locale)->delivery_title = $textos[$locale]->delivery_title;
			$web->translateOrNew($locale)->delivery_text = $textos[$locale]->delivery_text;
			$web->translateOrNew($locale)->politicas = $textos[$locale]->politicas;
			$web->translateOrNew($locale)->bolsa_title = $textos[$locale]->bolsa_title;
			$web->translateOrNew($locale)->bolsa_text = $textos[$locale]->bolsa_text;
		}

		$web->save();
	}
}
