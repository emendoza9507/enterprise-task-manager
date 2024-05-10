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
        Schema::create('tareas_estados', function (Blueprint $table) {
            $table->foreignId('tarea_id')->references('id')->on('tareas');
            $table->foreignId('estado_id')->references('id')->on('estados');
            $table->date('fecha');

            $table->primary(['tarea_id', 'estado_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas_estados');
    }
};
