<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Course;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Gate;

class CourseController extends Controller
{
    public function index(){
        $courses = Course::with('user')->get();
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
        Gate::authorize('view', $course);

        return Inertia::render('Course/View/index', [
            'course' => $course
        ]);
    }

    public function edit(Course $course){
        Gate::authorize('edit', $course);

        return Inertia::render('Course/Edit/index', [
            'course' => $course
        ]);
    }

    public function update(Request $request, Course $course){
        

        Gate::authorize('update', $course);

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

    public function delete(Course $course){

        Gate::authorize('delete', $course);

        $course->delete();

        return Redirect()->route('course')->with([
            'success' => 'Course Deleted :(',
            'flash_id' => uniqid()
        ]);
    }
}
