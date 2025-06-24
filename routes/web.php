<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ManageUsersController;

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

//Course view detail
Route::middleware(['auth', 'verified'])
    ->get('/course/{course}', [CourseController::class, 'view'])
    ->name('course.view');

//Course edit detail page
Route::middleware(['auth', 'verified'])
    ->get('/course/edit/{course}', [CourseController::class, 'edit'])
    ->name('course.edit');

//Course edit
Route::middleware(['auth', 'verified'])
->post('/course/edit/{course}', [CourseController::class, 'update'])
->name('course.update');

//Course delete
Route::middleware(['auth', 'verified'])
->delete('/course/delete/{course}', [CourseController::class, 'delete'])
->name('course.delete');

//Manage Users - admin
Route::middleware(['auth', 'verified', 'can:manage users'])
    ->get('/admin/manage-users', [ManageUsersController::class, 'index'])
    ->name('admin.manage-user');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
