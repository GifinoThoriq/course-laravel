<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CourseController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

//Course
Route::middleware(['auth', 'verified'])
    ->get('/course', [CourseController::class, 'index'])
    ->name('course');

//Course Create
Route::middleware(['auth', 'verified'])
    ->post('/course/{user}', [CourseController::class, 'create']) //get from controller namne
    ->name('course.create');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
