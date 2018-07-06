<?php

  namespace App\Http\Controllers;

  use App\Objectiffonctionnalite;
  use Illuminate\Http\Request;
  use DB;

  class ObjectiffonctionnaliteController extends Controller{

    public function showAllObjectiffonctionnalites(){

        return response()->json(Objectiffonctionnalite::all());
    }

    public function showOneObjectiffonctionnalite($id)
    {
        return response()->json(Objectiffonctionnalite::find($id));
    }

    public function create(Request $request)
    {
        $objectiffonctionnalite = Objectiffonctionnalite::create($request->all());

        return response()->json($objectiffonctionnalite, 201);
    }

    public function update($id, Request $request)
    {
        $objectiffonctionnalite = Objectiffonctionnalite::findOrFail($id);
        $objectiffonctionnalite->update($request->all());

        return response()->json($objectiffonctionnalite, 200);
    }

    public function delete($id)
    {
        Objectiffonctionnalite::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showFonctionnaliteByObjectif($id){
      $data = Objectiffonctionnalite::showFonctionnaliteByObjectifCall($id);

      return response()->json($data);
    }


    public function showObjectifByFonctionnalite($id){
      $data = Objectiffonctionnalite::showObjectifByFonctionnaliteCall($id);

      return response()->json($data);
    }
  }//End ObjectiffonctionnaliteController class {}

 ?>
