<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
    protected $fillable = [
        'message_en', 'message_ar','start_date','end_date', 'is_shown', 'user_id', 'is_activate', 'note', 'type'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    
}
