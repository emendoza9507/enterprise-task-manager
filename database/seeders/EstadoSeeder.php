<?php

namespace Database\Seeders;

use App\Models\Estado;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EstadoSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Estado::factory()->create([
            'nombre' => Estado::$INICIADA,
        ]);

        Estado::factory()->create([
            'nombre' => Estado::$PROGRESO,
        ]);

        Estado::factory()->create([
            'nombre' => Estado::$CUMPLIDO,
        ]);

        Estado::factory()->create([
            'nombre' => Estado::$INCUMPLIDO,
        ]);

    }
}
