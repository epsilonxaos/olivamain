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
		Schema::create('sucursals', function (Blueprint $table) {
			$table->increments('id');

			$table->string('sucursal')->unique();
			$table->string('slug');
			$table->string('cover');
			$table->string('logo');
			$table->string('logo_2');
			$table->string('video');

			$table->string('cover_reservas')->nullable();

			$table->text('reserva_iframe')->nullable();
			$table->string('delivery')->nullable();
			$table->string('menu')->nullable();
			$table->string('reserva')->nullable();
			$table->text('maps')->nullable();

			$table->string('img_1')->nullable();
			$table->string('img_2')->nullable();
			$table->string('img_3')->nullable();
			$table->string('img_4')->nullable();
			$table->string('img_5')->nullable();

			$table->string('urlIn')->nullable();
			$table->string('urlFb')->nullable();
			$table->string('phone')->nullable();

			$table->tinyInteger('status')->default(1);
			$table->timestamps();
		});

		Schema::create('sucursals_translations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('sucursals_id')->unsigned();
			$table->string('locale')->index();

			$table->longText('descripcion');
			$table->longText('horario');
			$table->string('direccion');
			$table->string('ubicacion');

			$table->string('titulo_reservas');
			$table->longText('descripcion_reservas');

			$table->unique(['sucursals_id', 'locale']);
			$table->foreign('sucursals_id')->references('id')->on('sucursals')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('sucursals');
	}
};
