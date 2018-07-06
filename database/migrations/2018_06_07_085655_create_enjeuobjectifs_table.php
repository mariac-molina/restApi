<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnjeuobjectifsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enjeuobjectifs', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('EnjeuId')->unsigned();
          $table->integer('ObjectifId')->unsigned();
          $table->timestamps();
          $table->foreign('EnjeuId')
                ->references('id')->on('enjeus')
                ->onDelete('cascade');
          $table->foreign('ObjectifId')
                ->references('id')->on('objectifs')
                ->onDelete('cascade');
      });

      // Schema::table('enjeuobjectifs', function($table){
      //
      // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::dropIfExists('enjeuobjectifs');
    }
}
