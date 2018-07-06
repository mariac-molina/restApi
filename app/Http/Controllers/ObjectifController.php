<?php

  namespace App\Http\Controllers;

  use App\Objectif;
  use Illuminate\Http\Request;

  class ObjectifController extends Controller{

    public function showAllObjectifs(){

        return response()->json(Objectif::all());
    }

    public function showOneObjectif($id)
    {
        return response()->json(Objectif::find($id));
    }

    public function create(Request $request)
    {
        $objectif = Objectif::create($request->all());

        return response()->json($objectif, 201);
    }

    public function update($id, Request $request)
    {
        $objectif = Objectif::findOrFail($id);
        $objectif->update($request->all());

        return response()->json($objectif, 200);
    }

    public function delete($id)
    {
        Objectif::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showObjectifId($libelle){
      $data = Objectif::showObjectifIdCall($libelle);

      return response()->json($data);
    }

  }//End ObjectifController class {}

 ?>
