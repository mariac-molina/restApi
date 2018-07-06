<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;
  use DB;

  class Organisme extends Model{

    protected $fillable = [
      'OrganismeLibelle', 'OrganismeAdresse', 'OrganismeVille', 'OrganismePays'
    ];

    protected $hidden = [];

    public static function showObjectifByOrganismeCall($id){
      return DB::select('call getObjectifByOrganisme(?)', array($id));
    }

    public static function showFonctionnaliteByOrganismeCall($id){
      return DB::select('call getFonctionnaliteByOrganisme(?)', array($id));
    }

    public static function showLevierByOrganismeCall($id){
      return DB::select('call getLevierByOrganisme(?)', array($id));
    }

    public static function showOrganismeIdCall($libelle){
      return DB::select('call getOrganismeId(?)', array($libelle));
    }

    public static function showEnjeuByOrgLibCall($libelle){
      return DB::select('call getEnjeuByOrgaLib(?)', array($libelle));
    }

  }//End class Organisme {}

 ?>
