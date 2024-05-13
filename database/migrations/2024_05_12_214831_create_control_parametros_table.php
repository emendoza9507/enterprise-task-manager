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
        Schema::create('control_parametros', function (Blueprint $table) {
            $table->foreignId('control_id')->references('id')->on('controles_tareas_estados');
            $table->foreignId('parametro_id')->references('id')->on('parametros');

            $table->decimal('evaluacion');
            $table->string('observacion')->nullable();

            $table->primary(['control_id', 'parametro_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('control_parametros');
    }
};
