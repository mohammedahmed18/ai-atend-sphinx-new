<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlertToCompany extends Model
{
    protected $table = 'alerts_to_companies';

    protected $fillable = [
        'alert_id', 'company_id', 'seen', 'is_activate', 'user_id', 'created_at', 'updated_at'
    ];


    public function company()
    {
        return $this->hasMany(company::class, 'company_id');
    }
}
