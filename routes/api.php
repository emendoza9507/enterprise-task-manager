<?php

use App\Http\Controllers\TareaController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->prefix('/v1')->group(function() {
    // TAREAS
    Route::prefix('/tareas')->group(function() {
        Route::get('/asignadas', [TareaController::class, 'asignadas']);
    });
});
