<?php

namespace App\Http\Controllers;

use App\Models\Tarea;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    public function index() {

    }

    public function asignadas(Request $request) {
        $tareas = Tarea::where('responsabe', auth()->user()->id)->paginate();

        return response()->json($tareas);
    }
}
