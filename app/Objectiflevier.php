<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Objectiflevier extends Model{

    protected $fillable = [
      'ObjectifId', 'LevierId'
    ];

    protected $hidden = [];

    public static function showObjectifByLevierCall($id){
      return DB::select('call getObjectifByLevier(?)', array($id));
    }

    public static function showLevierByObjectifCall($id){
      return DB::select('call getLevierByObjectif(?)', array($id));
    }

  }//End class Enjeuobjectif {}

 ?>
