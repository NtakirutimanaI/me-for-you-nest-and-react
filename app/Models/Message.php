<?php
// app/Models/Message.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['name', 'email', 'subject', 'message'];

    public function sender()
{
    return $this->belongsTo(User::class, 'user_id'); // Assuming there's a user_id column
}
 public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

}
