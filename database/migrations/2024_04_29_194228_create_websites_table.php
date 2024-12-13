<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('websites', function (Blueprint $table) {
			$table->increments('id');


			// * Contacto

			$table->string('contact_cover')->nullable();
			$table->string('contact_mail_bolsa')->nullable();
			$table->string('contact_cc_mail_bolsa')->nullable();
			$table->string('contact_mail_facturacion')->nullable();
			$table->string('contact_cc_mail_facturacion')->nullable();
			$table->string('contact_mail_eventos')->nullable();
			$table->string('contact_cc_mail_eventos')->nullable();

			$table->string('events_cover')->nullable();

			$table->string('reserva_cover')->nullable();

			$table->timestamps();
		});

		Schema::create('websites_translations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('website_id')->unsigned();
			$table->string('locale')->index();

			$table->string('politicas')->nullable();

			$table->string('home_nosotros_title')->nullable();
			$table->longText('home_nosotros_text')->nullable();
			$table->longText('home_nosotros_text2')->nullable();

			$table->string('events_title')->nullable();
			$table->longText('events_text')->nullable();

			$table->string('contact_title')->nullable();
			$table->longText('contact_text')->nullable();

			$table->string('reserva_title')->nullable();
			$table->longText('reserva_text')->nullable();
			$table->string('reserva_form_title')->nullable();
			$table->longText('reserva_form_text')->nullable();

			$table->unique(['website_id', 'locale']);
			$table->foreign('website_id')->references('id')->on('websites')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('websites_translations');
		Schema::dropIfExists('websites');
	}
};
