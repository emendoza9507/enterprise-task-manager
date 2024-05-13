<?php

use App\Http\Controllers\TareaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function() {
    Route::get('/tareas', function () {
        return Inertia::render('Tarea/MisTareas');
    });
    Route::get('/tareas/asignadas', function () {
        return Inertia::render('Tarea/TareasAsignadas');
    });
});
