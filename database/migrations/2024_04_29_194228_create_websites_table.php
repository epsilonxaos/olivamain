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
			$table->string("video");
			$table->string("videoM");
			$table->string("url_fb")->nullable();
			$table->string("url_in")->nullable();
			$table->string("url_sp")->nullable();
			$table->string("url_ta")->nullable();
			$table->string("email_facturacion")->nullable();
			$table->string("email_bolsa")->nullable();
			$table->string("email_eventos")->nullable();
			$table->string('bolsa_s1_cover')->nullable();
			$table->string('events_s1_cover')->nullable();
			$table->timestamps();
		});

		Schema::create('websites_translations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('website_id')->unsigned();
			$table->string('locale')->index();

			$table->string('home_s1_title');
			$table->text('home_s1_text');
			$table->string('home_s5_title');
			$table->string('bolsa_s1_title');
			$table->text('bolsa_s1_text');
			$table->string('events_s1_title');
			$table->text('events_s1_text');

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
