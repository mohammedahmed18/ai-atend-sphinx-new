<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class payment_methods extends Model
{
    protected $fillable = [
        'name', 'details', 'note', 'isActive', 'update_user_id'
        
    ];
    public function user(){
        return $this->belongsTo(User::class, 'update_user_id');
    }

}
