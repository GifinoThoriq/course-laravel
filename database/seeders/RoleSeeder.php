<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_admin = Role::create(['name' => 'admin']);
        $permission_manage_users = Permission::create(['name' => 'manage users']);
        
        $role_admin->givePermissionTo($permission_manage_users);

        $user = User::find(1);

        $user->assignRole($role_admin);
    }
}
