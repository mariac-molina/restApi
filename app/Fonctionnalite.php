<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Fonctionnalite extends Model{

    protected $fillable = [
      'FonctionnaliteLibelle', 'FonctionnaliteDescription', 'FonctionnaliteEtat'
    ];

    protected $hidden = [];

    public static function showLevierByFonctionnaliteCall($id){
      return DB::select('call getLevierByFonctionnalite(?)', array($id));
    }

    public static function showEnjeuByFonctionnaliteCall($id){
      return DB::select('call getEnjeuByFonctionnalite(?)', array($id));
    }

    public static function showFonctionnaliteIdCall($libelle){
      return DB::select('call getFonctionnaliteId(?)', array($libelle));
    }

  }//End class Fonctionnalite {}

 ?>
