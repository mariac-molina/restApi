<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObjectiffonctionnaliteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objectiffonctionnalites', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ObjectifId')->unsigned();
            $table->integer('FonctionnaliteId')->unsigned();
            $table->timestamps();
        });

        Schema::table('objectiffonctionnalites', function($table){
          $table->foreign('ObjectifId')
                ->references('id')->on('objectifs')
                ->onDelete('cascade');
          $table->foreign('FonctionnaliteId')
                ->references('id')->on('fonctionnalites')
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
        Schema::dropIfExists('objectiffonctionnalites');
    }
}
