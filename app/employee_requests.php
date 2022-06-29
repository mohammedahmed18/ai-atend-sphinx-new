<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class employee_requests extends Model
{
    protected $table = "employee_requests";
    
    protected $fillable = [
        'employee_id', 'request','date','accepted', 'accept_date', 'attachment', 'created_at', 'updated_at', 'Action'
    ];



    public function employee($id_emp)
    {
        return Employee::where('id', $id_emp)->first()->name;
    }
}
