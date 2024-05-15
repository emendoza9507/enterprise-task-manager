<?php

use App\Http\Controllers\DefaultController;
use App\Http\Controllers\TareaController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->prefix('/v1')->name('api.')->group(function() {
    // TAREAS
    Route::prefix('/tareas')->name('tareas.')->group(function() {
        Route::get('/asignadas', [TareaController::class, 'asignadas'])->name('asignadas');
    });

    Route::prefix('/usuario')->name('usuario.')->group(function () {
        Route::get('/trabajadores', [DefaultController::class, 'obtenerTrabajadores'])->name('trabajadores');
    });
});
