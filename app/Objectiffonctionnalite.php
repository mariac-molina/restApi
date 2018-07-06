<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Objectiffonctionnalite extends Model{

    protected $fillable = [
      'ObjectifId', 'FonctionnaliteId'
    ];

    protected $hidden = [];

    public static function showObjectifByFonctionnaliteCall($id){
      return DB::select('call getObjectifByFonctionnalite(?)', array($id));
    }

    public static function showFonctionnaliteByObjectifCall($id){
  		return DB::select('call getFonctionnaliteByObjectif(?)', array($id));
  	}
  }//End class Enjeuobjectif {}

 ?>
