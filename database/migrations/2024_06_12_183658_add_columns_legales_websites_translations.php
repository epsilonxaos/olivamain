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
		Schema::table('websites_translations', function (Blueprint $table) {
			$table->longText('politicas_privacidad')->nullable();
			$table->longText('politicas_reservacion')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::table('websites_translations', function (Blueprint $table) {
			$table->dropColumn('politicas_privacidad');
			$table->dropColumn('politicas_reservacion');
		});
	}
};
