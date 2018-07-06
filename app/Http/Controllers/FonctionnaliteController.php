<?php

  namespace App\Http\Controllers;

  use App\Fonctionnalite;
  use Illuminate\Http\Request;
  //use DB;

  class FonctionnaliteController extends Controller{

    public function showAllFonctionnalites(){

        return response()->json(Fonctionnalite::all());
    }

    public function showOneFonctionnalite($id)
    {
        return response()->json(Fonctionnalite::find($id));
    }

    public function create(Request $request)
    {
        $fonctionnalite = Fonctionnalite::create($request->all());

        return response()->json($fonctionnalite, 201);
    }

    public function update($id, Request $request)
    {
        $fonctionnalite = Fonctionnalite::findOrFail($id);
        $fonctionnalite->update($request->all());

        return response()->json($fonctionnalite, 200);
    }

    public function delete($id)
    {
        Fonctionnalite::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showLevierByFonctionnalite($id){
      $data = Fonctionnalite::showLevierByFonctionnaliteCall($id);

      return response()->json($data);
    }

    public function showEnjeuByFonctionnalite($id){
      $data = Fonctionnalite::showEnjeuByFonctionnaliteCall($id);

      return response()->json($data);
    }

    public function showFonctionnaliteId($libelle){
      $data = Fonctionnalite::showFonctionnaliteIdCall($libelle);

      return response()->json($data);
    }

  }//End FonctionnaliteController class {}

 ?>
