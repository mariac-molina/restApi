<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Enjeu extends Model{

    protected $fillable = [
      'EnjeuLibelle', 'EnjeuDescription', 'EnjeuEtat'
    ];

    protected $hidden = [];

    public static function showFonctionnaliteByEnjeuCall($id){
      return DB::select('call getFonctionnaliteByEnjeu(?)', array($id));
    }

    public static function showLevierByEnjeuCall($id){
      return DB::select('call getLevierByEnjeu(?)', array($id));
    }

    public static function showEnjeuIdCall($libelle){
      return DB::select('call getEnjeuID(?)', array($libelle));
    }

  }//End class Enjeu {}

 ?>
