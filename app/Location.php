<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Location extends Model
{
    //
    use Notifiable;

    protected $table = 'locations';

    protected $fillable = ['name', 'location_address', 'distance', 'location_latitude', 'location_longituide', 'notes', 'created_at', 'updated_at', 'device_id'];

    public function device()
    {
        return $this->belongsTo(Device::class, 'device_id');
    }
    public function appointment()
    {
        return $this->hasOne(Appointment::class);
    }
}
