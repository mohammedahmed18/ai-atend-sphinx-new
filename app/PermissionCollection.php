<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PermissionCollection extends Model
{
    protected $table = 'permission_collections';

    public function permissions(){
        return $this->hasMany(Permission::class , 'collection_id');
    }
}
