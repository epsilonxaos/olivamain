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
			$table->id();
			$table->string('title')->unique();
			$table->string('slug');
			$table->string('cover');
			$table->string('icon')->default('/img/icon-default-sucursal.svg');
			$table->string('croquisEs')->nullable();
			$table->string('croquisEn')->nullable();
			$table->string('address')->nullable();
			$table->string('phone')->nullable();
			$table->string('menu')->nullable();
			$table->string('urlDelivery')->nullable();
			$table->string('urlReservation')->nullable();
			$table->string('urlLocation')->nullable();
			$table->string('urlIn')->nullable();
			$table->string('urlFb')->nullable();
			$table->string('titleIn')->nullable();
			$table->text('horarioEs')->nullable();
			$table->text('horarioEn')->nullable();

			$table->timestamps();
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
