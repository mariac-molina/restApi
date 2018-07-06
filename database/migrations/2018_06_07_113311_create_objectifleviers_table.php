<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObjectifleviersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objectifleviers', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('ObjectifId')->unsigned();
          $table->integer('LevierId')->unsigned();
          $table->timestamps();
        });

        Schema::table('objectifleviers', function($table){
          $table->foreign('ObjectifId')
                ->references('id')->on('objectifs')
                ->onDelete('cascade');
          $table->foreign('LevierId')
                ->references('id')->on('leviers')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('objectifleviers');
    }
}
