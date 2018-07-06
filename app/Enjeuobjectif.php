<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Enjeuobjectif extends Model{

    protected $fillable = [
      'EnjeuId', 'ObjectifId'
    ];

    protected $hidden = [];

    public static function showEnjeuByObjectifCall($id){
      return DB::select('call getEnjeuByObjectif(?)', array($id));
    }

    public static function showObjectifByEnjeuCall($id){
      return DB::select('call getObjectifByEnjeu(?)', array($id));
    }

  }//End class Enjeuobjectif {}

 ?>
