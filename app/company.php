<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class company extends Authenticatable
{

    protected $guard = 'company';

    protected $fillable = [
        'name_en', 'name_ar', 'registration_num', 'Tel_1', 'Tel_2', 'Tel_3', 'email', 'website',
        'main_address',
        'long',
        'lat',
        'commercial_record',
        'tax_card',
        'tax_card_file',
        'isActive',
        'timezone',
        'current_plan_id',
        'user_id',
        'domain_url',
        'commercial_record_file',
        'tax_card_file',
        

    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function plan(){
        return $this->belongsTo(plan::class, 'current_plan_id');
    }
    public function alerts(){
        return $this->belongsToMany('App\Alert' , 'alerts_to_companies');
    }
}
