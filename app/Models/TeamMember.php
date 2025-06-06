<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;

    // If your table name is not 'team_members' (plural), specify it here
    // protected $table = 'your_table_name';

    // Fillable fields for mass assignment
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'position',
        'department',
        'photo',
        'status',
        'hire_date',
    ];
}
