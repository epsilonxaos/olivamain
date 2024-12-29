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
		Schema::create('forms', function (Blueprint $table) {
			$table->increments("id");
			$table->string('section');
			$table->string('name');
			$table->enum('type', ["text", "number", "telefono", "email", "textarea", "select"]);
			$table->text('options')->nullable();
			$table->boolean('required')->default(false);

			$table->timestamps();
		});

		Schema::create('form_translations', function (Blueprint $table) {
			$table->increments("id");
			$table->integer('forms_id')->unsigned();
			$table->string('locale')->index();

			$table->string('label');
			$table->string('placeholder')->nullable();

			$table->unique(['forms_id', 'locale']);
			$table->foreign('forms_id')->references('id')->on('forms')->onDelete('cascade');
		});
	}
	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('form_translations');
		Schema::dropIfExists('forms');
	}
};
