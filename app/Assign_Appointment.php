<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Assign_Appointment extends Model
{
    //
    use Notifiable;
    protected $table = 'assign_appointments';
    protected $fillable = [
        'location_id', 'employee_id', 'work_appointment_id', 'job_id', 'branch_id', 'location_id', 'created_at', 'updated_at'
    ];

    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }
    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'work_appointment_id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    public function job()
    {
        return $this->belongsTo(Job::class, 'job_id');
    }

    public function employees()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
