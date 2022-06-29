<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Branch extends Model
{
    //
    use NodeTrait;
    protected $fillable = [
        'name',
        'phone',
        'address',
        'notes',
        'long',
        'lat'
    ];

    public function appointment()
    {
        return $this->hasOne(Appointment::class);
    }
}
