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
			$table->string('logo')->default('logo.png');
			$table->string('logo_2')->default('logo.png');
			$table->string('video')->default('video.mp4');

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
			$table->integer('sucursal_id')->unsigned();
			$table->string('locale')->index();

			$table->longText('descripcion')->nullable();
			$table->longText('horario')->nullable();
			$table->string('direccion')->nullable();
			$table->string('ubicacion')->nullable();

			$table->string('titulo_reservas');
			$table->longText('descripcion_reservas')->nullable();

			$table->unique(['sucursal_id', 'locale']);
			$table->foreign('sucursal_id')->references('id')->on('sucursals')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('sucursals_translations');
		Schema::dropIfExists('sucursals');
	}
};
