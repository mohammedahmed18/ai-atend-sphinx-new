<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnCollectionId extends Migration
{
 
    public function up()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->unsignedBigInteger("collection_id")->nullable();
            $table
                ->foreign("collection_id")
                ->references("id")
                ->on("permission_collections")
                ->onDelete("Cascade")
                ->onUpdate("Cascade");
        });
    }

   
    public function down()
    {
        Schema::table('permissions', function (Blueprint $table) {
            //
        });
    }
}
