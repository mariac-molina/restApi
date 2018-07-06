<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnjeuorganismesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enjeuorganismes', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('EnjeuId')->unsigned();
          $table->integer('OrganismeId')->unsigned();
          $table->timestamps();
        });

        Schema::table('enjeuorganismes', function($table){
          $table->foreign('EnjeuId')
                ->references('id')->on('enjeus')
                ->onDelete('cascade');
          $table->foreign('OrganismeId')
                ->references('id')->on('organismes')
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
        Schema::dropIfExists('enjeuorganismes');
    }
}
