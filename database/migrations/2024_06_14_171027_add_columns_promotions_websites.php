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
		Schema::table('Websites', function (Blueprint $table) {
			$table->string('img_promo')->nullable();
			$table->string('img_promo_movil')->nullable();
			$table->text('emails_cc')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::table('Websites', function (Blueprint $table) {
			$table->dropColumn('img_promo');
			$table->dropColumn('img_promo_movil');
			$table->dropColumn('emails_cc');
		});
	}
};
