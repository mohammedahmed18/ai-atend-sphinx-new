<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Job extends Model
{
    //
    use Notifiable;
    protected $fillable = [
        'name', 'notes','created_at','updated_at'
    ];
}
