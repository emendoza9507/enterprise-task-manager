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
        Schema::create('controles_tareas_estados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tarea_id')->references('tarea_id')->on('tareas_estados');
            $table->foreignId('estado_id')->references('estado_id')->on('tareas_estados');
            $table->text('observacion');
            $table->boolean('realizado')->default(false);
            $table->decimal('evaluacion')->nullable();
            $table->dateTime('fecha_control');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('controls');
    }
};
