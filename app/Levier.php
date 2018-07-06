<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Levier extends Model{

    protected $fillable = [
      'LevierLibelle', 'LevierDescription'
    ];

    protected $hidden = [];

    public static function showFonctionnaliteByLevierCall($id){
      return DB::select('call getFonctionnaliteByLevier(?)', array($id));
    }

    public static function showEnjeuByLevierCall($id){
      return DB::select('call getEnjeuByLevier(?)', array($id));
    }

    public static function showLevierIdCall($libelle){
      return DB::select('call getLevierId(?)', array($libelle));
    }

  }//End class Levier {}

 ?>
