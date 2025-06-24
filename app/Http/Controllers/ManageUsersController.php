<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class ManageUsersController extends Controller
{
    public function index(){

        $all_users = User::all();

        return Inertia::render('Admin/ManageUsers/Index/index', [
            'all_users' => $all_users
        ]);
    }
}
