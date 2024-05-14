<?php

namespace App\Http\Controllers;

use App\Models\Tarea;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    public function index() {

    }

    public function asignadas(Request $request) {
        $tareas = Tarea::with('responsable:id,name')->where('creada_por', auth()->user()->id)->paginate(10);

        return response()->json($tareas);
    }
}
