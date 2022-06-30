<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompaniesRegistrationRequest extends Model
{
    protected $table = "companies_registration_requests";
    protected $fillable = [
        'company_id', 'status', 'user_id', 'created_at', 'updated_at'
    ];
    
    public function user(){
        
        $bool =  $this->belongsTo(User::class, 'user_id');
        if($bool->user_id) {
            return $this->belongsTo(User::class, 'user_id');
        }

    }

    public function comapny(){
        return $this->belongsTo(company::class, 'company_id');
    }

    public function status ($status)
    {
        if($status == 1)
        {
            return "Under Revision ";
        }
        elseif ($status == 2) {
            return "Success Request";
        }
        elseif ($status == 3) {
            return "Some Error";
        }
    }

}
