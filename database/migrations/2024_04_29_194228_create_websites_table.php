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
			$table->id();
			$table->string("url_fb")->nullable();
			$table->string("url_in")->nullable();
			$table->string("url_sp")->nullable();
			$table->string("url_ta")->nullable();
			$table->string("email_facturacion")->nullable();
			$table->string("email_bolsa")->nullable();
			$table->string("email_eventos")->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('websites');
	}
};
