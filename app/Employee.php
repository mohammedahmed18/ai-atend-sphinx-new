<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Branch;
use App\Job;
use App\Attendmethods;
class Employee extends Model
{
    protected $fillable = [
        'name', 'email', 'address','phone','password', 'age' , 'branch_id' , 'gender','job_id' ,'created_at','updated_at'
    ];
    //
    public function branch(){
        return $this->belongsTo(Branch::class);
    }
    public function job(){
        return $this->belongsTo(Job::class);
    }
    public function attend_methods(){
        return $this->belongsToMany(Attendmethods::class, 'employee_attend_methods' ,null,'attend_method_id');
    }
}
