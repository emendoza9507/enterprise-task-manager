<?php

namespace Database\Seeders;

use App\Models\Tarea;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Eduardo Mendoza Campos',
            'email' => 'eduardo.mendoza@rch.transtur.cu',
            'password' => Hash::make('matahambre')
        ]);

        User::factory(10)->create([
            'user_boss_id' => 1
        ]);

        Tarea::factory()
            ->count(20)
            ->state(new Sequence(
                fn(Sequence $sequence) => ['responsable' => User::whereNot('id', 1)->get()->random()]
            ))
            ->create(['creada_por' => 1]);


        $this->call([
            EstadoSeeder::class
        ]);
    }
}
