<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Appointment extends Model
{
    //
    use Notifiable;
    protected $table = 'work_appointments';
    protected $fillable = [
        'location_id', 'start_from', 'end_to', 'delay_min', 'delay_hour', 'branch_id', 'overtime_hour', 'overtime_min', 'date', 'created_at', 'updated_at'
    ];

    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }
    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }
}
