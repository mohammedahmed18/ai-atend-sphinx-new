<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompanyRequest extends Model
{
    protected $table = 'companies_registration_requests';

    protected $fillable = [
        'company_id' , 'user_id' , 'notes'
    ];
    public function company(){
        return $this->belongsTo('\App\Company');
    }
    public function user(){
        return $this->belongsTo('\App\User');
    }
}
