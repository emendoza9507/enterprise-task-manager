<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function obtenerTrabajadores(Request $request) {
        $usuarios = User::where('user_boss_id', auth()->user()->id)->get();

        return response()->json($usuarios);
    }
}
