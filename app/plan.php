<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class plan extends Model
{
    protected $fillable = [
        'name_en', 
        'name_ar',
        'max_emp', 
        'coast',
        'duration_days',
        'create_user_id',
        'update_user_id',
        'activate',
        'note'
    
    ];

    public function user_create () {

        return $this->belongsTo(User::class, 'create_user_id');
    }

    public function user_update(){
        return $this->belongsTo(User::class, 'update_user_id');
    }

}
