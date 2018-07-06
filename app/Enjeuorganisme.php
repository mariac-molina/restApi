<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Enjeuorganisme extends Model{

    protected $fillable = [
      'EnjeuId', 'OrganismeId'
    ];

    protected $hidden = [];

    public static function showEnjeuByOrganismeCall($id){
      return DB::select('call getEnjeuByOrganisme(?)', array($id));
    }

  }//End class Enjeuobjectif {}

 ?>
