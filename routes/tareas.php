<?php

use App\Http\Controllers\TareaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function() {
    Route::get('/tareas', fn() => Inertia::render('Tarea/MisTareas'));
    Route::get('/tareas/nueva', fn() => Inertia::render('Tarea/NuevaTarea'));
    Route::get('/tareas/asignadas', fn() => Inertia::render('Tarea/TareasAsignadas'));
});
