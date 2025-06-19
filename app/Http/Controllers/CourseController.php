<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Course;

class CourseController extends Controller
{
    public function index(){
        return Inertia::render('Course/Index/index');
    }

    public function create(User $user){

        $new_course = new Course();
        $new_course->user_id = $user->id;
        $new_course->name = 'Matematika';
        $new_course->description = 'New Course Description';
        $new_course->save();

        return;
    }
}
