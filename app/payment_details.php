<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class payment_details extends Model
{


    protected $fillable = [
        'company_id',
        'plan_id',
        'paymethod_id',
        'pay_date',
        'start_date',
        'end_date',
        'user_id',
    ];
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function company(){
        return $this->belongsTo(company::class, 'company_id');
    }

    
public function payment_method(){
        return $this->belongsTo(payment_methods::class, 'paymethod_id');
    }

    
    public function plan(){
        return $this->belongsTo(plan::class, 'plan_id');
    }




}
