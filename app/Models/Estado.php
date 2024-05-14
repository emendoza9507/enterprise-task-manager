<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory;

    public static $INCUMPLIDO = 'INCUMPLIDA';
    public static $CUMPLIDO = 'CUMPLIDA';
    public static $INICIADA = 'INICIADA';
    public static $PROGRESO = 'PROGRESA';

    protected $guarderd = [];
}
