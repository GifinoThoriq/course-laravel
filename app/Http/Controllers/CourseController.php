<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Course;
use Illuminate\Support\Facades\Redirect;

class CourseController extends Controller
{
    public function index(Request $request){
        $user = $request->user();
        $courses = $user -> courses;
        return Inertia::render('Course/Index/index', [
            'courses' => $courses
        ]);
    }

    public function create(User $user){

        $new_course = new Course();
        $new_course->user_id = $user->id;
        $new_course->name = 'Matematika';
        $new_course->description = 'New Course Description';
        $new_course->save();

        return back()->with([
            'success' => 'Course created successfully!',
            'flash_id' => uniqid()
        ]);
    }

    public function view(Course $course){
        return Inertia::render('Course/View/index', [
            'course' => $course
        ]);
    }

    public function edit(Course $course){
        return Inertia::render('Course/Edit/index', [
            'course' => $course
        ]);
    }

    public function update(Request $request, Course $course){
        
        //validation
        $validated = $request->validate([
            'name' => ['required', 'string', 'max: 15'],
            'description' => ['required', 'string', 'max: 200']
        ]);

        $course->name = $request->name;
        $course->description = $request->description;
        $course->save();

        return Redirect()->route('course')->with([
            'success' => 'Course Edit successfully!',
            'flash_id' => uniqid()
        ]);

    }
}
