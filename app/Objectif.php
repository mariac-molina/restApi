<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Objectif extends Model{

    protected $fillable = [
      'ObjectifLibelle', 'ObjectifDescription', 'ObjectifEtat'
    ];

    protected $hidden = [];

    public static function showObjectifIdCall($libelle){
      return DB::select('call getObjectifId(?)', array($libelle));
    }

  }//End class Objectif {}

 ?>
